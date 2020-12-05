import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    font-size: 0em;
  }
  40% {
    opacity: 0;
    font-size: 7em;
  }
  100% {
    opacity: 1;
    font-size: 7em;
    font-weight: 400;
  }
`;

const Wrapper = styled.div`
  color: white;
  font-family: 'Nerko One', cursive;
  h1 {
    font-size: 0;
    text-align: right;
    animation: ${fadeIn} 3s cubic-bezier(.23,.09,.52,1.46) 2s forwards;
  }
`;

function BigName() {
  return (
    <Wrapper>
      <h1>Braxton</h1>
      <h1>Lemmon</h1>
    </Wrapper>
  )
}

export default BigName;