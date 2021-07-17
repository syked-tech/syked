import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { compose } from 'redux';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { tns } from 'tiny-slider/src/tiny-slider';
import {
  selectTherapists,
  getTherapists as getTherapistsAction,
} from 'containers/Therapist/therapistSlice';

import './Professionals.scss';
function Professionals({ getTherapists }) {
  const therapists = useSelector(selectTherapists);
  useEffect(() => {
    getTherapists();
  }, [getTherapists]);

  useEffect(() => {
    if (therapists.length) {
      tns({
        container: '.professionals_slider',
        swipeAngle: false,
        items: 5,
        center: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
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
            items: 2,
          },
          740: {
            items: 3,
          },
          940: {
            items: 4,
          },
          1024: {
            items: 5,
          },
        },
      });
    }
  }, [tns, therapists]);

  return (
    <section className="our_team">
      <Container maxWidth="md">
        <Grid container justify="center" spacing={3}>
          <Grid item xs={12}>
            <div className="heading">
              <h2>Our Professionals</h2>
              <p>
                Dial in to one of our accredited professionals, all in the comfort of your own home.
                All our therapists work on the strict client Dr Privacy policy. Our therapists are
                trained professionals who can help you with depression, stress and anxiety.
              </p>
            </div>
          </Grid>
        </Grid>
      </Container>

      <Grid container justify="center">
        <Grid item xs={12}>
          <Grid container justify="center" spacing={4} className="professionals_slider">
            {therapists.map((item) => (
              <Grid item key={item.id}>
                <div className="how-box">
                  <div className="icon_hiw">
                    <img
                      src={`https://syked.co.za/public/uploads/user/therapist/${item.profile_image}`}
                      alt="Profile"
                    />
                  </div>
                  <Box p={1.5} className="p-md-3 p-2">
                    <h4> {`${item.first_name} ${item.last_name}`}</h4>
                    <p>
                      <FontAwesomeIcon icon={faStar} />
                      <span className="rating">{item.avg_rating}</span>
                      <span>{`(${item.total_rating})`}</span>
                    </p>
                  </Box>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
}

Professionals.propTypes = {
  getTherapists: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  getTherapists: () => dispatch(getTherapistsAction()),
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(Professionals);
