import React from 'react';
import styled from 'styled-components';

const LogoStyles = styled.div`
  max-width: 100px;
  font-size: 2rem;
    font-weight: 500;
    line-height: 1.5em;
    text-transform: capitalize;
    margin-bottom: 1rem;
    color: #003171;
`;

export default function Logo({ ...rest }) {
  return (
    <LogoStyles {...rest}>
     <div>
       LOGO
     </div>
    </LogoStyles>
  );
}
