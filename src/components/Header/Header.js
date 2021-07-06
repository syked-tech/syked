import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
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
                      <Navbar.Brand className="p-0" href="#0">
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
                      </Navbar.Brand>
                      <Navbar.Toggle aria-controls="responsive-navbar-nav">
                        <span className="icon-menu"></span>
                        <span className="icon-menu"></span>
                        <span className="icon-menu"></span>
                      </Navbar.Toggle>
                    </div>
                    <Navbar.Collapse id="responsive-navbar-nav">
                      <ul className="navbar-nav mr-auto w-100 align-items-center justify-content-end">
                        <li className="nav-item active">
                          <Nav.Link className="nav-link active" href="#0">
                            Home
                          </Nav.Link>
                        </li>
                        <li className="nav-item">
                          <Nav.Link
                            className={`${trigger ? 'alt-nav-link' : null} nav-link`}
                            href="#0">
                            Our Professionals
                          </Nav.Link>
                        </li>
                        <li className="nav-item">
                          <Nav.Link
                            className={`${trigger ? 'alt-nav-link' : null} nav-link`}
                            href="#0">
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
                            href="#0">
                            Testimonials
                          </Nav.Link>
                        </li>
                        <li className="nav-item">
                          <Nav.Link
                            className={`${trigger ? 'alt-nav-link' : null} nav-link`}
                            href="#0">
                            Sign up / Login
                          </Nav.Link>
                        </li>
                        <li className="nav-item">
                          <Nav.Link
                            className={`${trigger ? 'alt-nav-link' : null} nav-link`}
                            href="#0">
                            Contact Us
                          </Nav.Link>
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
