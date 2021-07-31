import React from 'react';
// import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Header from 'components/Header';
import Footer from 'components/Footer';
import AccountSideBar from 'components/AccountSideBar';
import Profile from 'containers/Account/Profile';
import EditProfile from 'containers/Account/EditProfile';
import BankInfo from 'containers/Account/BankInfo';
import Bookings from 'containers/Account/Bookings';
import ChangePassword from 'containers/Account/ChangePassword';
import Notifications from 'containers/Account/Notifications';
import Diary from 'containers/Account/Diary';
import Assessment from 'containers/Account/Assessment';
import Library from 'containers/Account/Library';
import Exercise from 'containers/Account/Exercise';
import * as ROUTES from 'common/constants';

import './Dashboard.scss';

function Dashboard() {
  const userType = 'customer'; // therapist
  const accountRoutes = [
    {
      path: ROUTES.DASHBOARD_PAGE,
      exact: true,
      component: () => <Profile />,
    },
    {
      path: ROUTES.EDIT_PROFILE_PAGE,
      exact: true,
      component: () => <EditProfile />,
    },
    {
      path: ROUTES.EDIT_BANK_INFO_PAGE,
      exact: true,
      component: () => <BankInfo />,
    },
    {
      path: ROUTES.BOOKINGS_PAGE,
      exact: true,
      component: () => <Bookings />,
    },
    {
      path: ROUTES.CHANGE_PASSWORD_PAGE,
      exact: true,
      component: () => <ChangePassword />,
    },
    {
      path: ROUTES.NOTIFICATION_PAGE,
      exact: true,
      component: () => <Notifications />,
    },
    {
      path: ROUTES.DIARY_PAGE,
      exact: true,
      component: () => <Diary />,
    },
    {
      path: ROUTES.ASSESMENT_PAGE,
      exact: true,
      component: () => <Assessment />,
    },
    {
      path: ROUTES.LIBRARY_PAGE,
      exact: true,
      component: () => <Library />,
    },
    {
      path: ROUTES.LIBRARY_DETAILS_PAGE,
      exact: true,
      component: () => <Library />,
    },
    {
      path: ROUTES.EXERCISE_PAGE,
      exact: true,
      component: () => <Exercise />,
    },
  ];

  return (
    <>
      <Header isAuthenticated />
      <div className="wrapper top-margin inner_wrap">
        <Box component="section" className="site_listing site_detail consul-section">
          <Container maxWidth="lg" className="service_section dash">
            <Grid container justify="center" spacing={3}>
              <Grid item xs={12} sm={4} md={3}>
                <AccountSideBar userType={userType} />
              </Grid>
              <Grid item xs={12} sm={8} md={9}>
                {accountRoutes.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                  />
                ))}
              </Grid>
            </Grid>
          </Container>
        </Box>
      </div>
      <Footer />
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(Dashboard);
