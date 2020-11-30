import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0;
  padding: 15px;
  width: 95%;
  background: white;
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

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid red; */
  width: 100%;
  p {
    text-align: center;
  }
`;

const MobileTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 15px;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const LargeTitle = styled.h2`
  font-size: 1.5em;
  display: none;
  @media only screen and (min-width: 768px) {
    display: block;
  }
`;

const Title = styled.h2`
  font-size: 1.4em;
  margin-bottom: 15px;
`;

const Label = styled.h3`
  border: 1px solid black;
  background: black;
  color: white;
  margin: 15px 0 10px 0;
  padding: 3px;
`;

function ProjectRow({ card }) {
  return (
    <Wrapper>
      <MobileTitle>{card.info.title}</MobileTitle>
      <video autoPlay loop muted playsInline>
        <source src={`${card.img}.webm`} type="video/webm"></source>
        <source src={`${card.img}.mp4`} type="video/mp4"></source>
      </video>
      <TextSection>
        <LargeTitle>{card.info.title}</LargeTitle>
        <Label>Description</Label>
        <p>{card.info.about}</p>
        <Label>Learned</Label>
        <p>what i learned</p>
        <Label>Technologies</Label>
        <p>{card.info.technologies.join(", ")}</p>
      </TextSection>
    </Wrapper>
  )
}

export default ProjectRow;