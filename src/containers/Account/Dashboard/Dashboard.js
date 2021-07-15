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
  ];

  return (
    <>
      <Header isAuthenticated />
      <div className="wrapper top-margin inner_wrap">
        <Box component="section" className="site_listing site_detail">
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
