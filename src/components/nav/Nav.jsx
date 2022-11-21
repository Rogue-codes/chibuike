import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import NavButton from "../../utils/NavButton";
import { motion } from "framer-motion";
function Nav() {
  const [clicked, setClicked] = useState(false);
  const [showWrapper, setShowWrapper] = useState(false);

  const toggleMenu = () => {
    setClicked(!clicked);
    setShowWrapper(!showWrapper);
    console.log("first");
  };

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%", transition: { delay: 0.5 } },
  };

  return (
    <Container>
      <Links>
        <Link>Home</Link>
        <Link>About</Link>
      </Links>

      <Name>CHIBUIKE DARAOJIMBA</Name>

      <NavButton content="Get Started" />

      <div
        className={
          clicked
            ? "hamburger hamburger--spring is-active"
            : "hamburger hamburger--spring"
        }
        onClick={toggleMenu}
      >
        <div class="hamburger-box">
          <div class="hamburger-inner"></div>
        </div>
      </div>

      {showWrapper && (
        <Wrapper
          initial={false}
          animate={showWrapper ? "open" : "closed"}
          variants={variants}
        >
          <Link>Home</Link>
          <Link>About</Link>
          <NavButton content="Get Started" type="mobile" />
        </Wrapper>
      )}
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
  .hamburger {
    @media (max-width: 768px) {
      display: block;
    }
    display: none;
  }
  .hamburger-box {
    width: 40px;
    height: 24px;
    position: relative;
    cursor: pointer;
  }
  .hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -2px;
  }
  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after {
    width: 40px;
    height: 4px;
    background-color: #000;
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }
  .hamburger-inner::before,
  .hamburger-inner::after {
    content: "";
    display: block;
  }
  .hamburger-inner::before {
    top: -10px;
  }
  .hamburger-inner::after {
    bottom: -10px;
  }
  .hamburger--spring .hamburger-inner {
    top: 2px;
    transition: background-color 0s 0.13s linear;
    /* color: #fff; */
  }
  .hamburger--spring .hamburger-inner::before {
    top: 10px;
    transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .hamburger--spring .hamburger-inner::after {
    top: 20px;
    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .hamburger--spring.is-active .hamburger-inner {
    transition-delay: 0.22s;
    background-color: transparent !important;
  }
  .hamburger--spring.is-active .hamburger-inner::before {
    top: 0;
    transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
      transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 10px, 0) rotate(45deg);
  }
  .hamburger--spring.is-active .hamburger-inner::after {
    top: 0;
    transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
      transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 10px, 0) rotate(-45deg);
  }
`;
const Links = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
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
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  font-size: 3vw;
`;

const Wrapper = styled(motion.div)`
  width: 80%;
  padding: 2%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background: #bb836a;
  z-index: 999999999;
  a {
    display: block;
    font-size: 2rem;
    padding: 5%;
    color: #fff;
  }
`;
