import React from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import * as ROUTES from 'common/constants';
import './Header.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'absolute',
    width: '100%',
    marginTop: '25px',
    zIndex: 10,
  },
  appBar: {
    borderRadius: 5,
    boxShadow: '0 2px 20px rgb(0 0 0 / 10%)',
    transition: 'all ease 250ms',
    maxWidth: 1140,
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      borderRadius: 0,
    },
  },
  appBarFull: {
    borderRadius: 0,
    backgroundColor: '#bac866',
    transition: 'all ease 250ms',
    maxWidth: '100%',
  },
}));

export default function Header() {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 20,
  });
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const isMobile = trigger || matches;

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#home-section');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <AppBar
          color="inherit"
          elevation={0}
          className={clsx(classes.appBar, {
            [classes.appBarFull]: trigger,
          })}
          position={isMobile ? 'fixed' : 'static'}>
          <Container disableGutters maxWidth="lg">
            <Toolbar>
              <div className="container main_header">
                <Navbar collapseOnSelect expand="lg">
                  <>
                    <div className="navbar-header d-flex align-items-center justify-content-between">
                      <NavLink className="p-0 navbar-brand" to={ROUTES.ROOT} onClick={handleClick}>
                        {trigger ? (
                          <img
                            className={classes.navbarBrandLogo}
                            src="assets/img/white_logo.png"
                            alt="Logo"
                          />
                        ) : (
                          <img
                            className={classes.navbarBrandLogo}
                            src="assets/img/logo.png"
                            alt="Logo"
                          />
                        )}
                      </NavLink>
                      <Navbar.Toggle aria-controls="responsive-navbar-nav">
                        <span className="icon-menu"></span>
                        <span className="icon-menu"></span>
                        <span className="icon-menu"></span>
                      </Navbar.Toggle>
                    </div>
                    <Navbar.Collapse id="responsive-navbar-nav">
                      <ul className="navbar-nav mr-auto w-100 align-items-center justify-content-end">
                        <li className="nav-item">
                          <NavLink
                            exact
                            onClick={handleClick}
                            className={`${trigger ? 'alt-nav-link' : null} nav-link`}
                            to={`${ROUTES.ROOT}#home-section`}>
                            Home
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <Nav.Link
                            className={`${trigger ? 'alt-nav-link' : null} nav-link`}
                            href="#professionals-section">
                            Our Professionals
                          </Nav.Link>
                        </li>
                        <li className="nav-item">
                          <Nav.Link
                            className={`${trigger ? 'alt-nav-link' : null} nav-link`}
                            href="#how-it-works-setion">
                            How it Works
                          </Nav.Link>
                        </li>
                        <li className="nav-item">
                          <Nav.Link
                            className={`${trigger ? 'alt-nav-link' : null} nav-link`}
                            href="#0">
                            Blog
                          </Nav.Link>
                        </li>
                        <li className="nav-item">
                          <Nav.Link
                            className={`${trigger ? 'alt-nav-link' : null} nav-link`}
                            href="#testimonials-section">
                            Testimonials
                          </Nav.Link>
                        </li>
                        <li className="nav-item">
                          <NavLink
                            exact
                            onClick={handleClick}
                            className={`${trigger ? 'alt-nav-link' : null} nav-link`}
                            to={ROUTES.LOGIN_PAGE}>
                            Sign up / Login
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink
                            className={`${trigger ? 'alt-nav-link' : null} nav-link`}
                            activeClassName="active"
                            to={ROUTES.CONTACT_PAGE}>
                            Contact Us
                          </NavLink>
                        </li>
                      </ul>
                    </Navbar.Collapse>
                  </>
                </Navbar>
              </div>
            </Toolbar>
          </Container>
        </AppBar>
      </Container>
    </div>
  );
}
