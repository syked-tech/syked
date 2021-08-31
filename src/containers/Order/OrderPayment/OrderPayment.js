import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
// import { Form, Field } from 'react-final-form';
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

export default function OrderPayment() {
  const [showPromo, setShowPromo] = useState(false);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const returnUrl = `http://192.168.43.161:4200/order/success/1234`;
  const cancelUrl = `http://192.168.43.161:4200/order/cancel/1234`;
  const notifyUrl = `http://192.168.43.161:4200/order/notify/1234`;

  const payfastForm = useRef(null);

  // eslint-disable-next-line no-unused-vars
  const onPayOrder = () => {
    // createOrder
    // API: /order/create
    // Payload

    // eslint-disable-next-line no-unused-vars
    const payload = {
      therapist_id: 189,
      schedule_date: '2021-10-21T16:00:00.000Z',
      therapy_type: 'clinical_psychologist',
      question_answer:
        '[{"id":31,"question":"Worry that things always go wrong in your life","answer":"Most of the time","options":"","score":"2","question_type":"radio"},{"id":35,"question":"Having little or no interest doing things I am used to doing","answer":" ALL THE TIME","options":"","score":"3","question_type":"radio"},{"id":38,"question":"Feeling sad, depressed, or worthless","answer":" MOST OF THE TIME","options":"","score":"2","question_type":"radio"},{"id":43,"question":"Unable to relax even when you are not doing anything","answer":" ALL THE TIME","options":"","score":"3","question_type":"radio"},{"id":47,"question":"Feeling exhausted or having little or no energy","answer":" MOST OF THE TIME","options":"","score":"2","question_type":"radio"},{"id":51,"question":"Worry about your safety","answer":"SOMETIMES","options":"","score":"1","question_type":"radio"},{"id":55,"question":"Struggling to fall asleep/ staying asleep/  or oversleeping","answer":"SOMETIMES","options":"","score":"1","question_type":"radio"},{"id":59,"question":"Extremely happy mood for no particular reason","answer":" MOST OF THE TIME","options":"","score":"2","question_type":"radio"},{"id":63,"question":"Thoughts that the world would be better off with you dead or thoughts of  hurting yourself in some way","answer":"SOMETIMES","options":"","score":"1","question_type":"radio"},{"id":67,"question":"Fear of being in public spaces","answer":" MOST OF THE TIME","options":"","score":"2","question_type":"radio"},{"id":71,"question":"No motivation when doing things and being slow than usual","answer":"SOMETIMES","options":"","score":"1","question_type":"radio"},{"id":75,"question":"When stressed struggling to breathe/experiencing dizziness/ headache/ rapid heartbeat/ sweating/ chest pain","answer":" MOST OF THE TIME","options":"","score":"2","question_type":"radio"},{"id":79,"question":"No desire to eat or eating more than normal  ","answer":"SOMETIMES","options":"","score":"1","question_type":"radio"},{"id":83,"question":"Feeling that you are not good enough and are destined to experience bad things ","answer":" MOST OF THE TIME","options":"","score":"2","question_type":"radio"},{"id":87,"question":"Struggling to focus on tasks","answer":" MOST OF THE TIME","options":"","score":"2","question_type":"radio"},{"id":91,"question":"Being easily short-tempered and agitated","answer":"SOMETIMES","options":"","score":"1","question_type":"radio"},{"id":94,"question":"Excessive fear of dying","answer":" MOST OF THE TIME","options":"","score":"2","question_type":"radio"},{"id":99,"question":"Being forgetful about normal routine stuff","answer":" MOST OF THE TIME","options":"","score":"2","question_type":"radio"},{"id":103,"question":"Uncontrollable worry","answer":" MOST OF THE TIME","options":"","score":"2","question_type":"radio"},{"id":107,"question":"Wanting to always be alone and avoiding loved ones","answer":" MOST OF THE TIME","options":"","score":"2","question_type":"radio"},{"id":111,"question":"Constant thoughts/ flashbacks of an experienced/witnessed trauma","answer":"SOMETIMES","options":"","score":"1","question_type":"radio"},{"id":114,"question":"Avoiding reminders of the traumatic experience","answer":" MOST OF THE TIME","options":"","score":"2","question_type":"radio"},{"id":119,"question":"Use of substances more than usual","answer":" MOST OF THE TIME","options":"","score":"2","question_type":"radio"},{"id":122,"question":"Having excess energy and doing many things at once","answer":" ALL THE TIME","options":"","score":"3","question_type":"radio"},{"id":127,"question":"Engaging in reckless behavior e.g. more casual sexual relationships, irresponsible spending","answer":" MOST OF THE TIME","options":"","score":"2","question_type":"radio"},{"id":130,"question":"Family members express worry about your emotional/ mental health","answer":" MOST OF THE TIME","options":"","score":"2","question_type":"radio"}]',
      score: 48,
      price: 699,
      total_amount: 699,
      timeoffset: 120,
      promo_code: '',
      discount_promo_code: 0,
      group_code_applied: false,
      referral_discount_amount: 0,
      referral_code: '',
      is_my_code: '',
    };

    // if user has promo go to success else create order and redirect to payfast
    const bodyFormData = new FormData();
    bodyFormData.append('merchant_id', '10000100');
    bodyFormData.append('merchant_key', '46f0cd694581a');
    bodyFormData.append('amount', '100.00');
    bodyFormData.append('item_name', 'Test Product');

    axios({
      method: 'post',
      url: 'https://sandbox.payfast.co.za​/eng/process',
      data: bodyFormData,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
      .then((response) => {
        // handle success
        // eslint-disable-next-line no-console
        console.log(response);
      })
      .catch((response) => {
        // handle error
        // eslint-disable-next-line no-console
        console.log(response);
      });
  };
  const onOpenPromoCode = () => {
    setShowPromo(true);
  };
  const onClosePromoCode = () => {
    setShowPromo(false);
  };
  const onApplyPromo = () => {
    // order/apply-promo
  };
  const onCancelOrder = () => {};

  const onCreateOrder = () => {
    payfastForm.current.submit();
    // console.log();
  };

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
                    <img src="syked/assets/img/user.png" alt="profile" />
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
                    {showPromo ? (
                      <div className="mt-2 mb-0 promo_form">
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
                                  <span>Promo Code is required.</span>
                                </p>
                              </div>
                            </div>
                            <div className="mt-2 mt-md-0">
                              <button
                                onClick={onApplyPromo}
                                type="submit"
                                className="btn btn-theme">
                                Apply
                              </button>
                              <button
                                onClick={onClosePromoCode}
                                type="button"
                                className="cancel_btn btn">
                                Cancel
                              </button>
                            </div>
                          </form>
                        </div>
                        <p if="show_promo_message == 'yes'" className="text-success">
                          promo_message
                        </p>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="payment">
                <div className="mt-4 mb-4">
                  <form
                    ref={payfastForm}
                    action="https://sandbox.payfast.co.za​/eng/process"
                    method="post">
                    <input type="hidden" name="merchant_id" value="10000100" />
                    <input type="hidden" name="merchant_key" value="46f0cd694581a" />
                    <input type="hidden" name="amount" value="100.00" />
                    <input type="hidden" name="item_name" value="Test Product" />
                    <input type="hidden" name="return_url" value={returnUrl} />
                    <input type="hidden" name="cancel_url" value={cancelUrl} />
                    <input type="hidden" name="notify_url" value={notifyUrl} />
                    <button onClick={onCreateOrder} type="button" className="btn request_btn">
                      Pay Now
                    </button>
                    {/* <button type="button" className="btn request_btn">
                      Book Now
                    </button> */}
                    <button onClick={onOpenPromoCode} type="button" className="btn rpromo_btn">
                      Promo Code
                    </button>
                    <button onClick={onCancelOrder} type="button" className="btn cancel_btn">
                      Cancel
                    </button>
                  </form>
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
