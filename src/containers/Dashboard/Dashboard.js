/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useCookies } from 'react-cookie';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faList,
  faUser,
  faLock,
  faFile,
  faClock,
  faStar,
  faTable,
  faHeart,
  faBell,
  faPencilAlt,
  faSignOutAlt,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { signOut as signOutAction } from 'containers/Auth/authSlice';
import * as ROUTES from 'common/constants';

import './Dashboard.scss';

const MenuList = ({ userType }) => {
  switch (userType) {
    case 'customer':
      return (
        <>
          <li has="customer">
            <NavLink to={ROUTES.DASHBOARD_PAGE} activeClassName="active">
              <FontAwesomeIcon icon={faUser} /> My Profile
            </NavLink>
          </li>
          <li has="customer">
            <NavLink to={ROUTES.BOOKINGS_PAGE} activeClassName="active">
              <FontAwesomeIcon icon={faList} /> My Bookings
            </NavLink>
          </li>
          <li has="customer">
            <NavLink to={ROUTES.NOTIFICATION_PAGE} activeClassName="active">
              <FontAwesomeIcon icon={faBell} /> Notification List
              <span className="count chat_count">1</span>
            </NavLink>
          </li>
          <li has="customer">
            <NavLink to={ROUTES.DIARY_PAGE} activeClassName="active">
              <FontAwesomeIcon icon={faFile} /> Diary
            </NavLink>
          </li>
          <li has="customer">
            <NavLink to={ROUTES.ASSESMENT_PAGE} activeClassName="active">
              <FontAwesomeIcon icon={faQuestionCircle} /> Assessment
            </NavLink>
          </li>
          <li has="customer">
            <NavLink to={ROUTES.LIBRARY_PAGE} activeClassName="active">
              <FontAwesomeIcon icon={faTable} /> Library
            </NavLink>
          </li>
          <li has="customer">
            <NavLink to={ROUTES.EXERCISE_PAGE} activeClassName="active">
              <FontAwesomeIcon icon={faHeart} /> Exercise
            </NavLink>
          </li>
        </>
      );
    case 'therapist':
      return (
        <>
          <li has="therapist">
            <NavLink to={ROUTES.DASHBOARD_PAGE} activeClassName="active">
              <FontAwesomeIcon icon={faUser} /> My Profile
            </NavLink>
          </li>
          <li has="therapist">
            <NavLink to={ROUTES.BOOKINGS_PAGE} activeClassName="active">
              <FontAwesomeIcon icon={faList} /> My Bookings
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.CHANGE_PASSWORD_PAGE} activeClassName="active">
              <FontAwesomeIcon icon={faLock} /> Change Password
            </NavLink>
          </li>
          <li has="therapist">
            <NavLink to={ROUTES.EDIT_BANK_INFO_PAGE} activeClassName="active">
              <FontAwesomeIcon icon={faLock} /> Bank Information
            </NavLink>
          </li>
          <li has="therapist">
            <NavLink to={ROUTES.SCHEDULE_PAGE} activeClassName="active">
              <FontAwesomeIcon icon={faClock} /> My Schedule
            </NavLink>
          </li>
          <li has="therapist">
            <NavLink to={ROUTES.REVIEWS_PAGE} activeClassName="active">
              <FontAwesomeIcon icon={faStar} /> My Reviews
            </NavLink>
          </li>
          <li has="therapist">
            <NavLink to={ROUTES.NOTIFICATION_PAGE} activeClassName="active">
              <FontAwesomeIcon icon={faBell} /> Notification List
              <span className="count chat_count">count</span>
            </NavLink>
          </li>
        </>
      );
    default:
      return <></>;
  }
};

function Dashboard({ signOut }) {
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies([ROUTES.JWT_NAME]);
  const userType = 'customer'; // therapist

  return (
    <>
      <Header isAuthenticated />
      <div className="wrapper top-margin inner_wrap">
        <Box component="section" className="site_listing site_detail">
          <Container maxWidth="lg" className="service_section dash">
            <Grid container justify="center" spacing={3}>
              <Grid item xs={12} sm={4} md={3}>
                <div className="deatail_box p-0">
                  <h3 className="p-3 mb-0">My Account</h3>
                  <ul className="side_bar p-0">
                    <MenuList userType={userType} />
                    <li>
                      <Link disabled to="#0" onClick={signOut}>
                        <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </Grid>
              <Grid item xs={12} sm={8} md={9}>
                <div className="inner_page mb-3">
                  <div className="form">
                    <form className="therpist_form">
                      <div>
                        <h5 className="d-flex justify-content-between mb-3 pb-3 border-bottom text-uppercase">
                          Personal Information
                          <Link
                            to={ROUTES.EDIT_PROFILE_PAGE}
                            title="Edit Profile"
                            className="btn btn-theme text-uppercase text-right">
                            <FontAwesomeIcon icon={faPencilAlt} /> Edit
                          </Link>
                        </h5>
                      </div>
                      <div className="d-sm-flex">
                        <div className="pro_img">
                          <img src="assets/img/user.png" alt="profile" />
                        </div>
                        <div className="pr-d w-md-100 row mb-0">
                          <div className="mb-3 col-md-6">
                            <label>First Name:</label>
                            <span>NA</span>
                          </div>
                          <div className="mb-3 col-md-6">
                            <label>Last Name:</label>
                            <span>NA</span>
                          </div>
                          <div className="mb-3 col-lg-6">
                            <label>Email:</label>
                            <span>NA</span>
                          </div>
                          <div className="mb-3 col-md-6">
                            <label>Phone:</label>
                            <span>NA</span>
                          </div>
                          <div className="mb-3 col-md-6">
                            <label>Age:</label>
                            <span>NA</span>
                          </div>
                          <div className="mb-3 col-md-6">
                            <label>Suburb:</label>
                            <span>NA</span>
                          </div>
                          <div className="mb-3 col-md-6">
                            <label>City:</label>
                            <span>NA</span>
                          </div>
                          <div className="mb-3 col-md-6">
                            <label>Next of Kin Name:</label>
                            <span>NA</span>
                          </div>
                          <div className="mb-3 col-md-6">
                            <label>Next of Kin Number:</label>
                            <span>NA</span>
                          </div>
                          <div className="mb-3 col-md-6">
                            <label>Referral Code:</label>
                            <span>NA</span>
                            <div>share buttons</div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </div>
      <Footer />
    </>
  );
}

MenuList.propTypes = {
  userType: PropTypes.string,
};

Dashboard.propTypes = {
  signOut: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutAction()),
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(Dashboard);
