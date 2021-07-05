import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import * as ROUTES from 'common/constants';
import AppliedRoute from 'components/AppliedRoute';
import AuthenticatedRoute from 'components/AuthenticatedRoute';
import UnauthenticatedRoute from 'components/UnauthenticatedRoute';

import NotFound from 'containers/NotFound';
import Home from 'containers/Home';
import LogIn from 'containers/Auth/LogIn';
import Dashboard from 'containers/Dashboard';

export default function Routes({ appProps }) {
  return (
    <>
      <Switch>
        <AppliedRoute appProps={appProps} component={Home} exact path={ROUTES.ROOT} />
        <UnauthenticatedRoute
          appProps={appProps}
          component={LogIn}
          exact
          path={ROUTES.LOGIN_PAGE}
        />
        <Switch>
          <AuthenticatedRoute
            appProps={appProps}
            component={Dashboard}
            exact
            path={ROUTES.DASHBOARD_PAGE}
          />
          <Route component={NotFound} />
        </Switch>
      </Switch>
    </>
  );
}

Routes.propTypes = {
  appProps: PropTypes.any,
};
