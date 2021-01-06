import React from 'react';
import styled from 'styled-components';
import Crossword from './Crossword';
import BigName from './BigName';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 30px;
  height: 100%;
  width: 100%;
  background: #fff;
  padding-top: 50px;
  #work-section {
    position: absolute;
    bottom: 60px;
  }
`;

function Hero() {
  const data = useStaticQuery(graphql`
    query BigLogo {
      file(relativePath: { eq: "bl_logo_dev_square.png" }) {
        childImageSharp {
          fixed(height: 500) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  
  return (
    <Wrapper>
      {/* <BigName /> */}
      {/* <Img
        fixed={data.file.childImageSharp.fixed}
        alt=""
      /> */}
      <Crossword />
      <div id="work-section"></div>
    </Wrapper>
  )
}

export default Hero;