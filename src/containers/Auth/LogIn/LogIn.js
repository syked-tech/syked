import React from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import Header from 'components/Header';
import Footer from 'components/Footer';
import * as ROUTES from 'common/constants';
import FormStateToRedux from 'common/util/FormStateToRedux';

import { signIn as signInAction, selectError } from 'containers/Auth/authSlice';
import GLogo from 'common/btn_google_light_normal_ios.svg';

function LogIn({ signIn }) {
  const error = useSelector(selectError);
  const onSubmit = (values) => {
    signIn(values);
  };
  return (
    <>
      <Header />
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
                          <Link disabled to="#0" id="customGBtn" className="btn customGPlusSignIn">
                            <span
                              className="g-icon"
                              style={{ backgroundImage: `url(${GLogo})` }}></span>
                            <span className="buttonGText">Google</span>
                          </Link>
                          <Link disabled to="#0" className="btn">
                            <span>
                              <FontAwesomeIcon icon={faFacebookF} /> Facebook
                            </span>
                          </Link>
                        </div>
                      </div>
                      {error ? (
                        <p style={{ color: 'red' }}>
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
                        <Link to={ROUTES.FORGOT_PASSWORD_PAGE} className="mb-2">
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
                          Don’t have an Account? <Link to={ROUTES.SIGN_UP_PAGE}>Sign UP</Link>
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
          <img src="assets/img/sing_up.png" alt="Login" />
        </div>
      </section>
      <Footer />
    </>
  );
}

LogIn.propTypes = {
  signIn: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  signIn: (values) => dispatch(signInAction(values)),
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(LogIn);
