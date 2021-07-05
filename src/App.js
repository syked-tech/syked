/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  selectIsAuthenticated,
  // selectUser,
  userHasAuthenticated as userHasAuthenticatedAction,
  // userSession as userSessionAction,
} from 'containers/Auth/authSlice';
import Notifier from 'components/Notifier';
import Routes from './Routes';

function App({ userHasAuthenticated }) {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  return (
    <>
      <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
      <Notifier />
    </>
  );
}

App.propTypes = {
  userHasAuthenticated: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  userHasAuthenticated: (values) => dispatch(userHasAuthenticatedAction(values)),
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(withRouter, withConnect)(App);
