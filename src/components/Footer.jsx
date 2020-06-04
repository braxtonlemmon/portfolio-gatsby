import React from "react";
import styled from "styled-components";
import NavButton from "./NavButton";
import { Link } from "gatsby";

const Nav = styled.footer`
  display: grid;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  gap: 2px;
  background: black;
  padding: 2px 0;
  /* border-right: 1px solid black;
  border-left: 1px solid black; */
  z-index: 80;
`

const Footer = () => {
  return (
    <Nav>
      <Link to="/">
        <NavButton>Home</NavButton>
      </Link>
      <Link to="/Music">
        <NavButton>Music</NavButton>
      </Link>
      <Link to="/About">
        <NavButton>About</NavButton>
      </Link>
      <Link to="/Contact">
        <NavButton>Contact</NavButton>
      </Link>
    </Nav>
  )
}

export default Footer
