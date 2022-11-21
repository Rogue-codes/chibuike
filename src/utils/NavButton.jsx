import React from "react";
import styled from "styled-components";

function NavButton({ content, type }) {
  return <Container ds={type === "mobile" ? "block" : "none"}>{content}</Container>;
}

export default NavButton;

const Container = styled.button`
  @media (max-width: 768px) {
    display: ${props => props.ds};
    background: #fff;
    color: #bb836a;
    font-size: 1.4rem;
    height: 10vh;
    width: 90%;
    margin-left: 5%;
    margin-top: 5%;
  }
  width: 10vw;
  height: 7vh;
  background: #bb836a;
  font-size: 1.5vw;
  font-weight: 700;
  color: #fff;
  border: none;
`;
