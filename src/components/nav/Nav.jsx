import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import NavButton from "../../utils/NavButton";
function Nav() {
  return (
    <Container>
      <Links>
        <Link>Home</Link>
        <Link>About</Link>
      </Links>

      <Name>CHIBUIKE DARAOJIMBA</Name>

      <NavButton content="Get Started" />
    </Container>
  );
}

export default Nav;

const Container = styled.nav`
  width: 100%;
  height: 15vh;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2%;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    position: sticky;
    top: 0;
    left: 0;
`;
const Links = styled.div`
  width: 20%;
  height: 10vh;
  display: flex;
  justify-content: flex-start;
  gap: 15%;
  align-items: center;
  a {
    text-decoration: none;
    color: #000;
    font-size: 1.5vw;
    font-weight: 600;
  }
`;
const Name = styled.h1`
  font-size: 3vw;
`;
