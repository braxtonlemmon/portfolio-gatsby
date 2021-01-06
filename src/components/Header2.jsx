import React from 'react';
import styled from 'styled-components';
import  { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Link as ScrollLink } from 'react-scroll';

const LargeHeader = styled.header`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  background: #fff;
`;

const BigName = styled.h1`
  font-size: 5em;
  text-align: center;
`;

const NavLinks = styled.nav`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-auto-flow: column;
  gap: 20px;
  margin: 20px 0;
  a {
    font-size: 2em;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;  

const BigLogo = styled.div`
  position: absolute;
  left: 20px;
  height: 100%;
`;

function Header () {
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
            fixed(height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )
  
  return (
    <LargeHeader>
      <BigLogo>
        <Img
          id="big-logo"
          fixed={data.large.childImageSharp.fixed}
          alt="Large logo for Braxton Lemmon Development"
        />
      </BigLogo>
      <BigName>Braxton Lemmon</BigName>
      <NavLinks>
        <ScrollLink
          to={'work-section'}
          smooth={false}
        >Work</ScrollLink>
        <ScrollLink
          to={'about-section'}
          smooth={false}
        >About</ScrollLink>
        <ScrollLink
          to={'contact-section'}
          smooth={false}
        >Contact</ScrollLink>
      </NavLinks>
    </LargeHeader>
  )
}

export default Header;