/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

export default function EditProfile() {
  return (
    <div className="inner_page mb-3">
      <div className="form">
        <form className="therpist_form">
          <div>
            <h5 className="mb-3 pb-3 border-bottom text-uppercase">Edit Profile</h5>
            {/* <p if="update_account_error !=''" style={{ color: 'red' }}>
              <span>error</span>
            </p>
            <p if="update_account_success !=''" style={{ color: 'green' }}>
              <span>success</span>
            </p> */}
          </div>
          <div className="d-sm-flex">
            <div className="pro_img">
              <label>
                <FontAwesomeIcon icon={faPencilAlt} />
                <img src="assets/img/user.png" alt="Profile" />
                <input type="file" name="image" />
              </label>
            </div>
            <div className="pr-d w-md-100 row mb-0">
              <div className="mb-3 col-md-6">
                <label>Name</label>
                <div className="form-group mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="first_name"
                    required
                  />
                  {/* <p if="updateProfileForm.submitted && FirstName.errors" style={{ color: 'red' }}>
                    <span if="FirstName.errors.required">The Name is required.</span>
                  </p> */}
                </div>
              </div>
              <div className="mb-3 col-md-6">
                <label>Age</label>
                <div className="form-group mb-2">
                  <select className="form-control" name="age" age="age">
                    <option value="">Select Age</option>
                    <option value="">0 years</option>
                  </select>
                </div>
              </div>
              <div className="mb-3 col-md-6">
                <label>Suburb</label>
                <div className="form-group mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                    required
                    name="address"
                  />
                  {/* <p if="updateProfileForm.submitted && Address.errors" style={{ color: 'red' }}>
                    <span if="Address.errors.required">The Suburb is required.</span>
                  </p> */}
                </div>
              </div>
              <div className="mb-3 col-md-6">
                <label>City</label>
                <div className="form-group mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City"
                    required
                    name="city"
                  />
                  {/* <p if="updateProfileForm.submitted && City.errors" style={{ color: 'red' }}>
                    <span if="City.errors.required">The City is required.</span>
                  </p> */}
                </div>
              </div>
              <div className="mb-3 col-md-6">
                <label>Next of Kin Name</label>
                <div className="form-group mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Next of Kin Name"
                    name="kin_name"
                  />
                </div>
              </div>
              <div className="mb-3 col-md-6">
                <label>Next of Kin Number</label>
                <div className="form-group mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Next of Kin Number"
                    name="kin_number"
                    pattern="^(0|[0-9]*)$"
                    minLength="8"
                    maxLength="15"
                  />
                  {/* <p if="updateProfileForm.submitted && kinnumber.errors" style={{ color: 'red' }}>
                    <span if="kinnumber.errors?.pattern">
                      Please enter a valid next of kin number.
                    </span>
                    <span if="kinnumber.errors?.minlength">Please enter at least 8 digits.</span>
                    <span if="kinnumber.errors?.maxlength">Please enter maximum 15 digits.</span>
                  </p> */}
                </div>
              </div>
              <div className="mb-3 col-md-6">
                <div className="form-group m-0">
                  <button type="submit" className="btn btn-theme text-uppercase">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
