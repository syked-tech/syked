/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Slide from '@material-ui/core/Slide';
import Header from 'components/Header';
import Footer from 'components/Footer';

import bookbg from 'common/booking_bg.jpg';
import './Questions.scss';

const questions = [
  {
    id: 30,
    question: 'Worry that things always go wrong in your life',
    therapy_type: 'student',
    question_type: 'radio',
    options:
      '[{"0":{"option":"Never","score":"0"},"1":{"option":"Sometimes","score":"1"},"2":{"option":"Most of the time","score":"2"},"3":{"option":"All of the time","score":"3"}}]',
    status: 'active',
    created_at: '2020-06-14T12:19:20.000Z',
    updated_at: '2020-06-14T12:21:41.000Z',
    deleted_at: null,
  },
  {
    id: 32,
    question: 'Having little or no interest doing things I am used to doing',
    therapy_type: 'student',
    question_type: 'radio',
    options:
      '[{"0":{"option":"NEVER","score":"0"},"1":{"option":"SOMETIMES","score":"1"},"2":{"option":" MOST OF THE TIME","score":"2"},"3":{"option":" ALL THE TIME","score":"3"}}]',
    status: 'active',
    created_at: '2020-06-14T12:20:53.000Z',
    updated_at: '2020-06-14T12:21:29.000Z',
    deleted_at: null,
  },
  {
    id: 36,
    question: 'Feeling sad, depressed, or worthless',
    therapy_type: 'student',
    question_type: 'radio',
    options:
      '[{"0":{"option":"NEVER","score":"0"},"1":{"option":"SOMETIMES","score":"1"},"2":{"option":" MOST OF THE TIME","score":"2"},"3":{"option":" ALL THE TIME","score":"3"}}]',
    status: 'active',
    created_at: '2020-06-14T12:23:06.000Z',
    updated_at: '2020-06-14T12:23:06.000Z',
    deleted_at: null,
  },
  {
    id: 40,
    question: 'Unable to relax even when you are not doing anything',
    therapy_type: 'student',
    question_type: 'radio',
    options:
      '[{"0":{"option":"NEVER","score":"0"},"1":{"option":"SOMETIMES","score":"1"},"2":{"option":" MOST OF THE TIME","score":"2"},"3":{"option":" ALL THE TIME","score":"3"}}]',
    status: 'active',
    created_at: '2020-06-14T12:24:11.000Z',
    updated_at: '2020-06-14T12:24:11.000Z',
    deleted_at: null,
  },
  {
    id: 44,
    question: 'Feeling exhausted or having little or no energy',
    therapy_type: 'student',
    question_type: 'radio',
    options:
      '[{"0":{"option":"NEVER","score":"0"},"1":{"option":"SOMETIMES","score":"1"},"2":{"option":" MOST OF THE TIME","score":"2"},"3":{"option":" ALL THE TIME","score":"3"}}]',
    status: 'active',
    created_at: '2020-06-14T12:25:11.000Z',
    updated_at: '2020-06-14T12:25:11.000Z',
    deleted_at: null,
  },
  {
    id: 48,
    question: 'Worry about your safety',
    therapy_type: 'student',
    question_type: 'radio',
    options:
      '[{"0":{"option":"NEVER","score":"0"},"1":{"option":"SOMETIMES","score":"1"},"2":{"option":" MOST OF THE TIME","score":"2"},"3":{"option":" ALL THE TIME","score":"3"}}]',
    status: 'active',
    created_at: '2020-06-14T12:26:06.000Z',
    updated_at: '2020-06-14T12:26:06.000Z',
    deleted_at: null,
  },
  {
    id: 52,
    question: 'Struggling to fall asleep/ staying asleep/  or oversleeping',
    therapy_type: 'student',
    question_type: 'radio',
    options:
      '[{"0":{"option":"NEVER","score":"0"},"1":{"option":"SOMETIMES","score":"1"},"2":{"option":" MOST OF THE TIME","score":"2"},"3":{"option":" ALL THE TIME","score":"3"}}]',
    status: 'active',
    created_at: '2020-06-14T12:28:53.000Z',
    updated_at: '2020-06-14T12:28:53.000Z',
    deleted_at: null,
  },
  {
    id: 57,
    question: 'Extremely happy mood for no particular reason',
    therapy_type: 'student',
    question_type: 'radio',
    options:
      '[{"0":{"option":"NEVER","score":"0"},"1":{"option":"SOMETIMES","score":"1"},"2":{"option":" MOST OF THE TIME","score":"2"},"3":{"option":" ALL THE TIME","score":"3"}}]',
    status: 'active',
    created_at: '2020-06-14T12:30:27.000Z',
    updated_at: '2020-06-14T12:30:27.000Z',
    deleted_at: null,
  },
  {
    id: 60,
    question:
      'Thoughts that the world would be better off with you dead or thoughts of  hurting yourself in some way',
    therapy_type: 'student',
    question_type: 'radio',
    options:
      '[{"0":{"option":"NEVER","score":"0"},"1":{"option":"SOMETIMES","score":"1"},"2":{"option":" MOST OF THE TIME","score":"2"},"3":{"option":" ALL THE TIME","score":"3"}}]',
    status: 'active',
    created_at: '2020-06-14T12:31:25.000Z',
    updated_at: '2020-06-14T12:31:25.000Z',
    deleted_at: null,
  },
  {
    id: 64,
    question: 'Fear of being in public spaces',
    therapy_type: 'student',
    question_type: 'radio',
    options:
      '[{"0":{"option":"NEVER","score":"0"},"1":{"option":"SOMETIMES","score":"1"},"2":{"option":" MOST OF THE TIME","score":"2"},"3":{"option":" ALL THE TIME","score":"3"}}]',
    status: 'active',
    created_at: '2020-06-14T12:32:18.000Z',
    updated_at: '2020-06-14T12:32:18.000Z',
    deleted_at: null,
  },
  {
    id: 68,
    question: 'No motivation when doing things and being slow than usual',
    therapy_type: 'student',
    question_type: 'radio',
    options:
      '[{"0":{"option":"NEVER","score":"0"},"1":{"option":"SOMETIMES","score":"1"},"2":{"option":" MOST OF THE TIME","score":"2"},"3":{"option":" ALL THE TIME","score":"3"}}]',
    status: 'active',
    created_at: '2020-06-14T12:33:10.000Z',
    updated_at: '2020-06-14T12:33:10.000Z',
    deleted_at: null,
  },
  {
    id: 72,
    question:
      'When stressed struggling to breathe/experiencing dizziness/ headache/ rapid heartbeat/ sweating/ chest pain',
    therapy_type: 'student',
    question_type: 'radio',
    options:
      '[{"0":{"option":"NEVER","score":"0"},"1":{"option":"SOMETIMES","score":"1"},"2":{"option":" MOST OF THE TIME","score":"2"},"3":{"option":" ALL THE TIME","score":"3"}}]',
    status: 'active',
    created_at: '2020-06-14T12:34:36.000Z',
    updated_at: '2020-06-14T12:34:36.000Z',
    deleted_at: null,
  },
  {
    id: 76,
    question: 'No desire to eat or eating more than normal  ',
    therapy_type: 'student',
    question_type: 'radio',
    options:
      '[{"0":{"option":"NEVER","score":"0"},"1":{"option":"SOMETIMES","score":"1"},"2":{"option":" MOST OF THE TIME","score":"2"},"3":{"option":" ALL THE TIME","score":"3"}}]',
    status: 'active',
    created_at: '2020-06-14T12:35:38.000Z',
    updated_at: '2020-06-14T12:35:38.000Z',
    deleted_at: null,
  },
  {
    id: 80,
    question: 'Feeling that you are not good enough and are destined to experience bad things ',
    therapy_type: 'student',
    question_type: 'radio',
    options:
      '[{"0":{"option":"NEVER","score":"0"},"1":{"option":"SOMETIMES","score":"1"},"2":{"option":" MOST OF THE TIME","score":"2"},"3":{"option":" ALL THE TIME","score":"3"}}]',
    status: 'active',
    created_at: '2020-06-14T12:36:36.000Z',
    updated_at: '2020-06-14T12:36:36.000Z',
    deleted_at: null,
  },
  {
    id: 86,
    question: 'Struggling to focus on tasks',
    therapy_type: 'student',
    question_type: 'radio',
    options:
      '[{"0":{"option":" NEVER","score":"0"},"1":{"option":"SOMETIMES","score":"1"},"2":{"option":" MOST OF THE TIME","score":"2"},"3":{"option":" ALL THE TIME","score":"3"}}]',
    status: 'active',
    created_at: '2020-06-14T12:37:31.000Z',
    updated_at: '2020-06-14T12:37:31.000Z',
    deleted_at: null,
  },
  {
    id: 88,
    question: 'Being easily short-tempered and agitated',
    therapy_type: 'student',
    question_type: 'radio',
    options:
      '[{"0":{"option":"NEVER","score":"0"},"1":{"option":"SOMETIMES","score":"1"},"2":{"option":" MOST OF THE TIME","score":"2"},"3":{"option":" ALL THE TIME","score":"3"}}]',
    status: 'active',
    created_at: '2020-06-14T12:38:30.000Z',
    updated_at: '2020-06-14T12:38:30.000Z',
    deleted_at: null,
  },
  {
    id: 93,
    question: 'Excessive fear of dying',
    therapy_type: 'student',
    question_type: 'radio',
    options:
      '[{"0":{"option":"NEVER","score":"0"},"1":{"option":"SOMETIMES","score":"1"},"2":{"option":" MOST OF THE TIME","score":"2"},"3":{"option":" ALL THE TIME","score":"3"}}]',
    status: 'active',
    created_at: '2020-06-14T12:39:14.000Z',
    updated_at: '2020-06-14T12:39:14.000Z',
    deleted_at: null,
  },
  {
    id: 96,
    question: 'Being forgetful about normal routine stuff',
    therapy_type: 'student',
    question_type: 'radio',
    options:
      '[{"0":{"option":"NEVER","score":"0"},"1":{"option":"SOMETIMES","score":"1"},"2":{"option":" MOST OF THE TIME","score":"2"},"3":{"option":" ALL THE TIME","score":"3"}}]',
    status: 'active',
    created_at: '2020-06-14T12:40:09.000Z',
    updated_at: '2020-06-14T12:40:09.000Z',
    deleted_at: null,
  },
  {
    id: 100,
    question: 'Uncontrollable worry',
    therapy_type: 'student',
    question_type: 'radio',
    options:
      '[{"0":{"option":"NEVER","score":"0"},"1":{"option":"SOMETIMES","score":"1"},"2":{"option":" MOST OF THE TIME","score":"2"},"3":{"option":" ALL THE TIME","score":"3"}}]',
    status: 'active',
    created_at: '2020-06-14T12:41:03.000Z',
    updated_at: '2020-06-14T12:41:03.000Z',
    deleted_at: null,
  },
  {
    id: 104,
    question: 'Wanting to always be alone and avoiding loved ones',
    therapy_type: 'student',
    question_type: 'radio',
    options:
      '[{"0":{"option":"NEVER","score":"0"},"1":{"option":"SOMETIMES","score":"1"},"2":{"option":" MOST OF THE TIME","score":"2"},"3":{"option":" ALL THE TIME","score":"3"}}]',
    status: 'active',
    created_at: '2020-06-14T12:41:54.000Z',
    updated_at: '2020-06-14T12:41:54.000Z',
    deleted_at: null,
  },
  {
    id: 109,
    question: 'Constant thoughts/ flashbacks of an experienced/witnessed trauma',
    therapy_type: 'student',
    question_type: 'radio',
    options:
      '[{"0":{"option":"NEVER","score":"0"},"1":{"option":"SOMETIMES","score":"1"},"2":{"option":" MOST OF THE TIME","score":"2"},"3":{"option":" ALL THE TIME","score":"3"}}]',
    status: 'active',
    created_at: '2020-06-14T12:43:46.000Z',
    updated_at: '2020-06-14T12:43:46.000Z',
    deleted_at: null,
  },
  {
    id: 112,
    question: 'Avoiding reminders of the traumatic experience',
    therapy_type: 'student',
    question_type: 'radio',
    options:
      '[{"0":{"option":"NEVER","score":"0"},"1":{"option":"SOMETIMES","score":"1"},"2":{"option":" MOST OF THE TIME","score":"2"},"3":{"option":" ALL THE TIME","score":"3"}}]',
    status: 'active',
    created_at: '2020-06-14T12:44:46.000Z',
    updated_at: '2020-06-14T12:44:46.000Z',
    deleted_at: null,
  },
  {
    id: 116,
    question: 'Use of substances more than usual',
    therapy_type: 'student',
    question_type: 'radio',
    options:
      '[{"0":{"option":"NEVER","score":"0"},"1":{"option":"SOMETIMES","score":"1"},"2":{"option":" MOST OF THE TIME","score":"2"},"3":{"option":" ALL THE TIME","score":"3"}}]',
    status: 'active',
    created_at: '2020-06-14T12:45:56.000Z',
    updated_at: '2020-06-14T12:45:56.000Z',
    deleted_at: null,
  },
  {
    id: 120,
    question: 'Having excess energy and doing many things at once',
    therapy_type: 'student',
    question_type: 'radio',
    options:
      '[{"0":{"option":"NEVER","score":"0"},"1":{"option":"SOMETIMES","score":"1"},"2":{"option":" MOST OF THE TIME","score":"2"},"3":{"option":" ALL THE TIME","score":"3"}}]',
    status: 'active',
    created_at: '2020-06-14T12:46:56.000Z',
    updated_at: '2020-06-14T12:46:56.000Z',
    deleted_at: null,
  },
  {
    id: 124,
    question:
      'Engaging in reckless behavior e.g. more casual sexual relationships, irresponsible spending',
    therapy_type: 'student',
    question_type: 'radio',
    options:
      '[{"0":{"option":"NEVER","score":"0"},"1":{"option":"SOMETIMES","score":"1"},"2":{"option":" MOST OF THE TIME","score":"2"},"3":{"option":" ALL THE TIME","score":"3"}}]',
    status: 'active',
    created_at: '2020-06-14T12:47:57.000Z',
    updated_at: '2020-06-14T12:47:57.000Z',
    deleted_at: null,
  },
  {
    id: 128,
    question: 'Family members express worry about your emotional/ mental health',
    therapy_type: 'student',
    question_type: 'radio',
    options:
      '[{"0":{"option":"NEVER","score":"0"},"1":{"option":"SOMETIMES","score":"1"},"2":{"option":" MOST OF THE TIME","score":"2"},"3":{"option":" ALL THE TIME","score":"3"}}]',
    status: 'active',
    created_at: '2020-06-14T12:48:54.000Z',
    updated_at: '2020-06-14T12:48:54.000Z',
    deleted_at: null,
  },
];

const convertToArray = (val) => {
  const keys = JSON.parse(val)[0];
  return Object.keys(keys).map((item, index) => keys[index]);
};

const QuestionSet = ({ question }) => {
  const { question_type, options, id } = question;

  switch (question_type) {
    case 'text':
      return (
        <div className="mt-3 my-radio" if="index.question_type == 'text'">
          <textarea className="form-control" placeholder="Enter Your Answer"></textarea>
        </div>
      );
    case 'radio':
      return (
        <div className="mt-3 my-radio">
          <div htmlFor="let obj of convertArray(index.options)">
            {convertToArray(options).map((item) => (
              <div className="mt-3 my-radio" key={item.option}>
                <input
                  name={`question${id}`}
                  id={item.option}
                  className="form-check-input"
                  type="radio"
                  value={item.score}
                />
                <label htmlFor={item.option} className="form-check-label">
                  {item.option}
                </label>
                <span className="check"></span>
              </div>
            ))}
          </div>
        </div>
      );
    case 'select':
      return (
        <div className="column-6 form-select">
          <select className="custom-select" id="">
            <option value="" disabled="disabled" selected="selected">
              Select Option
            </option>
            <option htmlFor="let order of convertArray(index.options); let i = index">
              option 1
            </option>
          </select>
        </div>
      );
    case 'checkbox':
      return (
        <div>
          <div htmlFor="let obj of convertArray(index.options);let i='index'">
            <div className="mt-3 my-check">
              <input id="check-input-2" className="form-check-input" type="checkbox" />
              <label htmlFor="check-input-2" className="form-check-label">
                check
              </label>
              <span className="check"></span>
            </div>
          </div>
        </div>
      );

    default:
      return <></>;
  }
};

function Questions() {
  const [questionsIndex] = useState(questions.map((item) => item.id));
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(questionsIndex[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveQuestionIndex(questionsIndex[activeIndex]);
  }, [activeIndex]);

  const onNext = () => {
    setActiveIndex(activeIndex + 1);
  };
  const onContinue = () => {};
  const onBack = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };
  return (
    <>
      <Header />
      <section className="booking pt-5" style={{ backgroundImage: `url(${bookbg})` }}>
        <div className="container pt-5">
          <div className="row pt-3 align-items-center justify-content-center">
            <div className="col-12 col-md-6 col-lg-6 ">
              <div className="booking-content">
                <h2 className="theme-text-color">
                  Your own personal therapist is now just one click away..
                </h2>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              {questions.map((item) => (
                <div key={item.id}>
                  {item.id === activeQuestionIndex && (
                    <div
                      className="booking_prefer"
                      id={item.id}
                      if="activeQuestionIndex == index.id ">
                      <Slide direction="left" in mountOnEnter unmountOnExit>
                        <div>
                          <div className="border-bottom">
                            <h4>Help us match you to the right therapist</h4>
                            <p>
                              Over the last two weeks, how often have you been bothered by any of
                              the following problems?
                            </p>
                          </div>
                          <div className="step_form">
                            <form>
                              <h5 className="pt-4">{item.question}</h5>
                              <QuestionSet question={item} />
                              <span style={{ color: 'red' }}>This question is mandatory</span>
                            </form>
                            <button
                              onClick={onBack}
                              type="button"
                              if="onQuestion != 0"
                              className="btn btn-f-prev">
                              Back
                            </button>
                            {activeIndex === questionsIndex.length - 1 ? (
                              <button
                                type="button"
                                onClick={onContinue}
                                if="onQuestion == lastQuestion"
                                className="btn btn-f-next">
                                Continue
                              </button>
                            ) : (
                              <button
                                type="button"
                                onClick={onNext}
                                if="onQuestion < lastQuestion"
                                className="btn btn-f-next">
                                Next
                              </button>
                            )}
                          </div>
                          <div className="booking_msg mt-3">
                            <div className="msg">
                              <img src="assets/img/th_pro_img.png" alt="pro" />
                            </div>
                            <p>
                              Hi, I’ll be guiding you through this quick assessment that will help
                              me pair you with a suitable therapist.
                            </p>
                          </div>
                        </div>
                      </Slide>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

QuestionSet.propTypes = {
  question: PropTypes.object,
};

export default Questions;
