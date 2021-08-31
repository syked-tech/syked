import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import * as CONSTANTS from 'common/constants';
import './Footer.scss';

export default function Footer() {
  return (
    <footer>
      <Container>
        <Grid container justify="center" spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <a href="#0" className="mb-2 d-block f-logo">
              <img src="syked/assets/img/logo.png" alt="Logo" />
            </a>
            <p>
              If you’re in a life threatening situation- refrain from using this platform call the{' '}
              <b>Suicide Crisis Line on 0800 567 567</b> or{' '}
              <b>SADAG Mental Health Line 011 234 4837</b>
            </p>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <h4>Bottom of the page</h4>
            <ul>
              <li>
                <Link to={CONSTANTS.ROOT}>Home</Link>
              </li>
              <li>
                <Link to={`${CONSTANTS.ROOT}#professionals-section`}>Our Professionals</Link>
              </li>
              <li>
                <Link to={`${CONSTANTS.ROOT}#how-it-works-setion`}>How it Works</Link>
              </li>
              <li>
                <Link to={`${CONSTANTS.ROOT}#testimonials-section`}>Testimonials</Link>
              </li>
              <li>
                <Link to={CONSTANTS.LOGIN_PAGE}>Sign Up /Login</Link>
              </li>
              <li>
                <a href="https://blog.syked.co.za">Blog</a>
              </li>
              <li>
                <Link to={CONSTANTS.CONTACT_PAGE}>Contact Us</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <h4>Privacy</h4>
            <ul>
              <li>
                <Link to={CONSTANTS.TERMS_PAGE}>Terms and conditions</Link>
              </li>
              <li>
                <Link to={CONSTANTS.PRIVACY_PAGE}>Privacy Policy</Link>
              </li>
              <li>
                <Link to={CONSTANTS.FAQ_PAGE}>FAQ</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <h4>Contact Us</h4>
            <ul>
              <li>
                <a href="tel:0647299214">064 729 9214</a>
              </li>
              {/* <li>
                <a href="mailto:info@syked.co.za">info@syked.co.za</a>
              </li> */}
            </ul>
            <div className="social">
              <ul>
                <li>
                  <a href="https://www.facebook.com/sykedza" target="_blank">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/sykedza" target="_blank">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/syked_za" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </Container>
      <div className="bottom_footer">
        <p>© 2021 Syked Pvt. Ltd.</p>
      </div>
    </footer>
  );
}
