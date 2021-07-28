import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { compose } from 'redux';
import { useParams, useHistory } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import FormStateToRedux from 'common/util/FormStateToRedux';
import Header from 'components/Header';
import Footer from 'components/Footer';
import * as CONSTANTS from 'common/constants';

import {
  selectError,
  loadDisclaimerScreen,
  isLoadingMobileVerify,
  mobileVerify as mobileVerifyAction,
  resetError as resetErrorAction,
} from 'containers/Auth/authSlice';

function MobileVerification({ resetError, mobileVerify }) {
  const error = useSelector(selectError);
  const loading = useSelector(isLoadingMobileVerify);
  const isLoadDisclaimerScreen = useSelector(loadDisclaimerScreen);
  const { email } = useParams();
  const history = useHistory();

  useEffect(() => {
    resetError();
  }, [resetError]);

  useEffect(() => {
    if (isLoadDisclaimerScreen) {
      history.push(CONSTANTS.DISCLAIMER_PAGE);
    }
  }, [isLoadDisclaimerScreen]);

  useEffect(() => {
    const inputElements = [...document.querySelectorAll('input.code-input')];

    inputElements.forEach((ele, index) => {
      ele.addEventListener('keydown', (e) => {
        if (e.keyCode === 8 && e.target.value === '') inputElements[Math.max(0, index - 1)].focus();
      });
      ele.addEventListener('input', (e) => {
        const [first, ...rest] = e.target.value;
        // e.target.value = first ?? '';
        if (index !== inputElements.length - 1 && first !== undefined) {
          inputElements[index + 1].focus();
          inputElements[index + 1].value = rest.join('');
          inputElements[index + 1].dispatchEvent(new Event('input'));
        }
      });
    });
  }, []);

  const onSubmit = (values) => {
    const code = Object.keys(values)
      .map((key) => values[key])
      .join('');
    mobileVerify({ email: decodeURIComponent(email), code });
  };

  return (
    <>
      <Header />

      {loading ? (
        <div className="loader">
          <img src="assets/img/loader.svg" alt="loader" />
        </div>
      ) : null}
      <section className="login">
        <div className="container">
          <div className="row pt-4 align-items-center">
            <div className="col-md-12">
              <div className="form">
                <Form
                  onSubmit={onSubmit}
                  subscription={{ values: true, submitting: true, pristine: true }}
                  validate={(values) => {
                    const errors = {};
                    if (!values.num1) {
                      errors.num1 = 'Code is required';
                    }
                    if (!values.num2) {
                      errors.num2 = 'Code is required';
                    }
                    if (!values.num3) {
                      errors.num3 = 'Code is required';
                    }
                    if (!values.num4) {
                      errors.num4 = 'Code is required';
                    }
                    if (!values.num5) {
                      errors.num5 = 'Code is required';
                    }
                    if (!values.num6) {
                      errors.num6 = 'Code is required';
                    }
                    return errors;
                  }}
                  render={({ handleSubmit, form, submitting, pristine }) => (
                    <form onSubmit={handleSubmit} autoComplete="off">
                      <FormStateToRedux form="MOBILE_VERIFICATION_FORM" />
                      <h2 className="mb-4">Mobile Verification</h2>
                      <div className="form-group">
                        <div className="otp_inputs">
                          <Field
                            pattern="^(0|[1-9][0-9]*)$"
                            name="num1"
                            type="text"
                            component="input"
                            maxLength="1"
                            minLength="1"
                            className="code-input form-control mr-2"
                            placeholder="*">
                            {({ input, meta: { error: e, touched }, ...rest }) => (
                              <>
                                <input {...input} {...rest} />
                                {e && touched && <p className="text-danger">{e}</p>}
                              </>
                            )}
                          </Field>
                          <Field
                            name="num2"
                            pattern="^(0|[1-9][0-9]*)$"
                            type="text"
                            component="input"
                            maxLength="1"
                            minLength="1"
                            className="code-input form-control mr-2"
                            placeholder="*">
                            {({ input, meta: { error: e, touched }, ...rest }) => (
                              <>
                                <input {...input} {...rest} />
                                {e && touched && <p className="text-danger">{e}</p>}
                              </>
                            )}
                          </Field>
                          <Field
                            name="num3"
                            pattern="^(0|[1-9][0-9]*)$"
                            type="text"
                            component="input"
                            maxLength="1"
                            minLength="1"
                            className="code-input form-control mr-2"
                            placeholder="*">
                            {({ input, meta: { error: e, touched }, ...rest }) => (
                              <>
                                <input {...input} {...rest} />
                                {e && touched && <p className="text-danger">{e}</p>}
                              </>
                            )}
                          </Field>
                          <Field
                            name="num4"
                            pattern="^(0|[1-9][0-9]*)$"
                            type="text"
                            component="input"
                            maxLength="1"
                            minLength="1"
                            className="code-input form-control mr-2"
                            placeholder="*">
                            {({ input, meta: { error: e, touched }, ...rest }) => (
                              <>
                                <input {...input} {...rest} />
                                {e && touched && <p className="text-danger">{e}</p>}
                              </>
                            )}
                          </Field>
                          <Field
                            name="num5"
                            pattern="^(0|[1-9][0-9]*)$"
                            type="text"
                            component="input"
                            maxLength="1"
                            minLength="1"
                            className="code-input form-control mr-2"
                            placeholder="*">
                            {({ input, meta: { error: e, touched }, ...rest }) => (
                              <>
                                <input {...input} {...rest} />
                                {e && touched && <p className="text-danger">{e}</p>}
                              </>
                            )}
                          </Field>
                          <Field
                            name="num6"
                            pattern="^(0|[1-9][0-9]*)$"
                            type="text"
                            component="input"
                            maxLength="1"
                            minLength="1"
                            className="code-input form-control mr-2"
                            placeholder="*">
                            {({ input, meta: { error: e, touched }, ...rest }) => (
                              <>
                                <input {...input} {...rest} />
                                {e && touched && <p className="text-danger">{e}</p>}
                              </>
                            )}
                          </Field>
                        </div>
                        <br />
                        {error ? (
                          <p className="text-danger">
                            <span>{error}</span>
                          </p>
                        ) : null}
                      </div>
                      <div className="mb-0 mt-4">
                        <button
                          type="submit"
                          className="btn btn-theme"
                          disabled={submitting || pristine}>
                          Sign Up
                        </button>
                        <p className="mb-0 text-center mt-3">
                          <a disabled href="#0" className="link">
                            <i className="fa fa-repeat"></i> Resend Code
                          </a>
                        </p>
                      </div>
                    </form>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="login_right">
          <img src="assets/img/sing_up.png" alt="Verification" />
        </div>
      </section>
      <Footer />
    </>
  );
}

MobileVerification.propTypes = {
  resetError: PropTypes.func,
  mobileVerify: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  resetError: () => dispatch(resetErrorAction()),
  mobileVerify: (values) => dispatch(mobileVerifyAction(values)),
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(MobileVerification);
