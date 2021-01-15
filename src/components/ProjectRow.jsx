import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0;
  margin: 0;
  padding: 15px;
  padding: 30px 0px;
  width: 95%;
  width: 100%;
  width: 85%;
  font-size: ${props => props.theme.fontSize.one};
  /* background: ${props => props.theme.colors.boxColor};
  background: ${props => props.index % 2 === 0 ? 'white' : props.theme.colors.boxColor}; */
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    /* align-items: center; */
  }
`;

const VideoSection = styled.div`
  position: relative;
  video {
    width: 300px;
    height: 400px;
    object-fit: cover;
    border: 2px solid #ded5c8;
    @media (min-width: 1200px) {
      width: 500px;
    }
  }
  #small-video {
    display: block;
    @media (min-width: 1200px) {
      display: none;
    }
  }
  #large-video {
    display: none;
    @media (min-width: 1200px) {
      display: block;
    }
  }
`

const Buttons = styled.div`
  /* display: grid;
  grid-auto-flow: column;
  gap: 30px;
  grid-row: 2 / span 1; */
  /* margin: 0 auto 20px auto; */
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  /* position: absolute;
  bottom: 0;
  left: 0; */
  /* width: 100%; */
  /* justify-content: center; */

`

const Button = styled.a`
  /* border-radius: 5px; */
  border: 1px solid #474542;
  height: 45px;
  /* width: 200px; */
  /* background: red; */
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
  text-align: center;
  /* margin-right: 20px; */
  &:hover {
    background: ${props => props.theme.colors.text};
    color: white;
  }
`
const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid red; */
  width: 100%;
  .project-description {
    margin-bottom: 20px;
  }
  @media only screen and (min-width: 768px) {
    align-items: flex-start;
    margin-left: 80px;
  }
`;

const MobileTitle = styled.h2`
  font-size: ${props => props.theme.fontSize.two};
  font-weight: 400;
  margin-bottom: 15px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 6px;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const LargeTitle = styled.h2`
  display: none;
  text-align: center;
  text-transform: uppercase;
  @media only screen and (min-width: 768px) {
    display: block;
    font-size: ${props => props.theme.fontSize.four};
    line-height: 1em;
    letter-spacing: 6px;
    font-weight: 500;
    margin-bottom: 40px;
    /* margin: 0 auto; */
    /* text-decoration: underline; */
  }
`;

const Label = styled.h3`
  /* border: 1px solid black; */
  /* background: black; */
  /* color: white; */
  color: ${props => props.theme.colors.ochre};
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 15px 0 10px 0;
  margin: 5px 0;
  font-size: ${props => props.theme.fontSize.two};
  font-weight: 400;
  /* padding: 3px; */
`;

const Learned = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  /* margin-top: 15px; */
  /* margin: 5px; */
`;

const LearnedItem = styled.li`
  .learned-title {
    margin: 0;
    padding: 0;
    font-size: ${props => props.theme.fontSize.one};
    text-transform: uppercase;
    color: ${props => props.theme.colors.dark};
    letter-spacing: 2px;
  }
  .learned-content {
    margin: 0;
    padding: 0;
  }
  margin-bottom: 18px;
`;

const Line = styled.div`
  width: 95%;
  height: 2px;
  border-radius: 3px;
  background: ${props => props.theme.colors.lightergrey};
  margin: 22px auto;
`;

function ProjectRow({ card, index }) {
  return (
    <>
    <Wrapper index={index}>
      <MobileTitle>{card.info.title}</MobileTitle>
      <VideoSection>
        <LargeTitle>{card.info.title}</LargeTitle>
        <a href={card.live} target="_blank" rel="noopener noreferrer">
          <div id="small-video">
            <video autoPlay loop muted playsInline>
              <source src={`${card.vid_small}.webm`} type="video/webm"></source>
              <source src={`${card.vid_small}.mp4`} type="video/mp4"></source>
            </video>
          </div>
        </a>
        <a href={card.live} target="_blank" rel="noopener noreferrer">
          <div id="large-video">
             <video autoPlay loop muted playsInline>
              <source src={`${card.vid_large}.webm`} type="video/webm"></source>
              <source src={`${card.vid_large}.mp4`} type="video/mp4"></source>
            </video>
          </div>
        </a>
      </VideoSection>
      <TextSection>
        <Label>Description</Label>
        <p className="project-description">{card.info.about}</p>
        <Label>Learned / Practiced</Label>
        <Learned>
          {card.info.learned.map(lesson => {
            return (
              <LearnedItem>
                <span className="learned-title">{lesson[0]} | </span>
                <span className="learned-content">{lesson[1]}</span>
              </LearnedItem>
            )
          })}
        </Learned>
        <Label>Technologies</Label>
        <p>{card.info.technologies.join(", ")}</p>
        <Buttons>
          {
            card.more_github ?
            card.more_github.map(item => {
              return (
                <Button href={item[1]} target="_blank" rel="noreferrer">{item[0]}</Button>
              )
            })
            : <Button href={card.github} target="_blank" rel="noreferrer">GITHUB</Button>
          }
          {/* <Button href={card.github} target="_blank" rel="noreferrer">
            GITHUB
          </Button> */}
          <Button href={card.live} target="_blank" rel="noreferrer">
            LIVE
          </Button>
        </Buttons>
      </TextSection>
    </Wrapper>
    {
      card.last ?
      null : 
      <Line />
    }
      
    </>
  )
}

export default ProjectRow;