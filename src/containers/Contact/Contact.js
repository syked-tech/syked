import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { compose } from 'redux';
import { Form, Field } from 'react-final-form';
import FormStateToRedux from 'common/util/FormStateToRedux';
import { composeValidators, required, mustBeEmail } from 'common/util/Validation';
import Header from 'components/Header';
import Footer from 'components/Footer';
import {
  selectIsAuthenticated,
  isLoadingcontactUs,
  selectError,
  contactUs as contactUsAction,
  resetError as resetErrorAction,
} from 'containers/Auth/authSlice';
import './Contact.scss';

function Contact({ contactUs, resetError }) {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const asyncError = useSelector(selectError);
  const loading = useSelector(isLoadingcontactUs);

  useEffect(() => {
    resetError();
  }, [resetError]);

  const onSubmit = (values) => {
    contactUs(values);
  };
  return (
    <>
      <Header isAuthenticated={isAuthenticated} />

      {loading ? (
        <div className="loader">
          <img src="assets/img/loader.svg" alt="loader" />
        </div>
      ) : null}

      <section className="login pt-5">
        <div className="container pt-5 pb-4">
          <div className="row align-items-center pt-4 pb-5">
            <div className="col-md-6 col-lg-4">
              <div className="form contact_page">
                <Form
                  onSubmit={onSubmit}
                  subscription={{ submitting: true, pristine: true }}
                  validate={(values) => {
                    const errors = {};
                    if (!values.user_name) {
                      errors.user_name = 'Name is required';
                    }
                    if (!values.phone) {
                      errors.phone = 'Phone number is required';
                    }
                    if (!values.message) {
                      errors.message = 'Message is required';
                    }
                    return errors;
                  }}>
                  {({ handleSubmit, submitting, pristine }) => (
                    <form onSubmit={handleSubmit}>
                      <FormStateToRedux form="CONTACT_FORM" />
                      <h2 className="mb-4 text-center">Contact Us</h2>
                      {asyncError ? (
                        <p className="text-danger">
                          <span>{asyncError}</span>
                        </p>
                      ) : null}
                      <div className="form-group">
                        <Field
                          component="input"
                          type="text"
                          placeholder="Name"
                          name="user_name"
                          className="form-control"
                          required>
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
                          component="input"
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          validate={composeValidators(required, mustBeEmail)}
                          name="email"
                          required>
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
                          component="input"
                          type="text"
                          className="form-control"
                          name="phone"
                          placeholder="Phone"
                          required
                          pattern="^(0|[0-9][0-9]*)$"
                          minLength="8"
                          maxLength="15">
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
                          component="textarea"
                          className="form-control"
                          placeholder="Message"
                          name="message"
                          required>
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
                          Send
                        </button>
                      </div>
                    </form>
                  )}
                </Form>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 notes d-flex align-items-center">
              <div className="col-md-12 notes_text">
                <div className="login_left justify-content-start">
                  <div className="p-0">
                    <h4 className="mb-4">Official Address</h4>
                    <div className="text-left">
                      <p>
                        <strong>Head Office</strong>
                      </p>
                      <p>Baobab Building</p>
                      <p>River Falls Office Park</p>
                      <p>262 Rose Avenue Centurion</p>
                      <p>0157 South Africa</p>
                    </div>
                  </div>
                </div>
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

Contact.propTypes = {
  contactUs: PropTypes.func,
  resetError: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  contactUs: (values) => dispatch(contactUsAction(values)),
  resetError: () => dispatch(resetErrorAction()),
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(Contact);
