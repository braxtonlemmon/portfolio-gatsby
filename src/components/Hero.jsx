import React from 'react';
import styled from 'styled-components';
import Crossword from './Crossword';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 30px;
  height: 100%;
  width: 100%;
  background: #fff;
  padding-top: 50px;
  #work-section {
    position: absolute;
    bottom: 60px;
  }
`;

function Hero() { 
  return (
    <Wrapper>
      <Crossword />
      <div id="work-section"></div>
    </Wrapper>
  )
}

export default Hero;