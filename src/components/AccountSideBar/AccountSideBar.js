import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useCookies } from 'react-cookie';
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
  faSignOutAlt,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';
import { signOut as signOutAction } from 'containers/Auth/authSlice';
import * as ROUTES from 'common/constants';

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
            <NavLink to={ROUTES.CHANGE_PASSWORD_PAGE} activeClassName="active">
              <FontAwesomeIcon icon={faLock} /> Change Password
            </NavLink>
          </li>
          <li has="customer">
            <NavLink to={ROUTES.NOTIFICATION_PAGE} activeClassName="active">
              <FontAwesomeIcon icon={faBell} /> Notification List
              {/* <span className="count chat_count">1</span> */}
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

function AccountSideBar({ signOut, userType }) {
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies([ROUTES.JWT_NAME]);
  return (
    <div className="deatail_box p-0 mb-5">
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
  );
}

MenuList.propTypes = {
  userType: PropTypes.string,
};

AccountSideBar.propTypes = {
  signOut: PropTypes.func,
  userType: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutAction()),
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(AccountSideBar);
