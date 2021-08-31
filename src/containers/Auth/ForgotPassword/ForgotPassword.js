import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
// import { Modal } from 'react-bootstrap';
// import SocialButton from 'components/SocialButton';
import Header from 'components/Header';
import Footer from 'components/Footer';
import * as CONSTANTS from 'common/constants';
import FormStateToRedux from 'common/util/FormStateToRedux';
import { composeValidators, required, mustBeEmail } from 'common/util/Validation';
import {
  forgotPassword as forgotPasswordAction,
  resetError as resetErrorAction,
  isLoadingForgotPassword,
  selectError,
} from 'containers/Auth/authSlice';

function ForgotPassword({ forgotPassword, resetError }) {
  const loading = useSelector(isLoadingForgotPassword);
  const asyncError = useSelector(selectError);

  useEffect(() => {
    resetError();
  }, [resetError]);

  const onSubmit = (values) => {
    forgotPassword(values);
  };

  return (
    <>
      <Header />

      {loading ? (
        <div className="loader">
          <img src="syked/assets/img/loader.svg" alt="loader" />
        </div>
      ) : null}

      <section className="login pt-5">
        <div className="container pt-5 pb-4">
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="form">
                <Form onSubmit={onSubmit} subscription={{ submitting: true, pristine: true }}>
                  {({ handleSubmit, submitting, pristine }) => (
                    <form onSubmit={handleSubmit}>
                      <FormStateToRedux form="FORGOT_PASSOWORD_FORM" />
                      <h2 className="mb-4">Forgot Password?</h2>
                      {asyncError ? (
                        <p className="text-danger">
                          <span>{asyncError}</span>
                        </p>
                      ) : null}
                      <div className="form-group">
                        <label htmlFor="email">Registered Email</label>
                        <Field
                          id="email"
                          type="email"
                          component="input"
                          className="form-control"
                          required
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

                      <div className="form-group mb-0 mt-4">
                        <button
                          type="submit"
                          className="btn btn-theme"
                          disabled={submitting || pristine}>
                          Submit
                        </button>
                      </div>
                      <div className="text-center mt-3">
                        <Link to={CONSTANTS.LOGIN_PAGE}>Back To Login</Link>
                      </div>
                    </form>
                  )}
                </Form>
              </div>
            </div>
          </div>
        </div>
        <div className="login_right">
          <img src="syked/assets/img/sing_up.png" alt="forgot password" />
        </div>
      </section>

      <Footer />
    </>
  );
}

ForgotPassword.propTypes = {
  resetError: PropTypes.func,
  forgotPassword: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  resetError: () => dispatch(resetErrorAction()),
  forgotPassword: (values) => dispatch(forgotPasswordAction(values)),
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(ForgotPassword);
