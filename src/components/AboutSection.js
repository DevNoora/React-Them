import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import PrimaryButton from "./buttons/PrimaryButton";
import ParagraphText from "./paragraphTexts/ParagraphText";
import SectionTitle from "./titles/SectionTitle";
// import AboutImg from '../assets/images/about.png';

const AboutStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 10rem 0; */

  .about__wrapper {
    margin-top: -25.2rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .about__subtitle {
    margin-bottom: 1rem;
    /* font-weight: 600; */
    text-transform: capitalize;
    color: var(--mediumSlateBlue);
  }
  .about__title {
    margin-bottom: 2rem;
    /* max-width: 350px; */
  }
  .about__desc {
    margin-bottom: 2rem;
    max-width: 300px;
  }
  .about__img {
    margin-bottom: 20.5rem;
    max-width: 300px;
  }

  @media only screen and (max-width: 768px) {
    .about__wrapper {
      flex-direction: column;
    }
    .about__img {
      max-width: 400px;
    }
  }
`;

function AboutSection() {
  return (
    <AboutStyles id="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__img">
            <img src="/" alt="About" />
          </div>
          <div className="about__info">
            <ParagraphText className="about__subtitle">
              Lorem ipsum dolor sit
            </ParagraphText>
            <SectionTitle className="about__title">
              amet consectetur adipisicing elit.
            </SectionTitle>
            <ParagraphText className="about__desc">
              Maxime mollitia, molestiae quas vel sint commodi repudiandae
              Ipsa laudantium molestias eos sapiente officiis modi at sunt
              excepturi expedita sint? Sed quibusdam recusandae alias error
              harum maxime adipisci amet laborum. Perspiciatis minima nesciunt
              dolorem! Officiis iure rerum voluptates a cumque velit
            </ParagraphText>
            <PrimaryButton buttonType={Link} to="contact" smooth>
              Get In Touch
            </PrimaryButton>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="about__wrapper">
          <div className="about__info">
            <SectionTitle className="about__title">
            </SectionTitle>
            <ParagraphText className="about__desc">
            </ParagraphText>
          </div>
          <div className="about__img">
            <img src="/" alt=""
            />
          </div>
        </div>
      </div>
    </AboutStyles>
  );
}

export default AboutSection;
