/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Cookies } from 'react-cookie';
import { compose } from 'redux';
import { connect, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  selectIsAuthenticated,
  // selectUser,
  userHasAuthenticated as userHasAuthenticatedAction,
  userSession as userSessionAction,
} from 'containers/Auth/authSlice';
import Notifier from 'components/Notifier';
import * as CONSTANTS from 'common/constants';

import Routes from './Routes';
import './App.scss';
function App({ userHasAuthenticated, setUserSession }) {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const cookies = new Cookies();

  const onLoad = useCallback(async () => {
    try {
      const token = cookies.get(CONSTANTS.JWT_NAME);
      const currentSession = JSON.parse(atob(token.split('.')[1]));
      setUserSession(currentSession);
      userHasAuthenticated(true);
    } catch (e) {
      userHasAuthenticated(false);
    }
    setIsAuthenticating(false);
  }, [setUserSession, userHasAuthenticated]);

  useEffect(() => {
    onLoad();
  }, [onLoad, isAuthenticated]);

  return (
    <>
      <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
      <Notifier />
    </>
  );
}

App.propTypes = {
  userHasAuthenticated: PropTypes.func,
  setUserSession: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  userHasAuthenticated: (values) => dispatch(userHasAuthenticatedAction(values)),
  setUserSession: (values) => dispatch(userSessionAction(values)),
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(withRouter, withConnect)(App);
