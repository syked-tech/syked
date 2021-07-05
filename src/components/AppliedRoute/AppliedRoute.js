/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

export default function AppliedRoute({ component: C, appProps, ...rest }) {
  return <Route {...rest} render={(props) => <C {...props} {...appProps} />} />;
}

AppliedRoute.propTypes = {
  appProps: PropTypes.any,
  component: PropTypes.any,
};
