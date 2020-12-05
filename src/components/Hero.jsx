import React from 'react';
import styled from 'styled-components';
import Crossword from './Crossword';
import BigName from './BigName';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 30px;
  height: 100%;
  width: 100%;
`;

function Hero() {
  return (
    <Wrapper>
      <BigName />
      <Crossword />
    </Wrapper>
  )
}

export default Hero;