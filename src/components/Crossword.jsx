import React from "react"
import styled from "styled-components"
import { letters, develop } from "../data/CrosswordData.js"
import Tile from "./Tile"

const CrosswordContainer = styled.div`
  display: grid;
  gap: 2px;
  grid-template-columns: repeat(12, 1.1em);
  grid-template-rows: repeat(9, 1.1em);
  justify-self: center;
  padding-bottom: 30px;
  font-weight: 300;
  font-family: 'Poppins', sans-serif;
  @media only screen and (min-width: 375px) {
    grid-template-columns: repeat(12, 1.3em);
    grid-template-rows: repeat(9, 1.3em)
  }
  @media only screen and (min-width: 425px) {
    grid-template-columns: repeat(12, 1.5em);
    grid-template-rows: repeat(9, 1.5em);
  }
  @media only screen and (min-width: 600px) {
    grid-template-columns: repeat(12, 1.9em);
    grid-template-rows: repeat(9, 1.9em);
  }
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(12, 2.4em);
    grid-template-rows: repeat(9, 2.4em);
  }
  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(12, 2.9em);
    grid-template-rows: repeat(9, 2.9em);
  }
  @media only screen and (min-width: 1400px) {
    grid-template-columns: repeat(12, 3.1em);
    grid-template-rows: repeat(9, 3.1em);
  }
`

const generateTiles = () => {
  let tiles = []
  for (let i = 0; i < 108; i++) {
    if (letters[i] !== undefined) {
      tiles.push(
        letters[i].length === 1 ? (
          develop.includes(i) ? (
            <Tile key={i} letter develop>
              {letters[i]}
            </Tile>
          ) : (
            <Tile key={i} letter>
              {letters[i]}
            </Tile>
          )
        ) : (
          <Tile key={i} accent></Tile>
        )
      )
    } else {
      tiles.push(<Tile key={i} />)
    }
  }
  return tiles
}

const Crossword = () => {
  return <CrosswordContainer>{generateTiles()}</CrosswordContainer>
}

export default Crossword
