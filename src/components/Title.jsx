import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: ${props => props.theme.colors.lightergrey};
  color: ${props => props.theme.colors.ochre};
  padding: 30px 0;
  @media (min-width: 400px) {
    padding: 40px 0;
  }
  @media (min-width: 768px) {
    padding: 70px 0;
  }
  @media (min-width: 1200px) {
    padding: 80px 0;
  }
`;

const Text = styled.h2`
  font-size: ${props => props.theme.fontSize.two};
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 10px;
  font-family: 'Josefin Sans', sans-serif;
  @media (min-width: 400px) {
    font-size: ${props => props.theme.fontSize.three};
  }
  @media (min-width: 768px) {
    font-size: ${props => props.theme.fontSize.four};
  }
  @media (min-width: 1200px) {
    font-size: ${props => props.theme.fontSize.five};
  }
`;

function Title({ text }) {
  return (
    <Wrapper>
      <Text>{text}</Text>
    </Wrapper>
  )
}

export default Title;