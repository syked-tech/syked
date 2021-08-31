import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Professionals from 'containers/Professionals';
import HowItWorks from 'containers/HowItWorks';
import Testimonials from 'containers/Testimonials';
import { selectIsAuthenticated } from 'containers/Auth/authSlice';
import 'tiny-slider/dist/tiny-slider.css';
import { tns } from 'tiny-slider/src/tiny-slider';
import * as ROUTES from 'common/constants';
import './Home.scss';

export default function Home() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  useEffect(() => {
    tns({
      container: '.slider',
      slideBy: 'page',
      swipeAngle: false,
      viewportMax: true,
      loop: true,
      autoplay: true,
      autoplayTimeout: 8000,
      mouseDrag: true,
      controls: false,
      nav: false,
      autoplayButtonOutput: false,
      autoplayText: false,
    });
  }, [tns]);

  return (
    <>
      <Header isAuthenticated={isAuthenticated} />
      <section id="home-section">
        <div className="slider">
          <div className="banner_section">
            <div className="banner">
              <div className="home_content">
                <h1>
                  {`Your future shouldn't be defined by your past, get syked about unlocking your true
                  greatness`}
                </h1>
                <p>
                  {`Get access to qualified professionals in the comfort of your own home through secure
                  private video calls.`}
                </p>
              </div>
            </div>
            <img src="syked/assets/img/banner.png" alt="Banner" />
          </div>
          <div className="banner_section">
            <div className="banner">
              <div className="home_content">
                <h1>Your feelings are valid</h1>
                <p>
                  {`Get access to qualified professionals in the comfort of your own home through secure
                  private video calls.`}
                </p>
              </div>
            </div>
            <img src="syked/assets/img/banner_2.png" alt="Banner" />
          </div>
          <div className="banner_section">
            <div className="banner">
              <div className="home_content">
                <h1>Access to mental health well being will never be the same again</h1>
                <p>
                  {`Get access to qualified professionals in the comfort of your own home through secure
                  private video calls.`}
                </p>
              </div>
            </div>
            <img src="syked/assets/img/banner_3.png" alt="Banner" />
          </div>
        </div>

        <Container className="service_section">
          <Grid container justify="center">
            <Grid item xs={12} sm={6} md={3}>
              <div className="green_three user">
                <div>
                  <img src="syked/assets/img/teens.png" alt="Teens" />
                </div>
                <div>
                  <h2>Students</h2>
                  <Link to={ROUTES.QUESTIONS_PAGE} type="button" className="btn bg-white">
                    Book Now
                  </Link>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <div className="green_one user">
                <div>
                  <img src="syked/assets/img/individuals.png" alt="Individual" />
                </div>
                <div>
                  <h2>Employee</h2>
                  <Link to={ROUTES.QUESTIONS_PAGE} type="button" className="btn bg-white">
                    Book Now
                  </Link>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <div className="green_three user">
                <div>
                  <img src="syked/assets/img/gernal-public.png" alt="Public" />
                </div>
                <div>
                  <h2>General Public</h2>
                  <Link to={ROUTES.QUESTIONS_PAGE} type="button" className="btn bg-white">
                    Book Now
                  </Link>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
      <div className="anchorPoint" id="professionals-section" />
      <Professionals />
      <div className="anchorPoint" id="how-it-works-setion" />
      <HowItWorks />
      <div className="anchorPoint" id="testimonials-section" />
      <Testimonials />
      <Footer />
    </>
  );
}
