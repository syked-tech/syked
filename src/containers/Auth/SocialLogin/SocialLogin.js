import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import FormStateToRedux from 'common/util/FormStateToRedux';

const StepOne = () => (
  <div className="form">
    <form>
      <h2>Social Login</h2>
      <p>Insert your details below to complete your sign-up</p>

      <div className="form-group">
        <input
          type="text"
          className="mb-2 form-control"
          placeholder="Email"
          name="email"
          required
        />
        <small className="text-danger">The Email is required.</small>
      </div>

      <div className="form-group">
        <input
          type="text"
          className="mb-2 form-control"
          name="phone"
          placeholder="Cell Number"
          required
          pattern="^(0|[0-9]*)$"
          minLength="10"
          maxLength="12"
        />
        <small className="text-danger">The cell number is required.</small>
      </div>

      <div className="form-group">
        <input
          type="text"
          className="mb-2 form-control"
          name="group_code"
          placeholder="Group Code"
          maxLength="50"
        />
        <small className="text-danger">The Group Code not valid.</small>
      </div>

      <div className="form-group mb-0 mt-4">
        <button type="button" className="btn btn-theme">
          Continue
        </button>
      </div>
    </form>
  </div>
);

const StepTwo = ({ onSubmit }) => (
  <div className="form" if="is_mobile_verification === 'yes'">
    <Form onSubmit={onSubmit} subscription={{ submitting: true, pristine: true }}>
      {({ handleSubmit, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
          <FormStateToRedux form="SOCIAL_LOGIN_FORM" />
          <Field component="input" type="hidden" name="user_type" />
          <h2 className="mb-4">Mobile Verification</h2>
          <div className="form-group">
            <label htmlFor="num1">Verification Code</label>
            <div className="mb-2 otp_inputs">
              <input
                id="num1"
                pattern="^(0|[1-9][0-9]*)$"
                required
                name="first"
                type="text"
                maxLength="1"
                minLength="1"
                className="form-control"
                value=""
                placeholder="*"
              />
              <input
                id="num2"
                name="second"
                pattern="^(0|[1-9][0-9]*)$"
                required
                type="text"
                maxLength="1"
                minLength="1"
                className="form-control"
                value=""
                placeholder="*"
              />
              <input
                id="num3"
                name="third"
                pattern="^(0|[1-9][0-9]*)$"
                required
                type="text"
                maxLength="1"
                minLength="1"
                className="form-control"
                value=""
                placeholder="*"
              />
              <input
                id="num4"
                name="fourth"
                pattern="^(0|[1-9][0-9]*)$"
                required
                type="text"
                maxLength="1"
                minLength="1"
                className="form-control"
                value=""
                placeholder="*"
              />
            </div>
            <small className="text-danger">Please Enter a Four digit varification code.</small>
          </div>
          <div className="form-group mb-0 mt-4">
            <button type="submit" className="btn btn-theme" disabled={submitting || pristine}>
              Login
            </button>
          </div>
        </form>
      )}
    </Form>
  </div>
);

StepTwo.propTypes = {
  onSubmit: PropTypes.func,
};

export default function SocialLogin() {
  const onSubmit = (values) => {
    // eslint-disable-next-line no-undef
    signIn(values);
  };
  return (
    <div className="login mobile_popup">
      <div className="container">
        <div className="row align-items-center">
          <div className="w-100 p-4">
            <StepOne onSubmit={onSubmit} />
            {/* <StepTwo onSubmit={onSubmit} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
