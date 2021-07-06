import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { tns } from 'tiny-slider/src/tiny-slider';
import './Testimonials.scss';

const reviews = [
  {
    id: 102,
    review: 'The psychologists is always amazing and has helped a lot. ',
  },
  {
    id: 101,
    review: 'Session was great ',
  },
  {
    id: 100,
    review: 'Write a Comment..',
  },
  {
    id: 99,
    review:
      'She is very kind, thoughtful and resourceful. App was giving us problems but she made a plan for us to still have our session. Always on time and always consistent.',
  },
  {
    id: 96,
    review: 'Write a Comment..',
  },
  {
    id: 94,
    review: 'im feeling a whole lot bettter after this session',
  },
  {
    id: 92,
    review: "She's exceptional in her work and her sessions has been so helpful??",
  },
  {
    id: 91,
    review: 'Write a Comment..',
  },
  {
    id: 90,
    review: 'Write a Comment..',
  },
  {
    id: 89,
    review: 'Write a Comment..',
  },
];

const companyImages = [
  { image: 'logo_6.png', link: 'http://fsatlabs.co.za/' },
  { image: 'Africarena.jpg', link: 'https://www.africarena.com/' },
  { image: 'JoziFmlogo.jpg', link: 'https://www.jozifm.co.za/' },
  {
    image: 'VentureburnLogo.jpg',
    link: 'https://ventureburn.com/2019/11/africarena-2019-winners/',
  },
  {
    image: 'Disrupt.png',
    link: 'https://disrupt-africa.com/2019/11/startups-named-challenge-winners-at-africarena-event-in-cape-town/',
  },
  { image: 'Umthombo_logo.jpg', link: 'https://www.umthomboyouth.org.za/' },
  { image: 'HWSETA.png', link: 'http://www.hwseta.org.za/' },
  { image: 'halocare.png', link: 'https://www.halocare.co.za/' },
];

export default function Testimonials() {
  useEffect(() => {
    tns({
      container: '.review_slider',
      swipeAngle: false,
      center: true,
      loop: true,
      autoplay: true,
      autoplayTimeout: 8000,
      mouseDrag: true,
      controls: false,
      nav: true,
      dots: true,
      navPosition: 'bottom',
      autoplayButtonOutput: false,
      autoplayText: false,
      responsive: {
        0: {
          items: 1,
        },
        400: {
          items: 1,
        },
        740: {
          items: 1,
        },
        940: {
          items: 1,
        },
      },
    });
    tns({
      container: '.clients_slider',
      swipeAngle: false,
      center: true,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      mouseDrag: true,
      nav: false,
      controls: true,
      controlsPosition: 'bottom',
      controlsText: ['<', '>'],
      autoplayButtonOutput: false,
      responsive: {
        0: {
          items: 1,
        },
        400: {
          items: 3,
        },
        740: {
          items: 4,
        },
        940: {
          items: 5,
        },
        1024: {
          items: 5,
        },
      },
    });
  }, [tns]);

  return (
    <>
      <section className="testimonials">
        <Container maxWidth="md">
          <Grid container justify="center">
            <Grid item xs={12}>
              <h2 className="mb-5">What our patients have to say</h2>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={6} md={6}>
              <div className="video videoHome">
                <img src="assets/img/video_banner.png" alt="" />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <div className="border-div">
                <div className="review_slider">
                  {reviews.map((item) => (
                    <div key={item.id} className="content_test">
                      <p>{`"${item.review}" - Anonymous`}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className="got-it">
        <Container maxWidth="md">
          <Grid container justify="center">
            <Grid item xs={12}>
              <div className="have_got">
                <h2>
                  Explore Syked today – Experience why so many people are living happily ever after
                </h2>
                <button type="button" className="btn green-btn">
                  contact us
                </button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className="our_clients">
        <Container maxWidth="md">
          <Grid container justify="center">
            <Grid item xs={12}>
              <div className="text-center mb-5">
                <h2>News & Partners</h2>
              </div>
            </Grid>
          </Grid>

          <Grid container justify="center">
            <Grid item xs={12}>
              <div className="clients_slider">
                {companyImages.map((item) => (
                  <div key={item.link} className="p-3">
                    <div className="icon_hiw logo">
                      <a href={`${item.link}`} target="_blank">
                        <img src={`assets/img/${item.image}`} alt="Logo" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
}
