import React, { useEffect } from "react"
import SEO from "../components/seo"
import { H2 } from '../components/Headings';
import styled from 'styled-components';
import TicTacToe from '../components/TicTacToe/gameLayout';
import { Link } from 'gatsby';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Message = styled.p`
  text-align: center;
  margin: 10px 15px;
`;

const NotFoundPage = () => {

  return (
    <>
      <Wrapper>  
        <SEO title="404: Not found" />
        <H2>OOPS!</H2>
        <Message>No page found here, care for a game of tic-tac-toe?</Message>
        <Link to="/">Go Home</Link>
        <TicTacToe />
      </Wrapper>
    </>
  )
}

export default NotFoundPage;
