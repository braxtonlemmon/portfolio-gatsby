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
import { useViewport } from './ViewportProvider';

const Layout = ({ children }) => {
  const { width }  = useViewport();
  const breakpoint = 768;

  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* min-height: 100vh; */
    font-family: "Open Sans", sans-serif;
    /* padding-top: 100px; */
    margin-bottom: 60px;
    @media (min-width: 768px) {
      padding-top: 100px;
    }
  `;

  return (
    <>
      <GlobalStyle />
      <Header width={breakpoint}/>
      <Wrapper>
        <main>
          {children}
        </main>
      </Wrapper>
      {width < breakpoint && <Footer /> }
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
