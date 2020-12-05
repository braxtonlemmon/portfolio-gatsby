import React, { useEffect } from "react"
import styled from "styled-components"
import Project from "../components/Project"
import ProjectRow from "../components/ProjectRow";
import CARDS from "../data/CARDS.js"
import { H2 } from "../components/Headings"
import Crossword from "../components/Crossword"
import PageTransition from 'gatsby-plugin-page-transitions';
import SEO from '../components/seo';
import Title from '../components/Title';
import Hero from '../components/Hero';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #474542;
  background: #474542;
`

const Projects = styled.div`
  margin: 12px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

// const Work = styled.div`
//   width: 85%;
//   padding: 15px 0;
//   background: ${props => props.theme.colors.boxColor};
//   background: white;
//   box-shadow: 5px 5px 3px grey, -5px 5px 3px grey;
//   z-index: 1;
//   margin-bottom: 20px;
//   @media only screen and (min-width: 43em) {
//     width: 90%;
//   }
//   @media only screen and (min-width: 64em) {
//     width: 80%;
//   }
//   @media only screen and (min-width: 86em) {
//     width: 75%;
//   }
// `
const Work = styled.div`
  width: 100%;
  padding: 15px 0;
  background: ${props => props.theme.colors.boxColor};
  background: white;
  background: #f4ebdd;
  /* box-shadow: 5px 5px 3px grey, -5px 5px 3px grey; */
  z-index: 1;
  margin-bottom: 20px;
  /* @media only screen and (min-width: 43em) {
    width: 90%;
  }
  @media only screen and (min-width: 64em) {
    width: 80%;
  }
  @media only screen and (min-width: 86em) {
    width: 75%;
  } */
`

const Home = () => {
  const projects = []
  // CARDS.forEach(card => projects.push(<Project card={card} key={card.id} />))
  CARDS.reverse().forEach((card, index) => projects.push(<ProjectRow card={card} key={card.id} index={index} />))

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }, [])

  return (
    <>
      <SEO title="Home" />
      <PageTransition>
        <Wrapper>
          <div>
          <Hero />
          {/* <Crossword /> */}
          </div>
          <Work>
            <Title text={'Work'} />
            {/* <H2>Work</H2> */}
            <Projects>{projects}</Projects>
          </Work>
          <Title text={'About'} id="About" />
          <Title text={'Contact'} id="Contact" />
        </Wrapper>
      </PageTransition>
    </>
  )
}

export default Home
