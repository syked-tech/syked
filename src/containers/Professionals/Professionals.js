import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { tns } from 'tiny-slider/src/tiny-slider';

import './Professionals.scss';

const therapists = [
  {
    id: 189,
    first_name: 'Mohube',
    last_name: 'Maswi',
    avg_rating: 5,
    total_rating: 20,
    profile_image: 'therapist_IMG_2020727_162510.jpg',
  },
  {
    id: 413,
    first_name: 'Nthabiseng',
    last_name: 'Modiga',
    avg_rating: 5,
    total_rating: 3,
    profile_image: 'therapist_IMG_20201021_185338.jpg',
  },
  {
    id: 457,
    first_name: 'Xola',
    last_name: 'Jiyana',
    avg_rating: 5,
    total_rating: 2,
    profile_image: 'therapist_IMG_202121_165241.jpg',
  },
  {
    id: 79,
    first_name: 'Salmaan',
    last_name: 'Khader',
    avg_rating: 5,
    total_rating: 1,
    profile_image: 'therapist_IMG_20191014_131946.jpg',
  },
  {
    id: 102,
    first_name: 'Sheilla',
    last_name: 'Zwane ',
    avg_rating: 4.9,
    total_rating: 13,
    profile_image: 'therapist_IMG_2021612_52314.jpg',
  },
  {
    id: 84,
    first_name: 'Lusanda',
    last_name: 'Cebekhulu',
    avg_rating: 4.83,
    total_rating: 6,
    profile_image: 'therapist_IMG_2021630_111624.jpg',
  },
  {
    id: 418,
    first_name: 'Kaelin',
    last_name: 'Mulock Houwer',
    avg_rating: 4.8,
    total_rating: 6,
    profile_image: 'therapist_IMG_20201027_142222.jpg',
  },
  {
    id: 331,
    first_name: 'Asanda',
    last_name: 'Ranase',
    avg_rating: 4.8,
    total_rating: 4,
    profile_image: 'therapist_IMG_2020720_104842.jpg',
  },
  {
    id: 111,
    first_name: 'Portia',
    last_name: 'Machete',
    avg_rating: 4.75,
    total_rating: 6,
    profile_image: 'therapist_IMG_2019111_103715.jpeg',
  },
  {
    id: 82,
    first_name: 'Delia',
    last_name: 'Strondl',
    avg_rating: 4.5,
    total_rating: 3,
    profile_image: 'therapist_IMG_20191015_13469.jpg',
  },
  {
    id: 157,
    first_name: 'Louise',
    last_name: 'Husselmann',
    avg_rating: 4.4,
    total_rating: 8,
    profile_image: 'louise.png',
  },
  {
    id: 128,
    first_name: 'Ziyanda',
    last_name: 'Maphini',
    avg_rating: 0,
    total_rating: 0,
    profile_image: 'therapist_IMG_2021415_14412.jpg',
  },
  {
    id: 577,
    first_name: 'Namhla',
    last_name: 'Mbadu',
    avg_rating: 0,
    total_rating: 0,
    profile_image: 'therapist_IMG_2021621_114020.jpg',
  },
  {
    id: 531,
    first_name: 'Jackson',
    last_name: 'Mokwebo',
    avg_rating: 0,
    total_rating: 0,
    profile_image: 'therapist_IMG_2021617_204524.jpg',
  },
  {
    id: 514,
    first_name: 'Suhaila',
    last_name: 'Ameer',
    avg_rating: 0,
    total_rating: 0,
    profile_image: 'therapist_IMG_2021514_104514.jpg',
  },
  {
    id: 505,
    first_name: 'Cisca',
    last_name: 'Jansen',
    avg_rating: 0,
    total_rating: 0,
    profile_image: 'therapist_IMG_2021425_65957.49',
  },
  {
    id: 484,
    first_name: 'Andrea',
    last_name: 'Valentine',
    avg_rating: 0,
    total_rating: 0,
    profile_image: 'therapist_IMG_202146_74442.jpg',
  },
  {
    id: 481,
    first_name: 'Unarine',
    last_name: 'Mudau ',
    avg_rating: 0,
    total_rating: 0,
    profile_image: 'therapist_IMG_2021318_92647.jpeg',
  },
  {
    id: 465,
    first_name: 'Dikonelo',
    last_name: 'Matsoso',
    avg_rating: 0,
    total_rating: 0,
    profile_image: 'therapist_IMG_2021316_9911.jpg',
  },
  {
    id: 462,
    first_name: 'Nicolette',
    last_name: 'Meyer',
    avg_rating: 0,
    total_rating: 0,
    profile_image: 'therapist_IMG_2021221_135837.jpg',
  },
  {
    id: 459,
    first_name: 'Lourensa ',
    last_name: 'Loubser',
    avg_rating: 0,
    total_rating: 0,
    profile_image: 'therapist_IMG_2021130_154130.jpg',
  },
  {
    id: 168,
    first_name: 'Dudu',
    last_name: 'Ndlovu',
    avg_rating: 0,
    total_rating: 0,
    profile_image: 'therapist_IMG_2020121_211521.jpeg',
  },
  {
    id: 456,
    first_name: 'Nozie ',
    last_name: 'Mncwango ',
    avg_rating: 0,
    total_rating: 0,
    profile_image: 'therapist_IMG_202123_151630.jpeg',
  },
  {
    id: 455,
    first_name: 'Zine',
    last_name: 'Gabada',
    avg_rating: 0,
    total_rating: 0,
    profile_image: 'therapist_IMG_2021316_1394.jpg',
  },
  {
    id: 454,
    first_name: 'Solane',
    last_name: 'Baloyi',
    avg_rating: 0,
    total_rating: 0,
    profile_image: 'therapist_IMG_2021125_8955.jpg',
  },
  {
    id: 431,
    first_name: 'Kaleigh',
    last_name: 'Graham',
    avg_rating: 0,
    total_rating: 0,
    profile_image: 'therapist_IMG_20201127_94243.jpeg',
  },
  {
    id: 415,
    first_name: 'Shante',
    last_name: 'Dalhouzie',
    avg_rating: 0,
    total_rating: 0,
    profile_image: 'therapist_IMG_20201020_142020.jpg',
  },
  {
    id: 158,
    first_name: 'Lara',
    last_name: 'Rust',
    avg_rating: 0,
    total_rating: 0,
    profile_image: 'therapist_IMG_20191213_6553.JPG',
  },
  {
    id: 159,
    first_name: 'Louisah',
    last_name: 'Moloisane',
    avg_rating: 0,
    total_rating: 0,
    profile_image: 'therapist_IMG_20201117_192445.jpg',
  },
  {
    id: 218,
    first_name: 'Ezeem',
    last_name: 'Van Rensburg',
    avg_rating: 0,
    total_rating: 0,
    profile_image: 'Ezeem.jpg',
  },
];

export default function Professionals() {
  useEffect(() => {
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
  }, [tns]);

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
