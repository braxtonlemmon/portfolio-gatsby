import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: white;
  h1 {
    font-size: 6em;
    text-align: right;
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