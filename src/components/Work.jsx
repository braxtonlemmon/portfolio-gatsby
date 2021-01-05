import React from 'react';
import styled from 'styled-components';
import ProjectRow from './ProjectRow';
import CARDS from '../data/CARDS.js';
import Title from './Title';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f4ebdd;
  padding: 20px 0;
`;

const Projects = styled.div`
  margin: 12px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

function Work() {
  return (
    <Wrapper>
      <Title text={'Work'} />
      <Projects>
        {CARDS.reverse().map(card => 
          <ProjectRow card={card} key={card.id} />  
        )}  
      </Projects>
      <div id="about-section"></div>
    </Wrapper>
  )
}

export default Work;