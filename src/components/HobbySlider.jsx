import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const slide = keyframes`
  from {

    opacity: 0.3;
  }
  to {

    opacity: 0.9;
  }
`;

const ImgWrapper = styled.div`
  width: 400px;
  height: 300px;
  margin: 15px;
  .image {
    animation-delay: 0.1s;
    animation: ${slide} 0.8s ;
    height: 100%;
    width: 100%;
    box-shadow: -2px 2px 2px grey;
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
`;

const RightArrow = styled.div`
  border-color: transparent white;
  border-style: solid;
  border-width: 10px 0px 10px 15px;
  height: 0;
  width: 0;
  margin-left: 3px;
`;

const LeftArrow = styled.div`
  border-color: transparent white;
  border-style: solid;
  border-width: 10px 15px 10px 0px;
  height: 0;
  width: 0;
  margin-right: 3px;

`

const Button = styled.button`
  height: 45px;
  width: 45px;
  border-radius: 50%;
  border: none;
  padding: 3px;
  background-color: grey;
  cursor: pointer;
  color: white;
  font-weight: 800;
  font-size: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    border: 2px solid black;
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
        <Button onClick={() => handlePrevious()}>
          <LeftArrow></LeftArrow>
        </Button>
        <Button onClick={() => handleNext()}>
          <RightArrow></RightArrow>
        </Button>
      </ButtonsBox>
    </ImgWrapper>
  )
}

export default HobbySlider;