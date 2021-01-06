import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
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
  height: 300px;
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
  left: 40px;
  height: 100%;
`;

const fadeIn = keyframes`
  from {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
`;

const SmallHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 500;
  background: white;
  box-shadow: 0 2px 2px grey;
  opacity: 0.2;
  animation: ${fadeIn} 200ms forwards;
  h2 {
    font-size: 2em;
  }
`;

const cornerFadeIn = keyframes`
  from {
    opacity: 0.2;
  }
  to {
    opacity: 0.8;
  }
`;

const CornerLogo = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  opacity: 0.2;
  animation: ${cornerFadeIn} 200ms forwards;
  cursor: pointer;
  transition: transform 200ms ease;
  &:hover {
    transform: rotate(-10deg);
  }
`;

function Header () {
  const [smallVisible, setSmallVisible] = useState(false);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const largeHeader = document.getElementById('large-header');
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          entry.isIntersecting ? setSmallVisible(false) : setSmallVisible(true);
        })
      });
      observer.observe(largeHeader);
      return () => observer.unobserver(largeHeader);
    }
  }, []);

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
            fixed(height: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        corner: file(relativePath: { eq: "bl_logo_dev_square.png" }) {
          childImageSharp {
            fixed(height: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )
  
  return (
    <>
      <LargeHeader id="large-header">
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
      {
        smallVisible &&
        <SmallHeader>
          <h2>Braxton Lemmon</h2>
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
        </SmallHeader>
      }
      {
        smallVisible &&
        <CornerLogo>
          <ScrollLink
            to={'large-header'}
            smooth={false}
          >
            <Img
              fixed={data.corner.childImageSharp.fixed}
              alt="logo"
            />
          </ScrollLink>
        </CornerLogo>
      }
    </>
  )
}

export default Header;