import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components';
import Header from './Header2';
import { useViewport } from './ViewportProvider';
import Footer from './Footer';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* min-height: 100vh; */
  font-family: "Lato", sans-serif;
  /* padding-top: 100px; */
  margin-bottom: 60px;
  @media (min-width: 768px) {
    /* padding-top: 100px; */
  }
`;

const Layout = ({ children }) => {
  const { width }  = useViewport();
  const breakpoint = 768;   

  return (
    <>
      <Wrapper>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
