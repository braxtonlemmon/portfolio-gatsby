import styled from "styled-components"

const NavButton = styled.button`
  height: 100%;
  width: 100%;
  padding: 12px 5px;
  background: ${props => (props.top ? "none" : "white")};
  color: ${props => (props.top ? "white" : "black")};
  border: none;
  font-size: 1.5em;
  font-weight: 500;
  outline: none;
  cursor: pointer;
  &:hover {
    background: ${props => (props.top ? "none" : "pink")};
    color: ${props => (props.top ? "#e3ca11" : "black")};
  }

  @media (min-width: 1000px) {
    margin: 0 18px;
  }
`

export default NavButton
