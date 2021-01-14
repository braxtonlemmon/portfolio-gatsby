import React, { useState } from "react"
import styled from "styled-components"

const TileBox = styled.div`
  background: ${props => (props.letter ? "#2e2e2e" : "none")};
  background: ${props => {
    if (props.letter) {
      return "#2e2e2e"
    } else if (props.accent) {
      return `${props.color}`
      // return `linear-gradient(${props.degree}deg, ${props.color}, ${props.color2})`
    } else {
      return "none"
    }
  }};

  border: ${props => {
    if (props.accent) {
      return "3px solid #2e2e2e"
    } else {
      return "none"
    }
  }};

  @media (min-width: 416px) {
    border: ${props => {
    if (props.accent) {
      return "4px solid #2e2e2e"
    } else {
      return "none"
    }
  }};
  }
  color: ${props => (props.develop ? props.theme.colors.lemon : "white")};
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  &:hover {
    transform: ${props => (props.letter ? "rotate(10deg)" : "none")};
  }
  @media only screen and (min-width: 425px) {
    font-size: 1em;
  }
  @media only screen and (min-width: 600px) {
    font-size: 1.3em;
  }
  @media only screen and (min-width: 768px) {
    font-size: 1.8em;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 2.1em;
  }

`

function Tile(props) {
  const [color, setColor] = useState()
  const [color2, setColor2] = useState()
  const [degree, setDegree] = useState()

  const handleChange = () => {
    const randomColor = getRandomColor()
    const randomColor2 = getRandomColor()
    const randomDegree = getRandomDegree()
    setColor(randomColor)
    setColor2(randomColor2)
    setDegree(randomDegree)
  }

  const getRandomColor = () => {
    const color = Math.floor(Math.random() * 16777216).toString(16)
    return "#000000".slice(0, -color.length) + color
  }

  const getRandomDegree = () => {
    return Math.floor(Math.random() * 360)
  }

  return (
    <TileBox
      onMouseEnter={handleChange}
      onTouchStart={handleChange}
      color={color}
      color2={color2}
      degree={degree}
      letter={props.letter}
      accent={props.accent}
      develop={props.develop}
    >
      {props.children}
    </TileBox>
  )
}

export default Tile
