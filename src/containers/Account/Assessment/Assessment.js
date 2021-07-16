import React from 'react';

export default function Assessment() {
  return (
    <>
      {/* <div className="loader">
        <img src="assets/img/loader.svg" alt="loader" />
      </div> */}
      <div className=" inner_page mb-3">
        <div className="form therpist_form">
          <div>
            <h5 className="d-flex justify-content-between mb-3 pb-3 border-bottom text-uppercase">
              Assessment
            </h5>
          </div>

          <div className="form-group">
            <select className="form-control">
              <option value=""> -- Select Topic -- </option>
              <option if="let topic of topicArray" value="">
                topic
              </option>
            </select>
          </div>

          <div if="let index of questions">
            <div id="{{index.id}}" if="activeQuestionIndex == index.id ">
              <div>
                <div className="step_form">
                  <form>
                    <h5 className="pt-4">question</h5>
                    <div className="mt-3 my-radio" if="index.question_type == 'text'">
                      <textarea
                        className="form-control"
                        placeholder="Enter Your Answer"
                        name="{{index.id}}"></textarea>
                    </div>
                    <div className="mt-3 my-radio" if="index.question_type == 'radio'">
                      <div if="let obj of convertArray(index.options)">
                        <div className="mt-3 my-radio">
                          <input
                            className="form-check-input"
                            name="formateStr"
                            type="radio"
                            id="formateStr"
                            value="{{obj}}"
                          />
                          <label className="form-check-label" htmlFor="formateStr">
                            option
                          </label>
                          <span className="check"></span>
                        </div>
                      </div>
                    </div>

                    <div className="column-6 form-select" if="index.question_type == 'select'">
                      <select name="{{index.id}}" className="custom-select" id="">
                        <option value="" disabled="disabled" selected="selected">
                          Select Option
                        </option>
                        <option if="let order of convertArray(index.options); let i = index">
                          order
                        </option>
                      </select>
                    </div>

                    <div if="index.question_type == 'checkbox'">
                      <div if="let obj of convertArray(index.options);let i='index'">
                        <div className="mt-3 my-check">
                          <input
                            className="form-check-input"
                            name="{{index.id}}{{i}}"
                            type="checkbox"
                            id="{{obj}}"
                            value="{{obj}}"
                          />
                          <label className="form-check-label" htmlFor="{{obj}}">
                            option
                          </label>
                          <span className="check"></span>
                        </div>
                      </div>
                    </div>
                    <span className="text-danger">validationError</span>
                  </form>
                  <button
                    type="button"
                    if="onQuestion != 0"
                    className="btn btn-theme mr-2 btn-f-prev">
                    Back
                  </button>
                  <button
                    type="button"
                    if="onQuestion == lastQuestion"
                    className="btn btn-theme mr-2 btn-f-next">
                    Continue
                  </button>
                  <button
                    type="button"
                    if="onQuestion < lastQuestion"
                    className="btn btn-theme btn-f-next">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
