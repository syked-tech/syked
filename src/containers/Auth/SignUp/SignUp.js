import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { Modal } from 'react-bootstrap';
import SocialButton from 'components/SocialButton';
import Header from 'components/Header';
import Footer from 'components/Footer';
import * as CONSTANTS from 'common/constants';
import FormStateToRedux from 'common/util/FormStateToRedux';
import { composeValidators, required, mustBeEmail } from 'common/util/Validation';
import SocialLogin from 'containers/Auth/SocialLogin';
import {
  selectError,
  isLoadingSignUp,
  signUp as signUpAction,
  resetError as resetErrorAction,
  socialLogin as socialLoginAction,
} from 'containers/Auth/authSlice';
import GLogo from 'common/btn_google_light_normal_ios.svg';

function SignUp({ signUp, socialLogin, resetError }) {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({});
  const [loadingSocial, setLoadingSocial] = useState(false);

  useEffect(() => {
    resetError();
  }, [resetError]);

  useEffect(() => {
    if (user?.profile) {
      const {
        profile: { id, email, firstName, lastName },
        token: { idToken: token },
        provider,
      } = user;
      const userData = {
        id,
        token,
        email,
        social_key: id,
        social_type: provider,
        first_name: firstName,
        last_name: lastName,
      };
      setLoadingSocial(false);
      socialLogin(userData);
    }
  }, [user]);

  const handleClose = () => setShow(false);
  // eslint-disable-next-line no-unused-vars
  const errorX = useSelector(selectError);
  const loading = useSelector(isLoadingSignUp);
  const onSubmit = (values) => {
    signUp(values);
  };
  const initialValues = {
    user_type: 'customer',
    social_type: '',
    social_key: '',
    kin_name: '',
    kin_number: '',
    used_referral: '',
    group_code: '',
  };
  const handleSocialAuth = (userData) => {
    setUser(userData);
  };

  const handleAuthFailure = (err) => {
    if (err.name === 'Error') {
      setLoadingSocial(false);
    }
  };

  return (
    <>
      <Header />

      {loading || loadingSocial ? (
        <div className="loader">
          <img src="assets/img/loader.svg" alt="loader" />
        </div>
      ) : null}

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <SocialLogin />
        </Modal.Body>
      </Modal>

      <section className="login pt-5 pb-5">
        <div className="container pt-5">
          <div className="row align-items-center pt-4">
            <div className="col-md-12">
              <div className="form">
                <Form
                  onSubmit={onSubmit}
                  initialValues={initialValues}
                  subscription={{ values: true, submitting: true, pristine: true }}
                  validate={(values) => {
                    const errors = {};
                    if (!values.first_name) {
                      errors.first_name = 'First name is required';
                    }
                    if (!values.last_name) {
                      errors.last_name = 'Last name is required';
                    }
                    if (!values.password) {
                      errors.password = 'Password is required';
                    }
                    if (values?.password?.length < 6) {
                      errors.password = 'The Password length must be at least 6 characters.';
                    }
                    if (!values.confirmPassword) {
                      errors.confirmPassword = 'Confirm password is required';
                    } else if (values.confirmPassword !== values.password) {
                      errors.confirmPassword = 'Confirm password does not match.';
                    }
                    return errors;
                  }}
                  render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                      <FormStateToRedux form="SIGN_UP_FORM" />
                      <div className="login_left">
                        <div className="">
                          <h2 className="mb-4">Create Account</h2>
                          <div className="d-flex align-items-center justify-content-center pb-3">
                            <div className="my-radio mr-4">
                              <Field
                                component="input"
                                className="form-check-input"
                                name="user_type"
                                id="customer"
                                type="radio"
                                value="customer"
                              />
                              <label className="form-check-label" htmlFor="customer">
                                Patient
                              </label>
                              <span className="check"></span>
                            </div>
                            <div className="my-radio">
                              <Field
                                component="input"
                                className="form-check-input"
                                name="user_type"
                                id="therapist"
                                type="radio"
                                value="therapist"
                              />
                              <label className="form-check-label" htmlFor="therapist">
                                Therapist
                              </label>
                              <span className="check"></span>
                            </div>
                          </div>
                          <div className="mb-4 login_btn d-flex justify-content-between">
                            <SocialButton
                              provider="google"
                              appId={CONSTANTS.GOOGLE_CLIENT_ID}
                              setLoadingSocial={() => setLoadingSocial(true)}
                              onLoginSuccess={handleSocialAuth}
                              onLoginFailure={handleAuthFailure}
                              className="btn customGPlusSignIn">
                              <span
                                className="g-icon"
                                style={{ backgroundImage: `url(${GLogo})` }}></span>
                              <span className="buttonGText">Google</span>
                            </SocialButton>
                            <SocialButton
                              provider="facebook"
                              appId={CONSTANTS.FACEBOOK_APP_ID}
                              setLoadingSocial={() => setLoadingSocial(true)}
                              onLoginSuccess={handleSocialAuth}
                              onLoginFailure={handleAuthFailure}
                              className="btn">
                              <span>
                                <FontAwesomeIcon icon={faFacebookF} /> Facebook
                              </span>
                            </SocialButton>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <Field
                          type="text"
                          placeholder="First name"
                          className="form-control"
                          maxLength="100"
                          component="input"
                          name="first_name">
                          {({ input, meta: { error, touched }, ...rest }) => (
                            <>
                              <input {...input} {...rest} />
                              {error && touched && <p className="text-danger">{error}</p>}
                            </>
                          )}
                        </Field>
                      </div>
                      <div className="form-group">
                        <Field
                          type="text"
                          component="input"
                          className="form-control"
                          placeholder="Last name"
                          name="last_name"
                          maxLength="100">
                          {({ input, meta: { error, touched }, ...rest }) => (
                            <>
                              <input {...input} {...rest} />
                              {error && touched && <p className="text-danger">{error}</p>}
                            </>
                          )}
                        </Field>
                      </div>
                      <div className="form-group">
                        <Field
                          type="email"
                          component="input"
                          className="form-control"
                          validate={composeValidators(required, mustBeEmail)}
                          placeholder="Email"
                          name="email"
                          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,8}$">
                          {({ input, meta: { error, touched }, ...rest }) => (
                            <>
                              <input {...input} {...rest} />
                              {error && touched && (
                                <p className="text-danger">{`${rest.placeholder} is ${error}`}</p>
                              )}
                            </>
                          )}
                        </Field>
                      </div>
                      <div className="form-group">
                        <div className="row">
                          <div className=" col-3">
                            <input
                              type="text"
                              className="form-control"
                              readOnly
                              name="code"
                              value="+27"
                            />
                          </div>
                          <div className="col-9">
                            <Field
                              type="text"
                              component="input"
                              className="form-control"
                              name="mobile_number"
                              placeholder="Phone number"
                              validate={required}
                              pattern="^(0|[0-9]*)$"
                              minLength="10"
                              maxLength="15">
                              {({ input, meta: { error, touched }, ...rest }) => (
                                <>
                                  <input {...input} {...rest} />
                                  {error && touched && (
                                    <p className="text-danger">{`${rest.placeholder} is ${error}`}</p>
                                  )}
                                </>
                              )}
                            </Field>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <Field
                          type="password"
                          component="input"
                          className="form-control"
                          placeholder="Password"
                          name="password"
                          minLength="6"
                          maxLength="20">
                          {({ input, meta: { error, touched }, ...rest }) => (
                            <>
                              <input {...input} {...rest} />
                              {error && touched && <p className="text-danger">{error}</p>}
                            </>
                          )}
                        </Field>
                      </div>
                      <div className="form-group">
                        <Field
                          type="password"
                          component="input"
                          className="form-control"
                          placeholder="Confirm Password"
                          name="confirmPassword">
                          {({ input, meta: { error, touched }, ...rest }) => (
                            <>
                              <input {...input} {...rest} />
                              {error && touched && <p className="text-danger">{error}</p>}
                            </>
                          )}
                        </Field>
                      </div>
                      {values?.user_type === 'customer' ? (
                        <>
                          <div className="form-group">
                            <Field
                              type="text"
                              component="input"
                              className="form-control"
                              placeholder="Next of Kin Name"
                              name="kin_name"
                              maxLength="100"
                            />
                          </div>
                          <div className="form-group">
                            <Field
                              type="text"
                              component="input"
                              className="form-control"
                              name="kin_number"
                              placeholder="Next of Kin Number"
                              pattern="^(0|[0-9]*)$"
                              minLength="8"
                              maxLength="15"
                            />
                          </div>
                          <div className="form-group">
                            <Field
                              type="text"
                              component="input"
                              className="form-control"
                              name="used_group_code"
                              placeholder="Group Code"
                              maxLength="10"
                            />
                          </div>
                        </>
                      ) : null}

                      <div className="form_text">
                        <p>
                          By signing up you agree to our
                          <Link target="_blank" to={CONSTANTS.TERMS_PAGE}>
                            Terms of Service.
                          </Link>
                          <span>and </span>
                          <Link target="_blank" to={CONSTANTS.PRIVACY_PAGE}>
                            Privacy Policy
                          </Link>
                        </p>
                      </div>
                      <div className="form-group mb-0 mt-4">
                        <button
                          type="submit"
                          className="btn btn-theme"
                          disabled={submitting || pristine}>
                          Sign Up
                        </button>
                      </div>
                      <div className="text-center mt-3">
                        <Link to={CONSTANTS.ROOT}>Back To Home</Link>
                      </div>
                    </form>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="login_right">
          <img src="assets/img/sing_up.png" alt="SignUp" />
        </div>
      </section>
      <Footer />
    </>
  );
}

SignUp.propTypes = {
  resetError: PropTypes.func,
  signUp: PropTypes.func,
  socialLogin: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  resetError: () => dispatch(resetErrorAction()),
  signUp: (values) => dispatch(signUpAction(values)),
  socialLogin: (values) => dispatch(socialLoginAction(values)),
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(SignUp);
