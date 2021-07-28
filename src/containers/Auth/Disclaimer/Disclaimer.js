import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { compose } from 'redux';
import { useHistory } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import {
  isLoadingDisclaimer,
  isAgreed,
  disclaimer as disclaimerAction,
} from 'containers/Auth/authSlice';
import * as CONSTANTS from 'common/constants';

function Disclaimer({ disclaimer }) {
  const loading = useSelector(isLoadingDisclaimer);
  const isAgreedDisclaimer = useSelector(isAgreed);
  const history = useHistory();

  useEffect(() => {
    if (isAgreedDisclaimer) {
      history.push(CONSTANTS.LOGIN_PAGE);
    }
  }, [isAgreedDisclaimer]);

  const onAgree = () => {
    disclaimer();
  };
  return (
    <>
      <Header />

      {loading ? (
        <div className="loader">
          <img src="assets/img/loader.svg" alt="loader" />
        </div>
      ) : null}

      <div className="wrapper pb-5 top-margin inner_wrap">
        <section className="pt-5">
          <div className="container p-0">
            <div className="row">
              <div className="col-12">
                <div className="inner_page">
                  <h2 className="mb-3 border-bottom other_heading">Syked Disclaimer</h2>
                  <p>
                    Syked is an online counseling platform, conditions of use are stipulated below
                    and need to be read by all users. All services that are rendered on the Syked
                    platform are purely for counseling support and do not include psycho-legal work.
                  </p>
                  <p className="mt-3">
                    <b>CONFIDENTIALITY OF INFORMATION:</b>
                  </p>
                  <ul>
                    <li>
                      1. All information (video, call or text) that is shared on the Syked platform
                      remains confidential unless there is a need of counseling value or if the
                      limitations to confidentiality have been broken.
                    </li>
                    <li>
                      2. In an effort to preserve confidentiality on the platform, there is no
                      recording feature of sessions on the Syked platform.
                    </li>
                    <li>
                      3. Syked text communication which is a secondary feature, is kept on the Syked
                      platform and is only accessible to the therapist and the client linked to that
                      particular session, both of whom would have such access by utilizing their
                      login credentials.
                    </li>
                    <li>
                      4. Syked therapists are contracted to maintain client records in line with
                      their specific scope of practice ethical guidelines.
                    </li>
                    <li>
                      5. Syked is hosted on AWS cloud platform which means that the security
                      measures against hacking are of international standards.
                    </li>
                  </ul>
                  <p className="mt-3">
                    <b>IDENTITY VERIFICATION:</b>
                  </p>
                  <ul>
                    <li>
                      1. Syked is a video led platform and thus requires that potential clients have
                      video enabled handsets or laptops.
                    </li>
                    <li>
                      2. All Syked therapists’ qualifications have been verified. On their profiles,
                      they will have picture of themselves, profession and profession registration
                      number so as to enable the user to know the identity of their therapist. The
                      video facility also ensures that from the first session the therapist also
                      knows the identity of the client.
                    </li>
                    <li>
                      3. Patients between the ages 14-17 will have to provide written consent from
                      their parents or legal guardian. All information provided will be verified
                      before the session can commence.
                    </li>
                  </ul>
                  <p className="mt-3">
                    <b> EMERGENCY SITUATION, DUTY TO WARN</b>
                  </p>
                  <ul>
                    <li>
                      1. Upon registration all clients are expected to provide a contact number of a
                      next of kin that will be used in case of an emergency that may arise during
                      the course of the session, these emergency circumstances can include but are
                      not limited to the following:
                    </li>

                    <ul>
                      <li>
                        1.1. if a client informs the therapist of their intention to cause harm to
                        themselves, kill themselves or cause same to another person
                      </li>
                      <li>
                        1.2. if a client informs the therapist of their involvement or possible
                        involvement in the commission of a crime
                      </li>
                    </ul>
                    <p className="mt-3"></p>
                    <li>
                      2. Patients are oriented to this emergency situation at the beginning of their
                      first session wherein they will be advised that the circumstances contained in
                      1.1-1.2 of this section constitute limitations to confidentiality. If a
                      patient is assessed to be a high risk for harm to self or to others/ things,
                      the limitations to confidentiality can be observed.
                    </li>
                    <li>
                      3. If a client discloses any information that makes the therapist believe that
                      they could cause harm to themselves or another person or commit a crime, the
                      concerned therapist can exercise their discretion by informing a third party
                      and facilitate the appropriate referral to another service provider or health
                      facility. Therapists will make all reasonable efforts to intervene
                      therapeutically in a client’s situation before breaking the confidentiality.
                    </li>
                    <li>
                      4. Clients are required to complete a short screening tool before booking
                      their session. This screening tool is not a standardized psychological test
                      but a Syked internal tool for purposes of streamlining referrals and aiding in
                      the counseling intervention.
                    </li>
                  </ul>
                  <p className="mt-3">
                    <b> TERMS OF USE:</b>
                  </p>

                  <p>
                    The information contained in this website is for private information purposes
                    only. We will endeavor to keep all information provided by/to the client and the
                    therapist private, up to-date, and correct but we make no representations or
                    warranties of any kind , express or implied, about the completeness, accuracy,
                    reliability, suitability, or availability with respect to the website,
                    information, products, services, or related graphics contained on the website.
                    Any reliance you make on the aforementioned is, therefore, strictly at your own
                    risk.
                  </p>
                  <p>
                    In no event will we be liable for any loss or damage including without
                    limitation, indirect or consequential loss or damage, or any loss or damage
                    whatsoever arising from loss of data or profits arising out of, or in connection
                    with, the use of this website. Every effort is made to keep the website up and
                    functioning. We do not take, however, any responsibility for the website being
                    unavailable due to technical issues.
                  </p>
                  <p className="mt-3">
                    <b> FEES:</b>
                  </p>
                  <ul>
                    <li>
                      1. Costs of sessions differ according to the different professional categories
                      and are reflected on each therapist’s details.
                    </li>
                    <li>
                      2. Payments are to be made via debit/ credit card on the system which uses the
                      latest security technology to ensure the highest level of security.
                    </li>
                    <li>
                      3. If the client is unable to participate in a booked session, a cancellation
                      needs to be done 24 hours in advance on the platform.
                    </li>
                  </ul>
                  <p className="mt-3">INFORMED CONSENT:</p>
                  <ul>
                    <li>
                      1. Acceptance of the disclaimer is interpreted as the user’s informed consent
                      of the services and its conditions as stipulated above.
                    </li>
                    <li>2. Use of platform for online therapeutic support is voluntary.</li>
                    <li>
                      3. Users have a right to withdraw their participation and should they do so,
                      they are requested to inform their concerned therapist accordingly. If a user
                      deems it necessary that they be referred to a different practitioner, they can
                      request for a referral letter from the Syked therapist.
                    </li>
                    <li>
                      4. In the case of a referral to an external service provider becoming a
                      necessity, the client’s permission will be sought and if refused the patient
                      will be advised of the associated risks in this regard.
                    </li>
                    <li>
                      5. Therapists will maintain brief records of their sessions and contact in a
                      secure place.
                    </li>
                  </ul>
                  <p>
                    I have read and am fully competent to understand the contents of this disclaimer
                    and consent to receiving the necessary counseling support.
                  </p>
                  <div className="form-group mb-0 mt-4 text-center">
                    {/* <button onClick={} type="button" className="btn btn-theme">
                      Go Back
                    </button> */}
                    <button onClick={onAgree} type="button" className="btn btn-theme">
                      I Agree
                    </button>
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

Disclaimer.propTypes = {
  disclaimer: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  disclaimer: (values) => dispatch(disclaimerAction(values)),
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(Disclaimer);
