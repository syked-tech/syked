import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as ROUTES from 'common/constants';
import AppliedRoute from 'components/AppliedRoute';
import AuthenticatedRoute from 'components/AuthenticatedRoute';
import UnauthenticatedRoute from 'components/UnauthenticatedRoute';
import ScrollToTop from 'components/ScrollToTop';

import NotFound from 'containers/NotFound';
import Home from 'containers/Home';
import Contact from 'containers/Contact';
import LogIn from 'containers/Auth/LogIn';
import ForgotPassword from 'containers/Auth/ForgotPassword';
import ResetPassword from 'containers/Auth/ResetPassword';
import SignUp from 'containers/Auth/SignUp';
import MobileVerification from 'containers/Auth/MobileVerification';
import Disclaimer from 'containers/Auth/Disclaimer';
import Dashboard from 'containers/Account/Dashboard';
import Questions from 'containers/Questions';
import SupportGroup from 'containers/SupportGroup';
import TherapistList from 'containers/Therapist/TherapistList';
import TherapistDetails from 'containers/Therapist/TherapistDetails';
import Order from 'containers/Order';
import Terms from 'containers/Terms';
import Privacy from 'containers/Privacy';
import FAQ from 'containers/FAQ';

export default function Routes({ appProps }) {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
          component={ForgotPassword}
          exact
          path={ROUTES.FORGOT_PASSWORD_PAGE}
        />
        <UnauthenticatedRoute
          appProps={appProps}
          component={ResetPassword}
          exact
          path={ROUTES.RESET_PASSWORD_PAGE}
        />
        <UnauthenticatedRoute
          appProps={appProps}
          component={SignUp}
          exact
          path={ROUTES.SIGN_UP_PAGE}
        />
        <UnauthenticatedRoute
          appProps={appProps}
          component={MobileVerification}
          exact
          path={ROUTES.VERIFICATION_PAGE}
        />
        <UnauthenticatedRoute
          appProps={appProps}
          component={Disclaimer}
          exact
          path={ROUTES.DISCLAIMER_PAGE}
        />
        <AppliedRoute appProps={appProps} component={Contact} exact path={ROUTES.CONTACT_PAGE} />
        <AppliedRoute
          appProps={appProps}
          component={Questions}
          exact
          path={ROUTES.QUESTIONS_PAGE}
        />
        <AppliedRoute
          appProps={appProps}
          component={TherapistList}
          exact
          path={ROUTES.THERAPIST_LIST_PAGE}
        />
        <AppliedRoute
          appProps={appProps}
          component={TherapistDetails}
          exact
          path={ROUTES.THERAPIST_DETAILS_PAGE}
        />
        <AppliedRoute appProps={appProps} component={Terms} exact path={ROUTES.TERMS_PAGE} />
        <AppliedRoute appProps={appProps} component={Privacy} exact path={ROUTES.PRIVACY_PAGE} />
        <AppliedRoute appProps={appProps} component={FAQ} exact path={ROUTES.FAQ_PAGE} />
        <Switch>
          <AuthenticatedRoute
            appProps={appProps}
            component={Dashboard}
            exact
            path={ROUTES.DASHBOARD_PAGE}
          />
          <AuthenticatedRoute
            appProps={appProps}
            component={Dashboard}
            exact
            path={ROUTES.EDIT_PROFILE_PAGE}
          />
          <AuthenticatedRoute
            appProps={appProps}
            component={Dashboard}
            exact
            path={ROUTES.EDIT_BANK_INFO_PAGE}
          />
          <AuthenticatedRoute
            appProps={appProps}
            component={Dashboard}
            exact
            path={ROUTES.BOOKINGS_PAGE}
          />
          <AuthenticatedRoute
            appProps={appProps}
            component={Dashboard}
            exact
            path={ROUTES.CHANGE_PASSWORD_PAGE}
          />
          <AuthenticatedRoute
            appProps={appProps}
            component={Dashboard}
            exact
            path={ROUTES.NOTIFICATION_PAGE}
          />
          <AuthenticatedRoute
            appProps={appProps}
            component={Dashboard}
            exact
            path={ROUTES.DIARY_PAGE}
          />
          <AuthenticatedRoute
            appProps={appProps}
            component={Dashboard}
            exact
            path={ROUTES.ASSESMENT_PAGE}
          />
          <AuthenticatedRoute
            appProps={appProps}
            component={Dashboard}
            exact
            path={ROUTES.LIBRARY_PAGE}
          />
          <AuthenticatedRoute
            appProps={appProps}
            component={Dashboard}
            exact
            path={ROUTES.LIBRARY_DETAILS_PAGE}
          />
          <AuthenticatedRoute
            appProps={appProps}
            component={Dashboard}
            exact
            path={ROUTES.EDIT_BANK_INFO_PAGE}
          />
          <AuthenticatedRoute
            appProps={appProps}
            component={Dashboard}
            exact
            path={ROUTES.EXERCISE_PAGE}
          />
          <AuthenticatedRoute
            appProps={appProps}
            component={SupportGroup}
            exact
            path={ROUTES.SUPPORT_GROUP_PAGE}
          />
          <AuthenticatedRoute
            appProps={appProps}
            component={Order}
            exact
            path={ROUTES.THERAPIST_ORDER_PAGE}
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
