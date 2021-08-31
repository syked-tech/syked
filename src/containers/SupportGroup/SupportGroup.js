import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { selectIsAuthenticated } from 'containers/Auth/authSlice';
import Header from 'components/Header';
import Footer from 'components/Footer';

export default function SupportGroup() {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <>
      <Header isAuthenticated={isAuthenticated} />
      <div className="wrapper pb-5 top-margin inner_wrap">
        <section className="pt-5">
          <div className="container">
            <div className="inner_page">
              <div className="row">
                <div className="col-12">
                  <h2 className="mb-3  border-bottom other_heading">Support Group</h2>
                </div>
                <div
                  if="is_live == false"
                  className="col-12 col-sm-7 text-center col-md-8 col-lg-9">
                  There is no live support group session right now.
                </div>
                <div if="is_live == true" className="col-12 col-sm-7 col-md-8 col-lg-9">
                  <div className="live-video">
                    <iframe
                      id="iframe"
                      title="groupSupport"
                      width="560"
                      height="315"
                      src=""
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                  </div>
                </div>
                <div if="is_live == true" className="col-12 col-sm-5 col-md-4 col-lg-3">
                  <div id="live-chat" className="live-chat">
                    <div className="chat-head">
                      <h4>Live Chat</h4>
                      <i if="is_chat_show == true" className="fa fa-eye-slash cursor-pointer"></i>
                      <i if="is_chat_show == false" className="fa fa-eye cursor-pointer"></i>
                    </div>
                    <span if="is_chat_show == false">
                      <div id="chat-window" className="chat-window">
                        <div className="chat-list">
                          <div className="p-img">
                            <img
                              if="chat.users_master.profile_image != '' && chat.users_master.user_type == 'customer'"
                              alt="profile"
                              src="syked/assets/img/user.png"
                            />
                            <img
                              if="chat.users_master.profile_image != '' && chat.users_master.user_type == 'therapist'"
                              alt="profile"
                              src="syked/assets/img/user.png"
                            />
                            <img
                              if="chat.users_master.profile_image == ''"
                              src="syked/assets/img/user.png"
                              alt="profile"
                            />
                          </div>

                          <div className="chat-msg">
                            <p>
                              <b> Anonymous </b>
                              message
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="chat-input">
                        <form action="#">
                          <input type="text" name="userMessage" autoComplete="off" />
                          <button type="submit" className="btn btn-defualt">
                            <FontAwesomeIcon icon={faPaperPlane} />
                          </button>
                        </form>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
