import React from "react";
import { useViewport } from './ViewportProvider';
import { H1 } from "./Headings";
import styled from "styled-components";
import NavButton from "./NavButton";
import { Link , useStaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';

const HeaderBar = styled.header`
  font-family: 'Open Sans', sans-serif;
  width: 100%;
  position: relative;
  margin-bottom: 15px;
  padding: 10px;
  background: ${({ theme }) => theme.colors.header};
  display: grid;
  align-items: center;
  grid-template-columns: 80px 1fr;
  z-index: 88;
  color: white;
  box-shadow: 0 2px 2px grey;

  @media only screen and (min-width: 768px) {
    position: fixed;
    grid-template-columns: 120px 1fr 1fr;
  }
  a {
    text-decoration: none;
    outline: none;
  }
  .name-link {
    justify-self: center;
    @media (min-width: 768px) {
      justify-self: left;
    }
  }

  .lemon {
    transition: transform 1s ease-in-out;
    &:hover {
      transform: rotate(360deg);
  }
  }
`

const MyName = styled(H1)`
  color: white;
  @media (min-width: 465px) {
    font-size: 2.8em;
  }
  @media (min-width: 768px) {
    font-size: 2.2em;
  }
  @media (min-width: 1000px) {
    font-size: 2.8em;
  }

  &:hover {
    color: #e3ca11;
  }
`

const TopNav = styled.div`
  display: flex;
  justify-content: center;
`

const Header = (props) => {
  const { width } = useViewport();
  const breakpoint = 768;


  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "lemon.png" }) {
          childImageSharp {
            fixed(height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return (
    <HeaderBar>
      <Link to="/">
        {/* <Lemon src={lemon} alt="spinning lemon"/> */}
        <Img
          fixed={data.file.childImageSharp.fixed}
          alt="spinning lemon"
          className="lemon"
        />
      </Link>
      <Link to="/Resume" className="name-link">
        <MyName>Braxton Lemmon</MyName>
      </Link>
      { width >= breakpoint && 
        <TopNav>
          <Link to="/">
            <NavButton top>Home</NavButton>
          </Link>
          <Link to="/Music">
            <NavButton top>Music</NavButton>
          </Link>
          <Link to="/About">
            <NavButton top>About</NavButton>
          </Link>
          <Link to="/Contact">
            <NavButton top>Contact</NavButton>
          </Link>
        </TopNav>
      }
    </HeaderBar>
  )
}

export default Header
