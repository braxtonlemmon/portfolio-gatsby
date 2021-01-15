import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Lato", sans-serif;
  margin-bottom: 60px;
  @media (min-width: 768px) {
  }
`;

const Layout = ({ children }) => {
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
