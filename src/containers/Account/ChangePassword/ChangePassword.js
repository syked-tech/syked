import React from 'react';

export default function ChangePassword() {
  return (
    <div className="inner_page mb-3">
      <div className="form">
        <form className="therpist_form">
          <div>
            <h5 className="mb-3 pb-3 border-bottom text-uppercase">Change Password</h5>
          </div>

          <div className="form-group">
            <input
              type="{{oldPasswordTextAttr}}"
              className="form-control"
              required
              placeholder="Old Password"
              name="password"
              minLength="6"
              maxLength="80"
            />
            <span className="show_password">
              <i if="oldPasswordTextAttr=='text'" className="fa fa-eye-slash"></i>
              <i if="oldPasswordTextAttr=='password'" className="fa fa-eye"></i>
            </span>
            <p if="resetPasswordForm.submitted && Password.errors" className="text-danger">
              <span if="Password.errors.required">Old Password is required.</span>
              <span if="Password.errors?.minlength">
                Old Password length must be at least 6 characters.
              </span>
            </p>
          </div>
          <div className="form-group">
            <input
              type="{{passwordTextAttr}}"
              className="form-control"
              required
              placeholder="New Password"
              name="newPassword"
              minLength="6"
              maxLength="80"
            />
            <span className="show_password">
              <i if="passwordTextAttr=='text'" className="fa fa-eye-slash"></i>
              <i if="passwordTextAttr=='password'" className="fa fa-eye"></i>
            </span>
            <p if="resetPasswordForm.submitted && newPassword.errors" className="text-danger">
              <span if="newPassword.errors.required">New Password is required.</span>
              <span if="newPassword.errors?.minlength">
                Password length must be at least 6 characters.
              </span>
            </p>
          </div>
          <div className="form-group">
            <input
              type="{{confirmPasswordTextAttr}}"
              className="form-control"
              required
              placeholder="Confirm Password"
              name="confirmPass"
            />
            <span className="show_password">
              <i if="confirmPasswordTextAttr=='text'" className="fa fa-eye-slash"></i>
              <i if="confirmPasswordTextAttr=='password'" className="fa fa-eye"></i>
            </span>
            <p if="resetPasswordForm.submitted && confirmPass.errors" className="text-danger">
              <span if="confirmPass.errors.required">Confirm Password is required.</span>
            </p>
            <span className="text-danger" if="!confirmPass.errors">
              passwordAndConfirmPasswordMsg
            </span>
            <span
              className="text-danger"
              if="model.newPassword != model.confirmPass && model.newPassword.length > 0 && model.confirmPass.length > 0 && passwordAndConfirmPasswordMsg.length == 0">
              Password does not match.
            </span>
          </div>
          <div className="form-group mb-0 mt-4">
            <button type="button" className="btn btn-theme">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
