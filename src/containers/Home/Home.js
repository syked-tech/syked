import React, { useEffect } from 'react';
import Footer from 'components/Footer';
import 'tiny-slider/dist/tiny-slider.css';
import { tns } from 'tiny-slider/src/tiny-slider';
import './Home.scss';

export default function Home() {
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
    <div>
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
          <img src="assets/img/banner.png" alt="Banner" />
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
          <img src="assets/img/banner_2.png" alt="Banner" />
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
          <img src="assets/img/banner_3.png" alt="Banner" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
