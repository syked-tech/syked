import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import Header from 'components/Header';
import Footer from 'components/Footer';
import * as ROUTES from 'common/constants';
import FormStateToRedux from 'common/util/FormStateToRedux';
import { composeValidators, required, mustBeEmail } from 'common/util/Validation';

import { signUp as signUpAction } from 'containers/Auth/authSlice';
import GLogo from 'common/btn_google_light_normal_ios.svg';

function SignUp({ signUp }) {
  const onSubmit = (values) => {
    signUp(values);
  };
  const initialValues = {
    user_type: 'patient',
  };
  return (
    <>
      <Header />
      <section className="login pt-5 pb-5">
        <div className="container pt-5">
          <div className="row align-items-center pt-4">
            <div className="col-md-12">
              <div className="form">
                <Form
                  onSubmit={onSubmit}
                  initialValues={initialValues}
                  subscription={{ values: true, submitting: true, pristine: true }}
                  render={({ handleSubmit, form, submitting, pristine }) => (
                    <form onSubmit={handleSubmit}>
                      <FormStateToRedux form="SIGN_UP_FORM" />
                      {/* <pre>{JSON.stringify({ values, form }, 0, 2)}</pre> */}
                      <div className="login_left">
                        <div className="">
                          <h2 className="mb-4">Create Account</h2>
                          <div className="d-flex align-items-center justify-content-center pb-3">
                            <div className="my-radio mr-4">
                              <Field
                                component="input"
                                className="form-check-input"
                                name="user_type"
                                id="patient"
                                type="radio"
                                value="patient"
                              />
                              <label className="form-check-label" htmlFor="patient">
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
                          <div className="mb-4 login_btn d-flex align-items-center justify-content-between">
                            <div href="#0" id="customGBtn" className="btn customGPlusSignIn">
                              <span
                                className="g-icon"
                                style={{ backgroundImage: `url(${GLogo})` }}></span>
                              <span className="buttonGText">Google</span>
                            </div>
                            <a href="#0" className="btn">
                              <FontAwesomeIcon icon={faFacebookF} /> Facebook
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <Field
                          type="text"
                          placeholder="First Name"
                          className="form-control"
                          maxLength="100"
                          component="input"
                          validate={required}
                          name="first_name">
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
                        <Field
                          type="text"
                          component="input"
                          className="form-control"
                          validate={required}
                          placeholder="Last Name"
                          name="last_name"
                          maxLength="100">
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
                              placeholder="Phone Number"
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
                          validate={required}
                          placeholder="Password"
                          name="password"
                          minLength="6"
                          maxLength="20">
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
                        <Field
                          type="password"
                          component="input"
                          className="form-control"
                          validate={required}
                          placeholder="Confirm Password"
                          name="confirmPassword">
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
                      <div className="form_text">
                        <p>
                          By signing up you agree to our
                          <Link target="_blank" to={ROUTES.TERMS_PAGE}>
                            Terms of Service.
                          </Link>
                          and
                          <Link target="_blank" to={ROUTES.PRIVACY_PAGE}>
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
                        <Link to={ROUTES.ROOT}>Back To Home</Link>
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
  signUp: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  signUp: (values) => dispatch(signUpAction(values)),
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(SignUp);
