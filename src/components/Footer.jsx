import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
  border-top: 1px solid ${props => props.theme.colors.dark};
  padding: 30px 5px;
  text-align: center;
  font-size: ${props => props.theme.fontSize.one};
  color: ${props => props.theme.colors.dark};
  letter-spacing: 2px;
`;


const Footer = () => {
  return (
    <Wrapper>
      <p>Braxton Lemmon © 2020 - 2021</p>
    </Wrapper>
  )
}

export default Footer
