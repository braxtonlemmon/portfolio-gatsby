import styled from "styled-components"

const NavButton = styled.button`
  height: 100%;
  width: 100%;
  padding: 10px 1px;
  background: ${props => (props.top ? "none" : "white")};
  color: ${props => (props.top ? "#003215" : "black")};
  border: none;
  font-size: ${props => (props.top ? "1.5em" : "1em")};
  font-weight: 500;
  outline: none;
  cursor: pointer;
  &:hover {
    background: ${props => (props.top ? "none" : "pink")};
    color: ${props => (props.top ? "#e3ca11" : "black")};
  }
  @media (min-width: 350px) {
    padding: 10px 3px;
  }
  @media (min-width: 1000px) {
    margin: 0 18px;
  }
`

export default NavButton
