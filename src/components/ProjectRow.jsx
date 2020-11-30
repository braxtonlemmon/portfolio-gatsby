import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  margin: 15px 0;
  width: 95%;
  video {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Label = styled.h2`
  border: 1px solid black;
  background: grey;
`;

function ProjectRow({ card }) {
  return (
    <Wrapper>
      <p>{card.info.title}</p>
      <video autoPlay loop muted playsInline>
        <source src={`${card.img}.webm`} type="video/webm"></source>
        <source src={`${card.img}.mp4`} type="video/mp4"></source>
      </video>
      <Label>Description</Label>
      <p>{card.info.about}</p>
      <Label>Learned</Label>
      <p>what i learned</p>
      <Label>Technologies</Label>
      <p>{card.info.technologies.join(", ")}</p>
    </Wrapper>
  )
}

export default ProjectRow;