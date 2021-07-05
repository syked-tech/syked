import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
import './HowItWorks.scss';

export default function HowItWorks() {
  return (
    <>
      <section className="how_it_work">
        <Container maxWidth="md">
          <Grid container justify="center" spacing={3}>
            <Grid item xs={12}>
              <div className="heading">
                <h2>How It Works</h2>
                <p>
                  Gone are the days when you had to get into your car and drive to your nearest
                  medical centre for a private consultation, with Syked you can now have your own
                  private therapist in the palm of your hands and all in the comfort of your own
                  home or any personal space you may like
                </p>
              </div>
            </Grid>
            <Grid container justify="center" spacing={3}>
              <Grid item xs={6}>
                <div className="text-center col wow rollIn">
                  <img src="assets/img/how_it_1.png" alt="How it works" />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="how_content">
                  <h5>Registration</h5>
                  <ul>
                    <li>Simply register as a new user</li>
                    <li>Complete a quick questionnaire </li>
                    <li>
                      Then select your preferred therapist from the list that meets your
                      requirements
                    </li>
                  </ul>
                </div>
              </Grid>
            </Grid>
            <Grid container justify="center" spacing={3}>
              <Grid item xs={6}>
                <div className="how_content">
                  <h5>Booking & Consultation</h5>
                  <ul>
                    <li>Select suitable time & date for your session</li>
                    <li>Confirm payment method</li>
                    <li>Get started with the secure video consultation</li>
                  </ul>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="text-center col wow rollIn">
                  <img src="assets/img/how_it_2.png" alt="How it works" />
                </div>
              </Grid>
            </Grid>
            <Grid></Grid>
          </Grid>
        </Container>
      </section>
      <section className="happiness">
        <Container>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={12} md={4} lg={4}>
              <img className="user_img" src="assets/img/new_smill.png" alt="Smile" />
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <h4>Your well being is our main theme</h4>
              <p className="mb-0">
                Destigmatize mental health assistance for the African population by making it more
                affordable and accessible
              </p>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <img className="stamp_img" src="assets/img/happiness.png" alt="Smile" />
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
}
