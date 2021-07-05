import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.scss';

export default function Footer() {
  return (
    <footer>
      <Container>
        <Grid container justify="center" spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <a href="#0" className="mb-2 d-block f-logo">
              <img src="assets/img/logo.png" alt="Logo" />
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
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#Our Therapist">Our Professionals</a>
              </li>
              <li>
                <a href="#how-work">How it Works</a>
              </li>
              <li>
                <a href="/testimonials">Testimonials</a>
              </li>
              <li>
                <a href="/login">Sign Up /Login</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <h4>Privacy</h4>
            <ul>
              <li>
                <a href="/terms">Terms and conditions</a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/faq">FAQ</a>
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
