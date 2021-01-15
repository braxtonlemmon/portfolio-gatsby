import React, { useEffect } from "react"
import styled from "styled-components"
import ProjectRow from "../components/ProjectRow";
import CARDS from "../data/CARDS.js"
import SEO from '../components/seo';
import Hero from '../components/Hero';
import Work from '../components/Work';
import About from '../components/About';
import Contact from '../components/Contact';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #474542;
  background: #fff;
`

const Home = () => {
  const projects = []
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
