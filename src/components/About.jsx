import React from 'react';
import styled from 'styled-components';
import Stamps from '../components/Stamps';
import Bio from '../components/Bio';
import HobbySlider from '../components/HobbySlider';
import Title from '../components/Title';

const AboutWrapper = styled.div`
  /* margin: 50px 10px; */
  padding: 50px 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  background: white;
  width: 100%;
  .hobbies {
    position: relative;
    width: 100%;
    @media (min-width: 1000px) {
      min-width: 650px;
      max-width: 50%;
    }
  }
`

const AboutBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
  background: ${({ theme }) => theme.colors.boxColor};
  padding: 10px;
  box-shadow: 5px 5px 3px grey, -5px 5px 3px grey;
  @media screen and (min-width: 700px) {
    max-width: 70%;
  }
  @media only screen and (min-width: 1100px) {
    max-width: 50%;
  }
  H3 {
    margin-bottom: 20px;
  }
`

const TechnologyBox = styled(AboutBox)`
  width: 90%;
  background: ${({ theme }) => theme.colors.boxColor};
  background: 'yellow';
  @media only screen and (min-width: 43em) {
    width: 80%;
  }
  @media only screen and (min-width: 86em) {
    width: 70%;
  }
`
function About() {
  return (
    <AboutWrapper>
      <Title text={'About'} id="About-section" />
      {/* <AboutBox bio> */}
        {/* <h3>Bio</h3> */}
        <Bio />
      {/* </AboutBox> */}
      {/* <TechnologyBox> */}
        <h3>Technologies</h3>
        <Stamps />
      {/* </TechnologyBox> */}
      <AboutBox className="hobbies">
        <h3>What I Do</h3>
        <HobbySlider />
      </AboutBox>
      <div id="contact-section"></div>
    </AboutWrapper>
  )
}

export default About;