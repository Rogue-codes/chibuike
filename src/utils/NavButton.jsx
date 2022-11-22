import React from "react";
import styled from "styled-components";
import cv from "../../src/assets/ChibuikeCV.pdf"
function NavButton({ content, type }) {
  return <Container ds={type === "mobile" ? "block" : "none"}><a href={cv}  download>{content}</a></Container>;
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
  width: 15vw;
  height: 7vh;
  background: #bb836a;
  font-size: 1.5vw;
  font-weight: 500;
  color: #fff;
  border: none;
  a{
    @media (max-width: 768px) {
      font-size: 1rem;
    }
    font-size: 1.5vw;
    text-decoration: none;
    color: #fff;
  }
`;
