import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import './Contact.scss';

export default function Contact() {
  return (
    <>
      <Header />
      <section className="login pt-5">
        <div className="container pt-5 pb-4">
          <div className="row align-items-center pt-4 pb-5">
            <div className="col-md-6 col-lg-4">
              <div className="form contact_page">
                <form className="ng-pristine ng-valid">
                  <h2 className="mb-4 text-center">Contact Us</h2>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Name"
                      name="user_name"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      placeholder="Phone"
                      required
                      pattern="^(0|[0-9][0-9]*)$"
                      minLength="8"
                      maxLength="15"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Message"
                      name="message"
                      required></textarea>
                  </div>
                  <div className="form-group mb-0 mt-4">
                    <button type="submit" className="btn btn-theme">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 notes d-flex align-items-center">
              <div className="col-md-12 notes_text">
                <div className="login_left justify-content-start">
                  <div className="p-0">
                    <h4 className="mb-4">Official Address</h4>
                    <div className="text-left">
                      <p>
                        <strong>Head Office</strong>
                      </p>
                      <p>Baobab Building</p>
                      <p>River Falls Office Park</p>
                      <p>262 Rose Avenue Centurion</p>
                      <p>0157 South Africa</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="login_right">
          <img src="assets/img/sing_up.png" alt="Login" />
        </div>
      </section>
      <Footer />
    </>
  );
}
