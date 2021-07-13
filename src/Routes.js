import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as ROUTES from 'common/constants';
import AppliedRoute from 'components/AppliedRoute';
import AuthenticatedRoute from 'components/AuthenticatedRoute';
import UnauthenticatedRoute from 'components/UnauthenticatedRoute';

import NotFound from 'containers/NotFound';
import Home from 'containers/Home';
import Contact from 'containers/Contact';
import LogIn from 'containers/Auth/LogIn';
import SignUp from 'containers/Auth/SignUp';
import Dashboard from 'containers/Dashboard';
import Questions from 'containers/Questions';

export default function Routes({ appProps }) {
  return (
    <BrowserRouter>
      <Switch>
        <AppliedRoute exact appProps={appProps} component={Home} path={ROUTES.ROOT} />
        <UnauthenticatedRoute
          appProps={appProps}
          component={LogIn}
          exact
          path={ROUTES.LOGIN_PAGE}
        />
        <UnauthenticatedRoute
          appProps={appProps}
          component={SignUp}
          exact
          path={ROUTES.SIGN_UP_PAGE}
        />
        <UnauthenticatedRoute
          appProps={appProps}
          component={Contact}
          exact
          path={ROUTES.CONTACT_PAGE}
        />
        <UnauthenticatedRoute
          appProps={appProps}
          component={Questions}
          exact
          path={ROUTES.QUESTIONS_PAGE}
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
    </BrowserRouter>
  );
}

Routes.propTypes = {
  appProps: PropTypes.any,
};
