import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { compose } from 'redux';
import { useParams, Link } from 'react-router-dom';
import { selectIsAuthenticated } from 'containers/Auth/authSlice';
import {
  // selectPreferredTherapists,
  getTherapistsByScore as getTherapistsByScoreAction,
} from 'containers/Therapist/therapistSlice';
import Header from 'components/Header';
import Footer from 'components/Footer';

import './TherapistList.scss';

const therapists = [
  {
    id: 189,
    first_name: 'Mohube',
    last_name: 'Maswi',
    unic_id: 'TBa12dVfr',
    profile_image: 'therapist_IMG_2020727_162510.jpg',
    therapy_type: 'Clinical Psychologist',
    avg_rating: '5.0',
    total_rating: 21,
    price: 699,
  },
  {
    id: 84,
    first_name: 'Lusanda',
    last_name: 'Cebekhulu',
    unic_id: '3WK4xLyVa',
    profile_image: 'therapist_IMG_2021630_111624.jpg',
    therapy_type: 'Clinical Psychologist',
    avg_rating: '4.9',
    total_rating: 8,
    price: 699,
  },
  {
    id: 331,
    first_name: 'Asanda',
    last_name: 'Ranase',
    unic_id: 'YLJbrQTWj',
    profile_image: 'therapist_IMG_2020720_104842.jpg',
    therapy_type: 'Clinical Psychologist',
    avg_rating: '4.8',
    total_rating: 4,
    price: 699,
  },
  {
    id: 514,
    first_name: 'Suhaila',
    last_name: 'Ameer',
    unic_id: '9VJv3FxGK',
    profile_image: 'therapist_IMG_2021514_104514.jpg',
    therapy_type: 'Clinical Psychologist',
    avg_rating: '0.0',
    total_rating: 0,
    price: 699,
  },
  {
    id: 531,
    first_name: 'Jackson',
    last_name: 'Mokwebo',
    unic_id: 'oQA0WRwoY',
    profile_image: 'therapist_IMG_2021617_204524.jpg',
    therapy_type: 'Clinical Psychologist',
    avg_rating: '0.0',
    total_rating: 0,
    price: 699,
  },
  {
    id: 456,
    first_name: 'Nozie ',
    last_name: 'Mncwango ',
    unic_id: '5QT5zu45d',
    profile_image: 'therapist_IMG_202123_151630.jpeg',
    therapy_type: 'Clinical Psychologist',
    avg_rating: '0.0',
    total_rating: 0,
    price: 699,
  },
  {
    id: 465,
    first_name: 'Dikonelo',
    last_name: 'Matsoso',
    unic_id: 'pYrbrXjLp',
    profile_image: 'therapist_IMG_2021316_9911.jpg',
    therapy_type: 'Clinical Psychologist',
    avg_rating: '0.0',
    total_rating: 0,
    price: 699,
  },
];

function TherapistList({ getTherapistsByScore }) {
  const { score } = useParams();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  // const therapists = useSelector(selectPreferredTherapists);

  useEffect(() => {
    getTherapistsByScore({ score });
  }, [getTherapistsByScore]);

  return (
    <>
      <Header isAuthenticated={isAuthenticated} />
      <div className="wrapper inner_wrap">
        <section className="f7-gray consul-section pb-5" style={{ paddingTop: 140 }}>
          {/* <div className="loader" if="therapistList.length <= '0' && loder_show=='yes' ">
            <img src="assets/img/loader.svg" alt="loader" />
          </div> */}
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="inner_head text-center mb-4">
                  <h3>Your own personal therapist is now just one click away.</h3>
                  <p>Select your preferred therapist from the list below</p>
                </div>
              </div>

              <div className="col-12" if="therapistList.length>'0'">
                {therapists.map((item) => (
                  <div
                    key={item.id}
                    className="co-listing"
                    if="let therapist_list of therapistList;">
                    <div className="d-sm-flex align-items-md-center">
                      <div className="pro-img">
                        <img src="assets/img/user.png" alt="profile" />
                      </div>
                      <div className="content_list w-100 pt-3 pt-sm-0 pl-sm-3">
                        <div className="d-sm-flex align-items-center justify-content-between mb-2">
                          <h5>{`${item.first_name} ${item.last_name}`}</h5>
                          {item.address ? (
                            <p>
                              <b>
                                <i className="fa fa-map-marker"></i> Address
                              </b>
                            </p>
                          ) : null}
                        </div>
                        <h6>
                          <b>{item.therapy_type}</b>
                        </h6>
                        {item.about_me ? <p>about_me</p> : null}
                        <div className="pt-2 d-md-flex align-items-center justify-content-between">
                          <div className="mb-2 mb-md-0 d-flex align-items-center">
                            <Link
                              to={`/therapist/detail/${item.unic_id}`}
                              title="Edit Profile"
                              className="btn btn-green mr-2">
                              Continue
                            </Link>
                            <button type="button" className="btn btn-green">
                              View Reviews
                            </button>
                          </div>
                          <div if="is_price_show">
                            <h4 if="therapist_list.therapy_type=='social_worker' || therapist_list.therapy_type=='Social Worker'">
                              R 299.00
                            </h4>
                            {/* <h4 if="therapist_list.therapy_type=='registered_councillor' || therapist_list.therapy_type=='Registered Counsellor'">
                              R 499.00
                            </h4>
                            <h4 if="therapist_list.therapy_type=='counselling_psychologist' || therapist_list.therapy_type=='Counselling Psychologist'">
                              R 599.00
                            </h4>
                            <h4 if="therapist_list.therapy_type=='clinical_psychologist' || therapist_list.therapy_type=='Clinical Psychologist'">
                              R 699.00
                            </h4> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* <div className="col-12" if="therapistList.length <= '0' && loder_show=='no'">
                <div className="inner_head text-center mb-4 col-12">
                  <p>
                    <b>Sorry! No therapist found</b>
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

TherapistList.propTypes = {
  getTherapistsByScore: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  getTherapistsByScore: (values) => dispatch(getTherapistsByScoreAction(values)),
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(TherapistList);
