/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { Modal } from 'react-bootstrap';
import FormStateToRedux from 'common/util/FormStateToRedux';
import convertToArray from 'common/util/convertToArray';
import Wizard from 'components/AssessmentWizard';
import { composeValidators, required, mustBeEmail } from 'common/util/Validation';

const assessments = [
  {
    id: 38,
    category: 'Depression',
    question:
      'The PHQ-9 is a multipurpose instrument for screening, monitoring and measuring the severity of depressive symptoms. This easy to use patient questionnaire is a self-administered version.  Disclaimer: This is not a diagnostic tool for depression but it is used to monitor the severity of depressive symptoms.                                                                                                                                                                Over the last 2 weeks, how often have you been bothered by the following problems?',
    question_type: 'radio',
    options: [
      {
        0: {
          option: 'Accept',
          score: '0',
        },
      },
    ],
  },
  {
    id: 37,
    category: 'Anxiety',
    question:
      'Generalised Anxiety Disorder Questionnaire (GAD-7)  This is an easy-to-use self-administered client questionnaire that is used as a screening tool and severity measure for anxiety symptoms. Disclaimer: This is not a diagnostic tool for anxiety but it is used to monitor the severity of anxiety symptoms.            Over the last 2 weeks, how often have you been bothered  by any of the following problems?',
    question_type: 'radio',
    options: [
      {
        0: {
          option: 'Accept',
          score: '0',
        },
      },
    ],
  },
  {
    id: 36,
    category: 'Depression',
    question:
      'How difficult have these problems made it to do work, take care of things at home, or get along with other people?',
    question_type: 'radio',
    options: [
      {
        0: {
          option: 'Not at all',
          score: '0',
        },
        1: {
          option: 'Somewhat difficult',
          score: '0',
        },
        2: {
          option: 'Very difficult',
          score: '0',
        },
        3: {
          option: 'Extremely difficult',
          score: '0',
        },
      },
    ],
  },
  {
    id: 35,
    category: 'Depression',
    question:
      'Thoughts that you would be better off dead, or thoughts of hurting yourself in some way?',
    question_type: 'radio',
    options: [
      {
        0: {
          option: 'Not at all',
          score: '0',
        },
        1: {
          option: 'Several days',
          score: '1',
        },
        2: {
          option: 'More than half the days',
          score: '2',
        },
        3: {
          option: 'Nearly every day',
          score: '3',
        },
      },
    ],
  },
  {
    id: 34,
    category: 'Depression',
    question:
      'Moving or speaking so slowly that other people could have noticed? Or so fidgety or restless that you have been moving a lot more than usual?',
    question_type: 'radio',
    options: [
      {
        0: {
          option: 'Not at all',
          score: '0',
        },
        1: {
          option: 'Several days',
          score: '1',
        },
        2: {
          option: 'More than half the days',
          score: '2',
        },
        3: {
          option: 'Nearly every day',
          score: '3',
        },
      },
    ],
  },
  {
    id: 33,
    category: 'Depression',
    question:
      'Trouble concentrating on things, such as reading the newspaper or watching television?',
    question_type: 'radio',
    options: [
      {
        0: {
          option: 'Not at all',
          score: '0',
        },
        1: {
          option: 'Several days',
          score: '1',
        },
        2: {
          option: 'More than half the days',
          score: '2',
        },
        3: {
          option: 'Nearly every day',
          score: '3',
        },
      },
    ],
  },
  {
    id: 32,
    category: 'Depression',
    question:
      'Feeling bad about yourself — or that you are a failure or have let yourself or your family down?',
    question_type: 'radio',
    options: [
      {
        0: {
          option: 'Not at all',
          score: '0',
        },
        1: {
          option: 'Several days',
          score: '1',
        },
        2: {
          option: 'More than half the days',
          score: '2',
        },
        3: {
          option: 'Nearly every day',
          score: '3',
        },
      },
    ],
  },
  {
    id: 31,
    category: 'Depression',
    question: 'Poor appetite or overeating?',
    question_type: 'radio',
    options: [
      {
        0: {
          option: 'Not at all',
          score: '0',
        },
        1: {
          option: 'Several days',
          score: '1',
        },
        2: {
          option: 'More than half the days',
          score: '2',
        },
        3: {
          option: 'Nearly every day',
          score: '3',
        },
      },
    ],
  },
  {
    id: 30,
    category: 'Depression',
    question: 'Feeling tired or having little energy?',
    question_type: 'radio',
    options: [
      {
        0: {
          option: 'Not at all',
          score: '0',
        },
        1: {
          option: 'Several days',
          score: '1',
        },
        2: {
          option: 'More than half the days',
          score: '2',
        },
        3: {
          option: 'Nearly every day',
          score: '3',
        },
      },
    ],
  },
  {
    id: 29,
    category: 'Depression',
    question: 'Trouble falling or staying asleep, or sleeping too much?',
    question_type: 'radio',
    options: [
      {
        0: {
          option: 'Not at all',
          score: '0',
        },
        1: {
          option: 'Several days',
          score: '1',
        },
        2: {
          option: 'More than half the days',
          score: '2',
        },
        3: {
          option: 'Nearly every day',
          score: '3',
        },
      },
    ],
  },
  {
    id: 28,
    category: 'Depression',
    question: 'Feeling down, depressed, or hopeless?',
    question_type: 'radio',
    options: [
      {
        0: {
          option: 'Not at all',
          score: '0',
        },
        1: {
          option: 'Several days',
          score: '1',
        },
        2: {
          option: 'More than half the days',
          score: '2',
        },
        3: {
          option: 'Nearly every day',
          score: '3',
        },
      },
    ],
  },
  {
    id: 26,
    category: 'Anxiety',
    question: 'Feeling afraid as if something awful might happen',
    question_type: 'radio',
    options: [
      {
        0: {
          option: 'Not at all',
          score: '0',
        },
        1: {
          option: 'Several days',
          score: '1',
        },
        2: {
          option: 'More than half the days',
          score: '2',
        },
        3: {
          option: 'Nearly every day',
          score: '3',
        },
      },
    ],
  },
  {
    id: 25,
    category: 'Anxiety',
    question: 'Becoming easily annoyed or irritable',
    question_type: 'radio',
    options: [
      {
        0: {
          option: 'Not at all',
          score: '0',
        },
        1: {
          option: 'Several days',
          score: '1',
        },
        2: {
          option: 'More than half the days',
          score: '2',
        },
        3: {
          option: 'Nearly every day',
          score: '3',
        },
      },
    ],
  },
  {
    id: 23,
    category: 'Anxiety',
    question: "Being so restless that it's hard to sit still",
    question_type: 'radio',
    options: [
      {
        0: {
          option: 'Not at all',
          score: '0',
        },
        1: {
          option: 'Several days',
          score: '1',
        },
        2: {
          option: 'More than half the days',
          score: '2',
        },
        3: {
          option: 'Nearly every day',
          score: '3',
        },
      },
    ],
  },
  {
    id: 22,
    category: 'Anxiety',
    question: 'Trouble relaxing',
    question_type: 'radio',
    options: [
      {
        0: {
          option: 'Not at all',
          score: '0',
        },
        1: {
          option: 'Several days',
          score: '1',
        },
        2: {
          option: 'More than half the days',
          score: '2',
        },
        3: {
          option: 'Nearly every day',
          score: '3',
        },
      },
    ],
  },
  {
    id: 21,
    category: 'Anxiety',
    question: 'Worrying too much about different things',
    question_type: 'radio',
    options: [
      {
        0: {
          option: 'Not at all',
          score: '0',
        },
        1: {
          option: 'Several days',
          score: '1',
        },
        2: {
          option: 'More than half the days',
          score: '2',
        },
        3: {
          option: 'Nearly every day',
          score: '3',
        },
      },
    ],
  },
  {
    id: 20,
    category: 'Anxiety',
    question: 'Not being able to stop or control worrying',
    question_type: 'radio',
    options: [
      {
        0: {
          option: 'Not at all',
          score: '0',
        },
        1: {
          option: 'Several days',
          score: '1',
        },
        2: {
          option: 'More than half the days',
          score: '2',
        },
        3: {
          option: 'Nearly every day',
          score: '3',
        },
      },
    ],
  },
  {
    id: 19,
    category: 'Anxiety',
    question: 'Feeling nervous, anxious, or on edge',
    question_type: 'radio',
    options: [
      {
        0: {
          option: 'Not at all',
          score: '0',
        },
        1: {
          option: 'Several Days',
          score: '1',
        },
        2: {
          option: 'More than half the days',
          score: '2',
        },
        3: {
          option: 'Nearly every day',
          score: '3',
        },
      },
    ],
  },
  {
    id: 17,
    category: 'Depression',
    question: 'Little interest or pleasure in doing things?',
    question_type: 'radio',
    options: [
      {
        0: {
          option: ' Not at all',
          score: '0',
        },
        1: {
          option: 'Several days',
          score: '1',
        },
        2: {
          option: 'More than half the days',
          score: '2',
        },
        3: {
          option: 'Nearly every day',
          score: '3',
        },
      },
    ],
  },
];

const categories = [];
assessments.forEach((b) => {
  if (!categories.includes(b.category)) {
    categories.push(b.category);
  }
});

// eslint-disable-next-line react/prop-types
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
      return <></>;
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
      return <></>;
    case 'checkbox':
      return <></>;
    default:
      return <></>;
  }
};

function Assessment() {
  const [selectedTopic, setTopic] = useState('');
  const [questions, setQuestions] = useState([]);
  const [show, setShow] = useState(false);
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    const items = assessments.filter((item) => item.category === selectedTopic);
    setQuestions(items);
  }, [selectedTopic]);

  const onChangeCategory = (e) => {
    setTopic(e.target.value);
  };

  const onSubmit = (values) => {
    const score = Object.keys(values).map((index) => parseInt(values[index], 10));
    setTotalScore(score.reduce((accumulator, prod) => accumulator + prod, 0));
    setShow(true);
  };

  const onSubmitReport = ({ email }) => {
    const report = {
      category: selectedTopic,
      email,
      question_answer: JSON.stringify(questions),
      score: totalScore,
    };
    // console.log(report);
  };

  const handleClose = () => {
    setShow(false);
    setTopic('');
    setQuestions([]);
  };

  return (
    <>
      {/* <div className="loader">
        <img src="assets/img/loader.svg" alt="loader" />
      </div> */}
      <Modal backdrop="static" keyboard={false} show={show} onHide={handleClose}>
        <Form
          onSubmit={onSubmitReport}
          render={({ handleSubmit, submitting, pristine }) => (
            <form onSubmit={handleSubmit}>
              <FormStateToRedux form="ASSESSMENT_REPORT_FORM" />
              <Modal.Header closeButton>
                <Modal.Title>
                  <h4 className="modal-title pull-left">Send Assessment Report</h4>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Field
                  component="input"
                  className="form-control"
                  name="email"
                  placeholder="Enter email here..."
                  required
                  validate={composeValidators(required, mustBeEmail)}
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,8}$"
                />
              </Modal.Body>
              <Modal.Footer>
                <button
                  type="submit"
                  className="btn mr-2 btn-theme"
                  disabled={submitting || pristine}>
                  Submit
                </button>
                <button type="button" className="btn btn-danger" onClick={handleClose}>
                  close
                </button>
              </Modal.Footer>
            </form>
          )}
        />
      </Modal>

      <div className=" inner_page mb-3">
        <div className="form therpist_form">
          <div>
            <h5 className="d-flex justify-content-between mb-3 pb-3 border-bottom text-uppercase">
              Assessment
            </h5>
          </div>
          <div className="form-group">
            <select value={selectedTopic} className="form-control" onChange={onChangeCategory}>
              <option value=""> -- Select Topic -- </option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          {questions.length ? (
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
                  <h5 className="pt-4">{item.question}</h5>
                  <div>
                    <QuestionSet question={item} />
                    <Error name={`question${item.id}`} />
                  </div>
                  <FormStateToRedux form="ASSESSMENT_FORM" />
                </Wizard.Page>
              ))}
            </Wizard>
          ) : null}
        </div>
      </div>
    </>
  );
}

Assessment.propTypes = {
  // getQuestions: PropTypes.func,
};

QuestionSet.propTypes = {
  question: PropTypes.object,
};

Error.propTypes = {
  name: PropTypes.string,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    // getQuestions: () => dispatch(getQuestionsAction()),
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(Assessment);
