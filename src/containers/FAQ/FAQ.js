import React from 'react';
import { useSelector } from 'react-redux';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { selectIsAuthenticated } from 'containers/Auth/authSlice';

export default function FAQ() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  return (
    <>
      <Header isAuthenticated={isAuthenticated} />
      <div className="wrapper pb-5 top-margin inner_wrap">
        <section className="pt-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="inner_page">
                  <h2 className="mb-3 border-bottom other_heading">FAQ</h2>
                  <div className="que mb-3">
                    <h5 className="mb-3">
                      <strong>Q.</strong> What is Syked?
                    </h5>
                    <p>
                      <strong>Ans:- </strong> Syked is an online virtual private practice where
                      patients can schedule private appointments with a professional therapist.
                    </p>
                  </div>
                  <div className="que mb-3">
                    <h5 className="mb-3">
                      <strong>Q.</strong> Is syked secure and private?
                    </h5>
                    <p>
                      <strong>Ans:- </strong> Syked is a secure platform that uses the lates
                      technology to ensure that all data and information that is used on our
                      platform remains strictly private and confidential.
                    </p>
                  </div>
                  <div className="que mb-3">
                    <h5 className="mb-3">
                      <strong>Q.</strong> Can i choose my own therapist?
                    </h5>
                    <p>
                      <strong>Ans:- </strong>Yes once you have completed your registration, the
                      system will generate a shortlist of potential therapists that you can choose
                      from.
                    </p>
                  </div>
                  <div className="que">
                    <h5 className="mb-3">
                      <strong>Q.</strong> How does this work and does it replace face to face
                      therapy?
                    </h5>
                    <p>
                      <strong>Ans:- </strong>You simple register on the system, complete a short
                      assessment then schedule a time with your preferred therapist. Online therapy
                      does not replace face to face therapy as there are certain cases that will
                      require such.
                    </p>
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
