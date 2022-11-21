import React from "react";
import styled from "styled-components";
import img from "../../assets/ch2.jpeg";
import img1 from "../../assets/ch1.jpeg";
import img2 from "../../assets/ch3.jpeg";
function About() {
  return (
    <Container>
      <Top>
        <Text>
          <p>MEET</p>
          <h1>CHIBUIKE DARAOJIMBA</h1>
          <span>Texas REALTOR® | License #788300 512-818-3572</span>
          <a href="mailto:Chibuike@mcclintockliving.com">
            Chibuike@mcclintockliving.com
          </a>
          <hr />
          <p className="about">
            CHIBUIKE DARAOJIMBA came to residential real estate through a desire
            to unify her personal and professional passions while providing
            value and authenticity to her local community of Georgetown, Texas.
            Before McClintock Living, Chibuike had a successful career in
            software engineering and technical product management.
          </p>
        </Text>
        <Picture>
          <img src={img} alt="" />
        </Picture>
      </Top>

      <Bottom>
        <Left>
          <p className="top">
            "Residential real estate was always something I gravitated
            towards—whether through personal home renovations, consumption of
            industry-related content, or finding daily delight in monitoring
            market inventory. This profession is part art, part science, and
            highly relational—the key reasons I’m a REALTOR®."
          </p>

          <p className="bottom">
            Her combined background in design, technology, and management allow
            her to support and guide clients with an extraordinary level of
            service. "I want to help my clients win—as buyers or sellers, in
            negotiation, and ultimately, in their lives."
          </p>
        </Left>
        <Right>
          <PicOne>
            <img src={img2} alt="" />
          </PicOne>
          <PicTwo>
            <img src={img1} alt="" />
          </PicTwo>
        </Right>
      </Bottom>
    </Container>
  );
}

export default About;
const Container = styled.div`
  @media (max-width: 768px) {
    padding: 5%;
  }
  width: 100%;
  height: auto;
`;
const Top = styled.div`
  @media (max-width: 768px) {
    flex-direction: column;
    min-height: auto;
  }
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Text = styled.div`
  @media (max-width: 768px) {
    width: 100%;
  }
  width: 40%;
  height: auto;
  padding: 5% 2%;
  p {
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
    font-size: 2vw;
  }
  h1 {
    @media (max-width: 768px) {
      font-size: 2rem;
    }
    font-size: 4vw;
    margin: 3% 0%;
    font-family: "Kanit", sans-serif;
  }
  span {
    @media (max-width: 768px) {
      font-size: 1rem;
    }
    font-size: 1.5vw;
    display: block;
    margin: 3% 0%;
  }
  a {
    color: #bb836a;
    font-size: 1rem;
    text-decoration: none;
  }
  .about {
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
    font-size: 1.2rem;
    line-height: 40px;
  }
  hr {
    background: #474646;
    margin: 5% 0%;
  }
`;
const Picture = styled.div`
  @media (max-width: 768px) {
    width: 100%;
  }
  width: 30%;
  height: 80vh;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Bottom = styled.div`
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    margin-top: 5%;
    height: auto;
  }
  width: 100%;
  height: 100vh;
  display: flex;
`;
const Left = styled.div`
  @media (max-width: 768px) {
    height: auto;
    width: 100%;
  }
  width: 50%;
  height: 100vh;
  padding: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .top {
    @media (max-width: 768px) {
      font-size: 1.5rem;
      width: 100%;
    }
    width: 70%;
    font-size: 1.5vw;
    line-height: 40px;
  }
  .bottom {
    @media (max-width: 768px) {
      font-size: 1.5rem;
      width: 100%;
    }
    width: 85%;
    font-size: 1.5vw;
    line-height: 40px;
    text-align: left;
    margin-top: 5%;
  }
`;

const Right = styled.div`
  @media (max-width: 768px) {
    border: 1px solid green;
    display: none;
  }
  width: 50%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2%;
`;
const PicOne = styled.div`
  width: 44%;
  height: 60vh;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const PicTwo = styled.div`
  width: 44%;
  height: 60vh;
  margin-top: -25%;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
