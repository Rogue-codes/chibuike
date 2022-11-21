import React from 'react'
import styled from 'styled-components'
import Button from "../../utils/Button";
import img from "../../assets/Chibuike.jpg";
import { TypeAnimation } from "react-type-animation";
function Landing() {
  return (
    <Container>
              <Picture>
        <img src={img} alt="" />
      </Picture>
      <Desc>
        <div className="content">
          <p>Hi I'm Chibuike, a certified</p>
          <h1>
            <TypeAnimation
              // Same String at the start will only be typed once, initially
              sequence={[
                " Project Manager",
                1000,
                "I.T Analyst",
                1000,
                "Data Scientist",
                1000,
                "I.T Support Consultant",
                1000,
              ]}
              speed={50} // Custom Speed from 1-99 - Default Speed: 40
              style={{ fontSize: "2em" }}
              wrapper="span" // Animation will be rendered as a <span>
              repeat={Infinity} // Repeat this Animation Sequence infinitely
            />
          </h1>
          <div className="button">
            <Button content="GET STARTED" />
            <Button content="MEET CHIBUIKE" />
          </div>
        </div>
      </Desc>
    </Container>
  )
}

export default Landing
const Container = styled.div`
@media (max-width: 768px) {
    flex-direction: column;
    padding: 5%;
}
  width: 100%;
  min-height: 100vh;
  display: flex;
`;
const Picture = styled.div`
@media (max-width: 768px) {
    width: 100%;
    height: 50vh;
    margin-bottom: 15%;
}
  width: 50%;
  height: 100vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Desc = styled.div`
@media (max-width: 768px) {
    width: 100%;
    padding-top: 15%;
    height: auto;
}
  width: 50%;
  height: 100vh;
  background: #ede9e2;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    @media (max-width: 768px) {
    height: auto;
}
    width: 90%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8%;
    h1 {
        @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 15%;
}
      font-size: 2vw;
      font-family: 'Merriweather', serif;
    }
    p {
        @media (max-width: 768px) {
    font-size: 1.3rem;
}
      font-size: 2vw;
      font-weight: 600;
    }
    .button {
        @media (max-width: 768px) {
    flex-direction: column;
}
      width: 100%;
      display: flex;
      justify-content: flex-start;
      gap: 5%;
    }
  }
`;