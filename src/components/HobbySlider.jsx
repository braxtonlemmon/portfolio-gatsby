import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Left from '../icons/caret-back-outline.svg';
import Right from '../icons/caret-forward-outline.svg';

const slide = keyframes`
  from {
    opacity: 0.3;
  }
  to {
    opacity: 0.9;
  }
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: 300px;
  margin: 15px;
  .image {
    animation-delay: 0.1s;
    animation: ${slide} 0.8s ;
    height: 100%;
    width: 100%;
    box-shadow: -2px 3px 2px grey;
  }
  @media (min-width: 1000px) {
    width: 600px;
    height: 400px;
  }
`;

const ButtonsBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 25px;
  .caret {
    height: 45px;
    width: 45px;
    fill: white;
    padding: 8px;
    background: ${({ theme }) => theme.colors.header};
    border-radius: 50%;
    margin: 0;
    transition: transform 0.2s linear;
    cursor: pointer;
    &:hover {
      transform: scale(1.05);
    }
  }
  .right-caret {
    padding-left: 11px;
    -webkit-tap-highlight-color: transparent;
    outline: none;
  }
  .left-caret {
    padding-right: 11px;
    -webkit-tap-highlight-color: transparent;
    outline: none;
  }
`;

function HobbySlider() {
  const [index, setIndex] = useState(0);

  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: "hobby_pics" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    `
  )

  const length = allFile.edges.length - 1;
  
  const handleNext = () => {
    index === length ? setIndex(0) : setIndex(index + 1)
  }
  
  const handlePrevious = () => {
    index === 0 ? setIndex(length) : setIndex(index - 1);
  }
  
  const { node } = allFile.edges[index];

  return (
    <ImgWrapper>
      <Img
        className="image"
        fluid={node.childImageSharp.fluid}
        key={node.id}
        alt={node.name.replace(/-/g, ' ').substring(2)}
      />
      <ButtonsBox>
        <Left 
          onClick={() => handlePrevious()}
          className="left-caret caret"
        />
        <Right 
          onClick={() => handleNext()}
          className="right-caret caret" 
        />
      </ButtonsBox>
    </ImgWrapper>
  )
}

export default HobbySlider;