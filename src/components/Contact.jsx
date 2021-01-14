import React from 'react';
import styled from 'styled-components';
import { H2 } from "../components/Headings"
import { FiMail } from "react-icons/fi"
import {
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaSoundcloud,
  FaFacebookMessenger,
} from "react-icons/fa"
import { Link } from "gatsby"
import Title from '../components/Title';

const Icon = styled.a`
  text-decoration: none;
  color: #3c3c3c;
  margin: 5px;
  &:hover {
    color: blue;
  }
  &:focus {
    color: #464646;
  }
`

const SiteLink = styled.a`
  color: ${props => props.theme.colors.linkColor};
  text-decoration: none;
  margin: 5px;
  color: #0707c6;
  &:hover {
    color: ${props => props.theme.colors.sandstone};
  }
`
const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${props => props.theme.fontSize.one};
  padding: 50px 0px;
  width: 100%;
  background: white;
  @media only screen and (min-width: 26em) {
    font-size: 1.4rem;
  }
  .resume {
    margin-right: 10px;
    color: #464646;
    font-weight: 600;
  }
  .view {
    padding-right: 10px;
    border-right: 2px solid #464646;
  }
  a {
    text-decoration: none;
    &:hover {
      color: ${props => props.theme.colors.lightgrey};
    }
  }
  #contact-section-one {
    margin-top: 50px;
  }
`
const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  padding: 10px;
  h3 {
    color: ${props => props.theme.colors.ochre};
    letter-spacing: 2px;
    text-transform: uppercase;
    margin: 15px 0 10px 0;
    margin: 5px 0 15px 0;
    font-size: ${props => props.theme.fontSize.two};
    font-weight: 400;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #social-media > * {
    margin: 0 7px;
    @media (min-width: 768px) {
      margin: 0 15px;
    }
  }

  /* a {
   color: #3c3c3c;
  } */
`

function Contact() {
  const size = "2em";

  return (
    <ContactWrapper>
      <Title text={'Contact'} id="Contact" />
        <ContactSection id="contact-section-one">
          <h3>Email</h3>
          <Icon href="mailto:braxtonlemmon@gmail.com" target="_blank">
            <FiMail size={size} />
          </Icon>
          <SiteLink href="mailto:braxtonlemmon@gmail.com" target="_blank">
            braxtonlemmon@gmail.com
          </SiteLink>
        </ContactSection>
        <ContactSection>
          <h3>Resume</h3>
          <div>
            <Link to="/Resume" className="view">
              <p>View</p>
            </Link>
            <SiteLink
              href={`${process.env.PUBLIC_URL}/braxton_lemmon_resume.pdf`}
              download
            >
              <p>Download</p>
            </SiteLink>
          </div>
        </ContactSection>
        <ContactSection>
          <h3>Other</h3>
          <div id="social-media">
            <Icon href="https://m.me/braxton.lemmon" target="_blank">
              <FaFacebookMessenger size={size} />
            </Icon>
            <Icon href="https://twitter.com/braxtonlemmon" target="_blank">
              <FaTwitter size={size} />
            </Icon>
            <Icon href="https://linkedin.com/in/braxtonlemmon/" target="_blank">
              <FaLinkedinIn size={size} />
            </Icon>
            <Icon href="https://github.com/braxtonlemmon" target="_blank">
              <FaGithub size={size} />
            </Icon>
            <Icon href="https://soundcloud.com/expiredmomentum" target="_blank">
              <FaSoundcloud size={size} />
            </Icon>
          </div>
        </ContactSection>
    </ContactWrapper>

  )
}

export default Contact;