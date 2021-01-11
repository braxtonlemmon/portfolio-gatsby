import React, { useEffect } from "react"
import styled from "styled-components"
import Project from "../components/Project"
import ProjectRow from "../components/ProjectRow";
import CARDS from "../data/CARDS.js"
import { H2 } from "../components/Headings"
import Crossword from "../components/Crossword"
import SEO from '../components/seo';
import Title from '../components/Title';
import Hero from '../components/Hero';
import Work from '../components/Work';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #474542;
  background: #fff;
`

const Projects = styled.div`
  margin: 12px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
      <Wrapper>
        <Hero />
        <Work/>
        <About/>
        <Contact />
      </Wrapper>
    </>
  )
}

export default Home
