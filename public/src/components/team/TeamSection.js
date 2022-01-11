import React from 'react';
import styled from 'styled-components';
import ParagraphText from '../paragraphTexts/ParagraphText';
import SectionTitle from '../titles/SectionTitle';
import TeamMemberItem from './TeamMemberItem';
// team member images
// import teamMember1 from '../../assets/images/team1.png';
// import teamMember2 from '../../assets/images/team2.png';
// import teamMember3 from '../../assets/images/team3.png';

const TeamSectionStyles = styled.div`

.testimonials {
    /* background: url(https://marketingplanetcom.files.wordpress.com/2018/09/gps.jpg) no-repeat 0px -94px; */
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    -ms-background-size: cover;
    height: 31vw;
}

.testimonials_grid-inn i {
    font-size: 3em;
}

.testimonials_grid {
    text-align: center;
    position: relative;
}

.testimonials_grid img {
    margin: 0 auto;
}

.testimonials_grid {
    text-align: center;
}

.testimonials_grid h3 {
    margin: 1em 0 0em 0;
    color: #333;
    font-size: 0.9em;
    text-transform: uppercase;
}

.testimonials_grid h3 span {
    font-weight: 100;
    font-size: 0.8em;
    color: #999
}

.testimonials_grid label {
    font-size: 0.7em;
    letter-spacing: 1px;
    color: #037ef3;
    text-transform: uppercase;
}

.testimonials_grid p {
    width: 70%;
    margin: 1em auto 0;
    line-height: 2em;
    letter-spacing: 1px;
}

.testimonials_grid img {
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -o-border-radius: 50%;
    -ms-border-radius: 50%;
    border: 5px solid hsla(210, 7%, 6%, 0.13);
    margin-bottom: 1em;
}

.testimonials_grid {
    margin: 1em auto 0;
    width: 80%;
}

div#carouselExampleControls .carousel-item {
    background: none;
    height: auto;
}

a.carousel-control-next.test,
a.carousel-control-prev.test {
    color: #0e0f10;
    text-align: center;
    opacity: 0.9;
    font-size: 1em;
    width: 32px;
    height: 32px;
    border: 1px solid #ddd;
    margin-top: 7em;
    border-top: 2px solid #379af6!important;
    border-left: 2px solid #421969!important;
    border-right: 2px solid #309bff!important;
    border-bottom: 2px solid #421969!important;
    box-shadow: 0px 4px 15px rgba(255, 255, 255, 0.2);
    border-radius: 2rem;
}

.testimonials_grid-inn img {
    width: 15%;
}




  padding: 10rem 0;
  .team__wrapper {
    display: flex;
    gap: 1rem;
  }
  .team__info {
    max-width: 250px;
  }
  .team__subtitle {
    margin-bottom: 1rem;
    font-weight: 600;
    color: var(--mediumSlateBlue);
    text-transform: capitalize;
  }
  .team__members {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 5rem;
  }
  @media only screen and (max-width: 790px) {
    .team__wrapper {
      flex-direction: column;
      text-align: center;
      gap: 3rem;
    }
    .team__info {
      margin: 0 auto;
    }
    .team__members {
      flex-wrap: wrap;
      gap: 2rem;
    }
  }
`;

function TeamSection() {
  return (
    <TeamSectionStyles>
      <div className="container">
        <div className="team__wrapper">
          <div className="team__info">
            <ParagraphText className="team__subtitle">
              Team Members
            </ParagraphText>
            <SectionTitle className="team__title">
              The best team available
            </SectionTitle>
          </div>
          <div className="team__members">
            <TeamMemberItem
              // img={teamMember1}
              name=""
              title=""
            />
            <TeamMemberItem
              // img={teamMember2}
              name=""
              title=""
            />
            <TeamMemberItem
              // img={teamMember3}
              name=""
              title=""
            />
          </div>
        </div>
      </div>
    </TeamSectionStyles>
  );
}

export default TeamSection;
