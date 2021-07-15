/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export default function AuthenticatedRoute({ component: C, appProps, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (appProps.isAuthenticated) {
          return <C {...props} {...appProps} />;
        }
        return (
          <Redirect to={`/login?redirect=${props.location.pathname}${props.location.search}`} />
        );
      }}
    />
  );
}

AuthenticatedRoute.propTypes = {
  appProps: PropTypes.any,
  component: PropTypes.any,
  location: PropTypes.any,
};
