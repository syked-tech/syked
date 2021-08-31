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
import SocialLogin from 'containers/Auth/SocialLogin';
import {
  signIn as signInAction,
  socialLogin as socialLoginAction,
  resetError as resetErrorAction,
  isLoadingSignIn,
  selectError,
} from 'containers/Auth/authSlice';
import GLogo from 'common/btn_google_light_normal_ios.svg';

function LogIn({ signIn, resetError, socialLogin }) {
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
  const error = useSelector(selectError);
  const loading = useSelector(isLoadingSignIn);
  const onSubmit = (values) => {
    signIn(values);
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
          <img src="syked/assets/img/loader.svg" alt="loader" />
        </div>
      ) : null}

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <SocialLogin />
        </Modal.Body>
      </Modal>

      <section className="login pt-5">
        <div className="container pt-5 pb-4">
          <div className="row pt-4 align-items-center">
            <div className="col-md-12">
              <div id="login" className="form">
                <Form onSubmit={onSubmit} subscription={{ submitting: true, pristine: true }}>
                  {({ handleSubmit, submitting, pristine }) => (
                    <form onSubmit={handleSubmit}>
                      <FormStateToRedux form="LOGIN_FORM" />
                      <div className="login_left">
                        <h2 className="mb-3">Login</h2>
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
                      {error ? (
                        <p className="text-danger">
                          <span>{error}</span>
                        </p>
                      ) : null}
                      <div className="form-group">
                        <Field
                          type="text"
                          component="input"
                          className="form-control"
                          required
                          placeholder="Email"
                          name="email"
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          type="password"
                          component="input"
                          className="form-control"
                          required
                          placeholder="Password"
                          name="password"
                        />
                      </div>
                      <div className="form_text row m-0 align-items-center justify-content-between">
                        <Link to={CONSTANTS.FORGOT_PASSWORD_PAGE} className="mb-2">
                          Forgot Password?
                        </Link>
                      </div>
                      <div className="form-group mb-0 mt-4">
                        <button
                          type="submit"
                          className="btn btn-theme"
                          disabled={submitting || pristine}>
                          Login
                        </button>
                      </div>
                      <div className="mt-3 text-center">
                        <p className="mb-0">
                          Don’t have an Account? <Link to={CONSTANTS.SIGN_UP_PAGE}>Sign UP</Link>
                        </p>
                      </div>
                    </form>
                  )}
                </Form>
              </div>
            </div>
          </div>
        </div>
        <div className="login_right">
          <img src="syked/assets/img/sing_up.png" alt="Login" />
        </div>
      </section>
      <Footer />
    </>
  );
}

LogIn.propTypes = {
  signIn: PropTypes.func,
  resetError: PropTypes.func,
  socialLogin: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  signIn: (values) => dispatch(signInAction(values)),
  socialLogin: (values) => dispatch(socialLoginAction(values)),
  resetError: () => dispatch(resetErrorAction()),
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(LogIn);
