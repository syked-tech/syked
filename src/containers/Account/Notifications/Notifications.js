import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Notifications() {
  return (
    <>
      {/* <div className="loader" if="notificationList.length <= '0' && loder_show=='yes' ">
        <img src="assets/images/loader.svg" alt="loader" />
      </div> */}
      <div className="inner_page mb-3">
        <div className="form">
          <div className="inner_head text-left mb-4">
            <h3>Notification List</h3>
          </div>

          <div className="" if="notificationList.length>'0'">
            <div className="co-listing" if="let notification_list of notificationList;">
              <div className="content_list border-bottom w-100 pb-2 mb-2">
                <div className="d-sm-flex align-items-center justify-content-between mb-2">
                  <h5 className="mb-0">title</h5>
                  <p className="mb-0" if="notification_list.created_at!=null">
                    created_at
                  </p>
                </div>
                <p>message</p>
                <div className="d-flex pt-2 align-items-center justify-content-between">
                  <div>
                    <Link
                      to="/my-account/request-detail/request_id"
                      if="notification_list.request_id!=0&&notification_list.request_id!=''&&notification_list.request_id!=null"
                      className="btn btn-pending mt-0">
                      Detail
                    </Link>
                  </div>
                  <FontAwesomeIcon icon={faTrash} className="ml-3 delet_icon position-static" />
                </div>
              </div>
            </div>
          </div>
          <div className="text-center" if="notificationList.length <= '0' && loder_show=='no'">
            No Notification yet
          </div>
        </div>
      </div>
    </>
  );
}
