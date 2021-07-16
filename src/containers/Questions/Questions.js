/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { useSelector, connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Slide from '@material-ui/core/Slide';
import { Field } from 'react-final-form';
import { selectIsAuthenticated } from 'containers/Auth/authSlice';
import FormStateToRedux from 'common/util/FormStateToRedux';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Wizard from 'components/QuestionsWizard';
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

const Error = ({ name }) => (
  <Field
    name={name}
    subscription={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) =>
      touched && error ? <div className="text-danger mb-2">{error}</div> : null
    }
  />
);

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
              <div className="mt-3 mb-3 my-radio" key={item.option}>
                <Field
                  name={`question${id}`}
                  id={item.option}
                  component="input"
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
  const history = useHistory();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const onSubmit = (values) => {
    const score = Object.keys(values).map((index) => parseInt(values[index], 10));
    const totalScore = score.reduce((accumulator, prod) => accumulator + prod, 0);
    history.push(`/therapist/list/${totalScore}`);
  };

  return (
    <>
      <Header isAuthenticated={isAuthenticated} />
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
              <Wizard onSubmit={onSubmit}>
                {questions.map((item) => (
                  <Wizard.Page
                    key={item.id}
                    validate={(values) => {
                      const errors = {};
                      if (!values[`question${item.id}`]) {
                        errors[`question${item.id}`] = 'This question is mandatory';
                      }
                      return errors;
                    }}>
                    <div>
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
                            <h5 className="pt-4">{item.question}</h5>
                            <QuestionSet question={item} />
                            <Error name={`question${item.id}`} />
                          </div>
                        </div>
                      </Slide>
                    </div>
                    <FormStateToRedux form="QUESTIONS_FORM" />
                  </Wizard.Page>
                ))}
              </Wizard>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

Questions.propTypes = {};

QuestionSet.propTypes = {
  question: PropTypes.object,
};

Error.propTypes = {
  name: PropTypes.string,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(Questions);
