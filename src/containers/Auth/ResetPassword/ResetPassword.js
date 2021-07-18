import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { compose } from 'redux';
import { Form, Field } from 'react-final-form';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
// import { Modal } from 'react-bootstrap';
import Header from 'components/Header';
import Footer from 'components/Footer';
// import * as CONSTANTS from 'common/constants';
import FormStateToRedux from 'common/util/FormStateToRedux';
// import { composeValidators, required } from 'common/util/Validation';
import { useParams } from 'react-router-dom';
import {
  resetPassword as resetPasswordAction,
  resetError as resetErrorAction,
  isLoadingResetPassword,
  selectError,
} from 'containers/Auth/authSlice';

function ResetPassword({ resetPassword, resetError }) {
  const params = useParams();
  const loading = useSelector(isLoadingResetPassword);
  const asyncError = useSelector(selectError);

  useEffect(() => {
    resetError();
  }, [resetError]);

  const onSubmit = (values) => {
    resetPassword({ ...values, ...params });
  };

  return (
    <>
      <Header />

      {loading ? (
        <div className="loader">
          <img src="assets/img/loader.svg" alt="loader" />
        </div>
      ) : null}

      <section className="login pt-5">
        <div className="container pt-5 pb-4">
          <div className="row pt-4 align-items-center">
            <div className="col-md-12">
              <div className="form">
                <Form
                  onSubmit={onSubmit}
                  subscription={{ submitting: true, pristine: true }}
                  validate={(values) => {
                    const errors = {};
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
                  }}>
                  {({ handleSubmit, submitting, pristine }) => (
                    <form onSubmit={handleSubmit}>
                      <FormStateToRedux form="RESET_PASSOWORD_FORM" />
                      <div className="login_left">
                        <div className="">
                          <h2 className="mb-4">Reset Password</h2>
                          {asyncError ? (
                            <p className="text-danger">
                              <span>{asyncError}</span>
                            </p>
                          ) : null}
                          <div className="form-group">
                            <Field
                              type="password"
                              component="input"
                              className="form-control"
                              required
                              placeholder="Password"
                              name="password">
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
                              required
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
                          <div className="form-group mb-0 mt-4">
                            <button
                              type="submit"
                              className="btn btn-theme"
                              disabled={submitting || pristine}>
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  )}
                </Form>
              </div>
            </div>
          </div>
        </div>
        <div className="login_right">
          <img src="assets/img/sing_up.png" alt="Reset password" />
        </div>
      </section>
      <Footer />
    </>
  );
}

ResetPassword.propTypes = {
  resetError: PropTypes.func,
  resetPassword: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  resetError: (values) => dispatch(resetErrorAction(values)),
  resetPassword: (values) => dispatch(resetPasswordAction(values)),
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(ResetPassword);
