import React from "react";
import { useViewport } from './ViewportProvider';
import { H1 } from "./Headings";
import styled from "styled-components";
import NavButton from "./NavButton";
import { Link , useStaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';
import { Link as ScrollLink } from 'react-scroll';

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderTop = styled.div`
  background: ${({ theme }) => theme.colors.header};
  width: 100%;
  position: relative;
  display: grid;
  justify-content: baseline;
  grid-auto-flow: column;
  align-items: center;
  padding: 0 50px;
`;

const LargeLemon = styled.div`
  height: 200px;
  width: 200px;
  /* margin: 0 auto; */
  .large-lemon {
    height: 100%;
  }
`;

const HeaderBar = styled.header`
  font-family: 'Open Sans', sans-serif;
  width: 100%;
  position: relative;
  position: sticky; 
  top: 0;
  /* margin-bottom: 15px; */
  padding: 5px 10px;
  background: ${({ theme }) => theme.colors.header};
  display: grid;
  display: flex;
  align-items: center;
  justify-content: space-around;
  grid-template-columns: 80px 1fr;
  z-index: 88;
  color: black;
  /* box-shadow: 0 2px 2px grey; */

  @media only screen and (min-width: 768px) {
    /* position: fixed; */
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
    -webkit-tap-highlight-color: transparent;
    outline: none;
    height: 80px;
    &:hover {
      transform: rotate(360deg);
  }
  }
`

const MyName = styled(H1)`
  color: #003215;
  margin-left: 30px;
  @media (min-width: 465px) {
    font-size: 2.8em;
  }
  @media (min-width: 768px) {
    font-size: 2.2em;
  }
  @media (min-width: 1000px) {
    font-size: 5em;
  }

  /* &:hover {
    color: #e3ca11;
  } */
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
        small: file(relativePath: { eq: "bl_logo_dev_square.png" }) {
          childImageSharp {
            fixed(height: 70) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        large: file(relativePath: { eq: "bl_logo_dev_square.png" }) {
          childImageSharp {
            fixed(height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }

      }
    `
  )


      console.log(data);
  return (
    <>
    {/* <HeaderTop>
      <LargeLemon>
        <Img
          fluid={data.file.childImageSharp.fluid}
          className="large-lemon"
          alt="logo"
        />
      </LargeLemon>
    </HeaderTop> */}
    <HeaderTop>
      <Img
        fixed={data.large.childImageSharp.fixed}
        alt=""
      />
      <MyName>Braxton Lemmon</MyName>
    </HeaderTop>
    <HeaderBar>
      {/* <Link to="/">
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="spinning lemon"
          className="lemon"
        />
      </Link>
    */}
      {/* <Link to="/Resume" className="name-link">
      </Link>  */}
      {/* <Left>
        <Img
          fixed={data.small.childImageSharp.fixed}
          alt=""
          id="small-logo"
        />
        <MyName>Braxton Lemmon</MyName>

      </Left> */}
      { width >= breakpoint && 
        <TopNav>
          <Link to="/">
            <NavButton top>Home</NavButton>
          </Link>
          <ScrollLink
            to={"work-section"}
            smooth={false}
          >
            <NavButton top>Work</NavButton>
          </ScrollLink>
          <ScrollLink
            to={"about-section"}
            smooth={false}
          >
            <NavButton top>About</NavButton>
          </ScrollLink>
          <ScrollLink
            to={"contact-section"}
            smooth={false}
          >
            <NavButton top>Contact</NavButton>
          </ScrollLink>
          {/* <Link to="/Music">
            <NavButton top>Music</NavButton>
          </Link> */}
          {/* <Link to="/About">
            <NavButton top>About</NavButton>
          </Link> */}
          {/* <Link to="/Contact">
            <NavButton top>Contact</NavButton>
          </Link> */}
        </TopNav>
      }
    </HeaderBar>
    </>
  )
}

export default Header
