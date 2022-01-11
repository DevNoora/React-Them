/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import PrimaryButton from "./buttons/PrimaryButton";
import ParagraphText from "./paragraphTexts/ParagraphText";
import HomeTitle from "./titles/HeroTitle";

const HomeSectionStyles = styled.div`
  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes img {
    0%,
    100% {
      transform: translateY(-20px);
    }
    50% {
      transform: translateY(10px);
    }
    30% {
      transform: translateX(10px);
    }
    20% {
      transform: translateX(20px);
    }
  }
  .effect-wrap .effect {
    position: absolute;
    z-index: -1;
  }
  .effect-wrap .effect-1 {
    left: 20%;
    top: 20%;
    font-size: 20px;
    color: #003171;
    animation: animate 5s linear infinite;
  }
  .home-image img {
    max-width: 340px;
    width: 100%;
    animation: img 5s ease infinite;
  }
  .home-image {
    margin-bottom: 30.2rem;
    position: relative;
    z-index: -1;
  }
  .home-image .circle {
    position: absolute;
    z-index: -1;
    width: 400px;
    height: 400px;
    border: 1px solid #003171;
    border-radius: 30%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .home-image .circle::before {
    content: "";
    position: absolute;
    z-index: 1;
    width: 60px;
    height: 60px;
    border: 1px solid #379af6;
    border-radius: 30%;
    top: 30px;
    left: 30px;
    transform-origin: 170px 170px;
    animation: animate 10s linear infinite;
  }
  min-height: 100vh;
  padding-top: calc(var(--header-height) + 30px); // height of header
  display: flex;
  align-items: center;
  justify-content: center;
  .home__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 1rem;
  }
  .home__info {
    margin-top: -25.2rem;
    flex: 3;
  }
  .home__img {
    flex: 4;
    img {
      object-fit: contain;
    }
  }
  .home__title {
     /* margin-top: -20.2rem; */
   /* max-width: 400px; */
  }
  .home__desc {
    /* margin-bottom: 20.5rem; */
    max-width: 300px;
  }
  @media only screen and (max-width: 768px) {
    .home__wrapper {
      flex-direction: column-reverse;
      gap: 0.5rem;
    }
    .home__img {
      display: flex;
      justify-content: flex-end;
      img {
        max-width: 400px;
        margin-top: auto;
      }
    }
  }
`;

function HomeSection() {
  return (
    <HomeSectionStyles id="home">
      <div className="container">
        <div className="home__wrapper">
          <div className="home__info">
            <HomeTitle className="home__title">
            
            </HomeTitle>
            <ParagraphText className="home__desc">
            
            </ParagraphText>
            <PrimaryButton
              buttonType={Link}
              smooth
              to="contact"
              className="home__cta"
            >
              Get In Touch
            </PrimaryButton>
          </div>
          <div class="col-lg-5 col-md-5 text-center">
            <div class="home-image">
              <div class="circle"></div>
            </div>
          </div>
        </div>
      </div>
    </HomeSectionStyles>
  );
}

export default HomeSection;
