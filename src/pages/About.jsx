import React, { useEffect } from "react"
import styled from "styled-components"
import { H2, H3 } from "../components/Headings"
import Stamps from "../components/Stamps"
import Bio from "../components/Bio"
import Hobbies from "../components/Hobbies"
import HobbySlider from '../components/HobbySlider';

import PageTransition from 'gatsby-plugin-page-transitions';

const AboutWrapper = styled.div`
  margin: 50px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  .hobbies {
    position: relative;
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



const About = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }, [])

  return (
    <PageTransition>
      <H2>About</H2>
      <AboutWrapper>
        <AboutBox bio>
          <H3>Bio</H3>
          <Bio />
        </AboutBox>
        <TechnologyBox>
          <H3>Technologies</H3>
          <Stamps />
        </TechnologyBox>
        <AboutBox className="hobbies">
          <H3>What I Do</H3>
          <HobbySlider />
          {/* <Hobbies /> */}
        </AboutBox>
      </AboutWrapper>
    </PageTransition>
  )
}

export default About
