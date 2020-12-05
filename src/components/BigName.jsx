import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    font-size: 0em;
  }
  50% {
    opacity: 0;
    font-size: 6em;
  }
  100% {
    opacity: 1;
    font-size: 6em;
  }
`;

const Wrapper = styled.div`
  color: white;
  h1 {
    font-size: 0;
    text-align: right;
    animation: ${fadeIn} 4s cubic-bezier(.23,.09,.52,1.36) 2s forwards;
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