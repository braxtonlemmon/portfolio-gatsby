import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0;
  margin: 0;
  padding: 15px;
  padding: 30px 15px;
  width: 95%;
  width: 100%;
  background: ${props => props.theme.colors.boxColor};
  background: ${props => props.index % 2 === 0 ? 'white' : props.theme.colors.boxColor};
  video {
    width: 230px;
    height: 300px;
    object-fit: cover;
    border: 2px solid black;
  }
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const VideoSection = styled.div`
  position: relative;
`

const Buttons = styled.div`
  /* display: grid;
  grid-auto-flow: column;
  gap: 30px;
  grid-row: 2 / span 1; */
  /* margin: 0 auto 20px auto; */
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
  /* position: absolute;
  bottom: 0;
  left: 0; */
  /* width: 100%; */
  /* justify-content: center; */

`

const Button = styled.a`
  border-radius: 5px;
  border: 2px solid black;
  height: 35px;
  width: 85px;
  background: red;
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
  /* margin-right: 20px; */
  &:hover {
    background: pink;
  }
`
const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid red; */
  width: 100%;
  p {
    /* text-align: center; */
  }
  @media only screen and (min-width: 768px) {
    align-items: flex-start;
    margin-left: 80px;
  }
`;

const MobileTitle = styled.h2`
  font-size: 1.5em;
  font-weight: 600;
  margin-bottom: 15px;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const LargeTitle = styled.h2`
  display: none;
  @media only screen and (min-width: 768px) {
    display: block;
    font-size: 1.5em;
    font-weight: 500;
  }
`;

const Title = styled.h2`
  font-size: 1.4em;
  margin-bottom: 15px;
  font-weight: bold;
`;

const Label = styled.h3`
  border: 1px solid black;
  background: black;
  color: white;
  margin: 15px 0 10px 0;
  padding: 3px;
`;

function ProjectRow({ card, index }) {
  return (
    <Wrapper index={index}>
      <MobileTitle>{card.info.title}</MobileTitle>
      <VideoSection>
        <video autoPlay loop muted playsInline>
          <source src={`${card.img}.webm`} type="video/webm"></source>
          <source src={`${card.img}.mp4`} type="video/mp4"></source>
        </video>
        {/* <Buttons>
          <Button href={card.github} target="_blank" rel="noreferrer">
            GITHUB
          </Button>
          <Button href={card.live} target="_blank" rel="noreferrer">
            LIVE
          </Button>
        </Buttons> */}
      </VideoSection>
      <TextSection>
        <LargeTitle>{card.info.title}</LargeTitle>
        <Label>Description</Label>
        <p>{card.info.about}</p>
        <Label>Learned</Label>
        <p>what i learned</p>
        <Label>Technologies</Label>
        <p>{card.info.technologies.join(", ")}</p>
        <Buttons>
          <Button href={card.github} target="_blank" rel="noreferrer">
            GITHUB
          </Button>
          <Button href={card.live} target="_blank" rel="noreferrer">
            LIVE
          </Button>
        </Buttons>

      </TextSection>
    </Wrapper>
  )
}

export default ProjectRow;