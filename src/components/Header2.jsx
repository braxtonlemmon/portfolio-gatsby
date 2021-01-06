import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import  { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Link as ScrollLink } from 'react-scroll';
import Hamburger from './Hamburger';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

const LargeHeader = styled.header`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: #fff;
  @media (min-width: 550px) {
    justify-content: center;
    height: 120px;
  }
  @media (min-width: 768px) {
    height: 220px;
  }
  @media (min-width: 1100px) {
    height: 300px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  @media (min-width: 550px) {
    justify-content: center;
  }
  @media (min-width: 768px) {
    align-items: flex-end;
    padding: 0 20px;
  }
  @media (min-width: 1100px) {
    align-items: center;
  }
  #large-nav-links {
    @media (min-width: 768px) {
      font-size: 1.6em;
      gap: 20px;
    }
  }
`;

const BigName = styled.h1`
  font-size: 1.5em;
  text-align: center;
  @media (min-width: 400px) {
    font-size: 1.9em;
  }
  @media (min-width: 768px) {
    font-size: 3.3em;
  }
  @media (min-width: 1300px) {
    font-size: 5em;
  }
`;

const NavLinks = styled.nav`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-auto-flow: column;
  gap: 10px;
  margin: 20px 0;
  a {
    font-size: 1.2em;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;  

const BigLogo = styled.div`
  position: absolute;
  left: 30px;
  height: 100%;
  display: none;
  @media (min-width: 1100px) {
    display: block;
  }
`;

const SmallLogo = styled.div`
  height: 100%;
  display: block;
  margin: 0 10px 0 10px;
  @media (min-width: 550px) {
    position: absolute;
    left: 30px;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

const TabletLogo = styled.div`
  position: absolute;
  left: 30px;
  height: 100%;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
  @media (min-width: 1100px) {
    display: none;
  }
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
  height: 60px;
  padding-left: 15px;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 500;
  background: white;
  box-shadow: 0 2px 2px grey;
  opacity: 0.2;
  animation: ${fadeIn} 200ms forwards;
  h2 {
    font-size: 1.8em;
  }
  #small-navbar {
    display: none;
    @media (min-width: 680px) {
      display: grid;
      font-size: 1.5em;
      gap: 30px;
    }
  }
  @media (min-width: 680px) {
    justify-content: space-between;
    padding-right: 30px;
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
  z-index: 400;
  display: none;
  &:hover {
    transform: rotate(-10deg);
  }
  @media (min-width: 768px) {
    display: block;
  }
`;

const TinyCornerLogo = styled.div`
  position: fixed;
  bottom: 8px;
  right: 8px;
  opacity: 0.2;
  animation: ${cornerFadeIn} 200ms forwards;
  cursor: pointer;
  transition: transform 200ms ease;
  z-index: 400;
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;


const MobileMenuWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: none;
  z-index: 450;
  display: ${props => props.show ? 'flex' : 'none'};
  justify-content: flex-end;
`;

const MobileMenu = styled.div`
  width: 60%;
  height: 100%;
  background: white;
  padding-top: 90px;
  display: grid;
  grid-auto-flow: row;
  gap: 25px;
  font-size: 1.5em;
  padding-left: 20px;
  align-content: flex-start;
`;

function Header () {
  const [smallVisible, setSmallVisible] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [menu, setMenu] = useState();

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const theMenu = document.querySelector('#mobile-menu');
      setMenu(theMenu);
    }
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const largeHeader = document.getElementById('large-header');
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setSmallVisible(false);
          } else {
            setSmallVisible(true);
          }
        })
      });
      observer.observe(largeHeader);
      return () => observer.unobserver(largeHeader);
    }
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (showMenu) {
        disableBodyScroll(menu);
      } else {
        enableBodyScroll(menu)
      }
    }
    // return () => clearAllBodyScrollLocks()
  }, [showMenu])

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
        tablet: file(relativePath: { eq: "bl_logo_dev_square.png" }) {
          childImageSharp {
            fixed(height: 220) {
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
        tinyCorner: file(relativePath: { eq: "bl_logo_dev_square.png" }) {
          childImageSharp {
            fixed(height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )
  
  const handleHamburgerClick = () => {
    setShowMenu(prev => !prev);
  }

  const handleMenuButtonClick = () => {
    setShowMenu(false);
  }

  return (
    <>
      <LargeHeader id="large-header">
        <SmallLogo>
          <Img
            fixed={data.corner.childImageSharp.fixed}
            alt="logo"
          />
        </SmallLogo>
        <BigLogo>
          <Img
            id="big-logo"
            fixed={data.large.childImageSharp.fixed}
            alt="Large logo for Braxton Lemmon Development"
          />
        </BigLogo>
        <TabletLogo>
          <Img
            fixed={data.tablet.childImageSharp.fixed}
            alt="logo"
          />
        </TabletLogo>
        <Content>
          <BigName>Braxton Lemmon</BigName>
          <NavLinks id="large-nav-links">
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
        </Content>
      </LargeHeader>
      {
        smallVisible &&
        <SmallHeader>
          <h2>Braxton Lemmon</h2>
          <Hamburger onClick={handleHamburgerClick}>
            <div className="icon">
              <div className={showMenu ? "line1 view" : "line1"}></div>
              <div className={showMenu ? "line2 view" : "line2"}></div>
              <div className={showMenu ? "line3 view" : "line3"}></div>
            </div>
          </Hamburger>
          <NavLinks id="small-navbar">
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
        <>
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
          <TinyCornerLogo>
            <ScrollLink
              to={'large-header'}
              smooth={false}
            >
              <Img
                fixed={data.tinyCorner.childImageSharp.fixed}
                alt="logo"
              />
            </ScrollLink>

          </TinyCornerLogo>
        </>
      }
      <MobileMenuWrapper 
        id="mobile-menu" 
        show={showMenu}
        onClick={handleMenuButtonClick}  
      >
        <MobileMenu>
          <ScrollLink
            to={'work-section'}
            smooth={false}
            onClick={handleMenuButtonClick}
            >Work</ScrollLink>
          <ScrollLink
            to={'about-section'}
            smooth={false}
            onClick={handleMenuButtonClick}
          >About</ScrollLink>
          <ScrollLink
            to={'contact-section'}
            smooth={false}
            onClick={handleMenuButtonClick}
          >Contact</ScrollLink>
        </MobileMenu>
      </MobileMenuWrapper> 
    </>
  )
}

export default Header;