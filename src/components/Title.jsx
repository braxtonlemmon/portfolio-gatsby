import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  /* gap: 15px; */
  align-items: center;
  /* width: 100%; */
  width: 100%;
  background: ${props => props.theme.colors.lightergrey};
  color: ${props => props.theme.colors.ochre};
  padding: 80px 0;
`;

const Text = styled.h2`
  font-size: ${props => props.theme.fontSize.five};
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 10px;
  font-family: 'Josefin Sans', sans-serif;
`;

const Line = styled.div`
  height: 2px;
  background: #474542;
  background: white;
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
      {/* <LinesLeft>
        <LongLine />
        <ShortLine />
      </LinesLeft> */}
      <Text>{text}</Text>
      {/* <LinesRight>
        <LongLine />
        <ShortLine />
      </LinesRight> */}
    </Wrapper>
  )
}

export default Title;