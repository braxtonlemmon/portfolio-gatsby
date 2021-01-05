import React from 'react';
import styled from 'styled-components';
import Crossword from './Crossword';
import BigName from './BigName';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 30px;
  height: 100%;
  width: 100%;
  #work-section {
    position: absolute;
    bottom: 60px;
  }
`;

function Hero() {
  return (
    <Wrapper>
      <BigName />
      <Crossword />
      <div id="work-section"></div>
    </Wrapper>
  )
}

export default Hero;