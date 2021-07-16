import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from 'containers/Auth/authSlice';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarker,
  faVideo,
  faMale,
  faClock,
  faFemale,
  faCalendar,
} from '@fortawesome/free-solid-svg-icons';
import Header from 'components/Header';
import Footer from 'components/Footer';
import * as ROUTES from 'common/constants';

import './Order.scss';

export default function Order() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  return (
    <>
      <Header isAuthenticated={isAuthenticated} />
      <section className="confirmation f7-gray">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="confirms_trust">
                <h3>TRUST & SAFETY GUARANTEE</h3>
              </div>
              <div className="text-center pb-4">
                <h2>Pay now to confirm your booking</h2>
                <p>
                  {`Thank you for trusting Syked to help you through this period, with us you'll be
                  back to feeling Syked on life in no time`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="request f7-gray">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12">
              <div className="my_request p-3 mb-4">
                <div className="d-sm-flex pt-3">
                  <div className="pro-img">
                    <img src="assets/img/user.png" alt="profile" />
                  </div>
                  <div className="pt-3 pt-sm-0 pl-sm-4 w-100">
                    <div className="d-sm-flex align-items-center justify-content-between">
                      <div>
                        <h5>Mohube Maswi</h5>
                        <h6>
                          <span>
                            <b>Social Worker</b>
                          </span>
                        </h6>
                      </div>
                      <div className="location">
                        <h5>
                          <FontAwesomeIcon icon={faMapMarker} />
                        </h5>
                      </div>
                    </div>
                    <p className="mb-3">about_me</p>
                    <h5 className="mb-3">Appointment </h5>
                    <div className="row m-0 justify-content-between align-items-center">
                      <p className="mb-0 pr-2">
                        <FontAwesomeIcon className="mr-2" icon={faVideo} />
                        <i className="fa fa-video-camera mr-2"></i>
                        <span>General</span>
                      </p>
                      <p className="mb-0 pr-2" if="therapy_type == 'teen_counseling'">
                        <FontAwesomeIcon className="mr-2" icon={faMale} />
                        <span> Students</span>
                      </p>
                      <p
                        if="therapy_type == 'online_therapy'"
                        className="mb-0 pr-2 therapist_type_img">
                        <FontAwesomeIcon className="mr-2" icon={faMale} />
                        <span>Individuals</span>
                      </p>
                      <p
                        if="therapy_type == 'marriage_counseling'"
                        className="mb-0 pr-2 therapist_type_img">
                        <FontAwesomeIcon icon={faMale} />
                        <FontAwesomeIcon icon={faFemale} />
                        <span>Couples</span>
                      </p>
                      <p className="mb-0 pr-2">
                        <FontAwesomeIcon className="mr-2" icon={faCalendar} />
                        <span>schedule_time</span>
                      </p>
                      <p className="mb-0 pr-2">
                        <FontAwesomeIcon className="mr-2" icon={faClock} />
                        <span>schedule_time</span>
                      </p>
                      <p className="mb-0">
                        <span if="is_group_code_applied == false">
                          <b>R</b> 600
                        </span>
                      </p>
                      <div>
                        <Link
                          to={ROUTES.THERAPIST_LIST_PAGE}
                          type="button"
                          className="p-0 btn btn-edit">
                          Edit
                        </Link>
                      </div>
                    </div>
                    {/* <div className="mt-2 mb-0 promo_form">
                      <div if="show_promo_code == 'yes'" className="mt-2">
                        <form className=" ng-pristine ng-valid d-md-flex">
                          <div className="form-group mb-0">
                            <input
                              type="text"
                              className="form-control"
                              required
                              placeholder="Enter Promo Code"
                              name="promo_code"
                            />
                            <div>
                              <p
                                if="promoForm.submitted && PromoCode.errors"
                                className="mb-2 text-danger">
                                <span if="PromoCode.errors.required">Promo Code is required.</span>
                              </p>
                            </div>
                          </div>
                          <div className="mt-2 mt-md-0">
                            <button type="submit" className="btn btn-theme">
                              Apply
                            </button>
                            <button type="button" className="cancel_btn btn">
                              Cancel
                            </button>
                          </div>
                        </form>
                      </div>
                      <p if="show_promo_message == 'yes'" className="text-success">
                        promo_message
                      </p>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="payment">
                <div className="mt-4 mb-4">
                  {/* <button type="button" className="btn request_btn">
                    Pay Now
                  </button> */}
                  <button type="button" className="btn request_btn">
                    Book Now
                  </button>
                  {/* <button type="button" className="btn rpromo_btn">
                    Promo Code
                  </button> */}
                  <button type="button" className="btn cancel_btn">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
