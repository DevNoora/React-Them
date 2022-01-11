import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import PrimaryButton from './buttons/PrimaryButton';
import ParagraphText from './paragraphTexts/ParagraphText';
import SectionTitle from './titles/SectionTitle';
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
  .about__img
  {
   margin-bottom: 20.5rem;
   max-width: 300px;}

  
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
             <img src='https://static.wixstatic.com/media/57245c_db7fa32a37824027bcf7fb0882508bfd~mv2.png/v1/fill/w_400,h_400,al_c,q_85,usm_0.66_1.00_0.01/app%20web%203-01.webp' alt="About" />
          </div>
          <div className="about__info">
            <ParagraphText className="about__subtitle">
              Who are we
            </ParagraphText>
            <SectionTitle className="about__title">
            Democratize learning for everyone. 
            </SectionTitle>
            <ParagraphText className="about__desc">
            There’s nothing more important to us than our costumers. 
            At Polymath, we believe learning should be assessable and practical for everyone. 
            And it doesn’t have to be expensive. Polymath is the new way of pratcial learning.
            </ParagraphText>
            <PrimaryButton buttonType={Link} to="contact" smooth>
              Get In Touch
            </PrimaryButton>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br /><br /><br /><br /><br /><br /><br /><br />
        <div className="about__wrapper">
          <div className="about__info">
            <SectionTitle className="about__title">
            Problem-Solving Based Learning is the Key
            </SectionTitle>
            <ParagraphText className="about__desc">
            We understand that every human interaction is about solving problems. 
            It doesn’t matter whether it’s a daily conversation, business negotiation, or casual small talk during traveling. 
            Having set up a goal by identifying a problem, you can use the skills and knowledge you know more efficiently and effectively in your daily lives. 
            Our product lets you have the problem-solving skills that you nee
            </ParagraphText>
          </div>
          <div className="about__img">
             <img src='https://static.wixstatic.com/media/57245c_d3b6597be219478d80b63af75c64374f~mv2.png/v1/fill/w_460,h_460,al_c,q_85,usm_0.66_1.00_0.01/app%20web6-01.webp' alt="About" />
          </div>
        </div>
      </div>
    </AboutStyles>
  );
}

export default AboutSection;
