import React from 'react';
import { Container, Typography } from '@mui/material';
import HeroBanner from '../components/HomeView/HeroBanner';

const AboutView = () => {
  const heroImageUrl = "./img/about-hero-image.jpg";

  return (
    <div data-testid="about-view" id="AboutView">
      <HeroBanner imgUrl={heroImageUrl} />
      <Container>
        <Typography variant="h1" sx={{ fontSize: '3em' }}>Bat + Bun</Typography>
        <p>
          Bat + Bun (Bowl + Noodle) is offering the best Vietnamese cuisine located in Darlinghurst area. Here, you will be able to taste delicious pork belly, nicely cooked noodle salads, and other Vietnamese Street food. You will also hardly forget the delicious tea and sweet treats that you can order.
        </p>
        <div className="about-owner">
          <p className="about-img">
            <img src="./img/owner.jpg" alt="Bat + Bun owner" />
          </p>
          <p>
            We love to give the best service and the best quality of food for everyone. Fresh ingredients and selected quality herbs and spices are our secret in delivering the best flavour our food can offer. So, the next time you come to Darlinghurst, do not forget to say hi! We will be waiting for you with our delicious food in Bat + Bun...
          </p>
        </div>
      </Container>
    </div>
  )
}

export default AboutView;
