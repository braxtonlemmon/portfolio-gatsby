import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  align-items: center;
  width: 100%;
  /* border: 1px solid red; */
`;

const Text = styled.h2`
  font-size: 2.8rem;
  font-weight: 600;
`;

const Line = styled.div`
  height: 2px;
  background: #474542;
`;

const ShortLine = styled(Line)`
  width: 77%;
`;

const LongLine = styled(Line)`
  width: 80%;
`;

const Lines = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const LinesLeft = styled(Lines)`
  align-items: flex-end;
`;

const LinesRight = styled(Lines)`

`;

function Title({ text }) {
  return (
    <Wrapper>
      <LinesLeft>
        <LongLine />
        <ShortLine />
      </LinesLeft>
      <Text>{text}</Text>
      <LinesRight>
        <LongLine />
        <ShortLine />
      </LinesRight>
    </Wrapper>
  )
}

export default Title;