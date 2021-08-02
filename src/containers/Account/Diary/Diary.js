import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import FormStateToRedux from 'common/util/FormStateToRedux';
import { composeValidators, required } from 'common/util/Validation';
import DateTimePickerAdapter from 'components/DateTimePickerAdapter';
import { format } from 'date-fns';

export default function Diary() {
  const [show, setShow] = useState(true);
  const handleClose = () => {
    setShow(false);
  };

  const onSubmit = (values) => {
    console.log(values);
    setShow(false);
  };

  return (
    <>
      {/* <div className="loader" if="loder_show == 'yes'">
        <img src="assets/img/loader.svg" alt="Loader" />
      </div> */}

      <Modal backdrop="static" keyboard={false} show={show} onHide={handleClose}>
        <Form
          onSubmit={onSubmit}
          initialValues={{ date: new Date() }}
          render={({ handleSubmit, submitting, pristine }) => (
            <form onSubmit={handleSubmit}>
              <FormStateToRedux form="DIARY_FORM" />
              <Modal.Header closeButton>
                <Modal.Title>
                  <h4 className="modal-title pull-left">Add Diary</h4>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="form-group col-12 col-md-12 col-lg-12 date-input">
                  <Field
                    name="date"
                    label="Date"
                    inputVariant="outlined"
                    fullWidth
                    size="small"
                    component={DateTimePickerAdapter}
                  />
                </div>
                <div className="form-group">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <Field
                      cols="5"
                      rows="5"
                      className="form-control"
                      name="message"
                      placeholder="Message..."
                      validate={composeValidators(required)}>
                      {({ input, meta: { error, touched }, ...rest }) => (
                        <>
                          <textarea {...input} {...rest} />
                          {error && touched && <p className="mt-2 text-danger">{error}</p>}
                        </>
                      )}
                    </Field>
                  </div>
                </div>
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

      <div className="inner_page mb-3">
        <div className="form therpist_form">
          <div className="">
            <h5 className="d-flex justify-content-between mb-3 pb-3 border-bottom text-uppercase">
              Diary Diary
              <button
                type="button"
                onClick={() => setShow(true)}
                title="Add Diary"
                className="btn btn-theme text-uppercase text-right">
                <FontAwesomeIcon icon={faPlus} /> Add Diary
              </button>
            </h5>
          </div>
          <div className="" if="notesData.length > '0'">
            <div className="co-listing" if="let notesItem of notesData">
              <div className="content_list border-bottom w-100 pb-2 mb-2">
                <div className="d-sm-flex align-items-center justify-content-between mb-2">
                  <p className="mb-0">description</p>
                  <p className="mb-0" if="notesItem.created_at!=null">
                    {format(new Date(), 'dd MMM yyyy p')}
                  </p>
                </div>

                <div className="d-flex pt-2 align-items-center justify-content-end">
                  <FontAwesomeIcon icon={faPencilAlt} className="ml-3 edit_icon position-static" />
                  <FontAwesomeIcon icon={faTrash} className="ml-3 delet_icon position-static" />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="text-center" if="notesData.length <= '0' && loder_show == 'no'">
            No notes yet
          </div> */}
        </div>
      </div>
    </>
  );
}
