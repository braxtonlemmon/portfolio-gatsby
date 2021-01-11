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
  .about-title {
    font-size: 1.5em;
    margin-bottom: 10px;
  }
`

const AboutBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
  background: none;
  padding: 10px;
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
        <Bio />
        <h3 className="about-title">Technologies I Use...</h3>
        <Stamps />
        <AboutBox className="hobbies">
          <h3 className="about-title">If I'm not coding...</h3>
          <HobbySlider />
        </AboutBox>
      <div id="contact-section"></div>
    </AboutWrapper>
  )
}

export default About;