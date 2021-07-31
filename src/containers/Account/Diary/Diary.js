import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Diary() {
  return (
    <>
      {/* <div className="loader" if="loder_show == 'yes'">
        <img src="assets/img/loader.svg" alt="Loader" />
      </div> */}
      <div className="inner_page mb-3">
        <div className="form therpist_form">
          <div className="">
            <h5 className="d-flex justify-content-between mb-3 pb-3 border-bottom text-uppercase">
              Diary Diary
              <button
                type="button"
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
                    created_at
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
