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
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  box-shadow: 0 0 5px rgba(0,0,0,0.3);
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
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const CaretBox = styled.div`
  height: 100%;
  cursor: pointer;
  width: 35%;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  &:hover {
    .caret {
      transform: scale(1.07);
    }
  }
  .caret {
    height: 100px;
    /* border: 1px solid white; */
    width: 100px;
    position: absolute;
    fill: rgba(255,255,255,0.7);
    background: ${({ theme }) => theme.colors.header};
    background: rgba(0,0,0,0.4);
    background: none;
    margin: 0;
    transition: transform 0.15s linear;
    cursor: pointer;
    /* &:hover {
      transform: scale(1.05);
    } */
  }
  .right-caret {
    right: -20px;
    -webkit-tap-highlight-color: transparent;
  }
  .left-caret {
    left: -20px;
    -webkit-tap-highlight-color: transparent;
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
        <CaretBox
          onClick={() => handlePrevious()}
        >
          <Left 
            className="left-caret caret"
          />
        </CaretBox>
        <CaretBox
          onClick={() => handleNext()}
        >
          <Right 
            className="right-caret caret" 
          />
        </CaretBox>
      </ButtonsBox>
    </ImgWrapper>
  )
}

export default HobbySlider;