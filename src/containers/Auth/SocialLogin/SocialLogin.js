import React from 'react';

// eslint-disable-next-line no-unused-vars
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

// eslint-disable-next-line no-unused-vars
const StepTwo = () => (
  <div className="form" if="is_mobile_verification === 'yes'">
    <form className="ng-pristine ng-valid">
      <input type="hidden" name="user_type" />
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
        <button type="button" className="btn btn-theme">
          Submit
        </button>
      </div>
    </form>
  </div>
);

export default function SocialLogin() {
  return (
    <div className="login mobile_popup">
      <div className="container">
        <div className="row align-items-center">
          <div className="w-100 p-4">
            <StepOne />
            {/* <StepTwo /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
