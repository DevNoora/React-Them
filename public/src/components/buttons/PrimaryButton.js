import React from 'react';
import styled from 'styled-components';

const ButtonsStyles = styled.a`
	height: auto;
	margin: auto;
	display: flex;
  flex-wrap: wrap;
  border-radius: 10px;
  border-top: 2px solid #379af6!important;
  border-left: 2px solid #421969!important;
  border-right: 2px solid #309bff!important;
  border-bottom: 2px solid #421969!important;
  box-shadow: 0px 0px 10px 0px rgba(121, 3, 121, 0.19);
  backdrop-filter: blur(3px);
  display: inline-block;
  background: var(--mediumSlateBlue);
  padding: 1.5rem 2rem;
  color: var(--white);
  font-size: 1.6rem;
  text-transform: capitalize;
  font-weight: 500;
  &:hover {
    box-shadow: 0px 4px 15px rgba(255, 255, 255, 0.2);
    background-color: #8080803b;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
    padding: 1.2rem 1.5rem;
  }
`;

function PrimaryButton({ children, buttonType, ...rest }) {
  return (
    <>
      <ButtonsStyles as={buttonType} {...rest}>
        {children}
      </ButtonsStyles>
    </>
  );
}

export default PrimaryButton;
