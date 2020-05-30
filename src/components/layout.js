/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components';
import { Reset } from 'styled-reset';
import { GlobalStyle } from '../theme/GlobalStyle';
// import { Responsive } from 'responsive-react';
import Footer from './Footer';
import Header from "./Header";
import Content from './Content';

const Layout = ({ children }) => {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    font-family: "Open Sans", sans-serif;
    padding-top: 100px;
    margin-bottom: 50px;
  `;

  return (
     <>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <main>
          {children}
        </main>
        {/* <Responsive displayIn={["Mobile"]}>
          <Footer />
        </Responsive> */}
      </Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
