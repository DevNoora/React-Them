import React from 'react';
import styled from 'styled-components';

const LogoStyles = styled.div`
  max-width: 100px;
  font-size: 2rem;
    font-weight: 500;
    line-height: 1.5em;
    text-transform: capitalize;
    margin-bottom: 1rem;
    color: #b700ff;
`;

export default function Logo({ ...rest }) {
  return (
    <LogoStyles {...rest}>
     <div>
       Polymath
     </div>
    </LogoStyles>
  );
}
