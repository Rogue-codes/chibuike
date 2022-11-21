import React from "react";
import styled from "styled-components";

function Second() {
  return (
    <Container>
      <h1>You deserve a seamless real estate experience, start to sold.</h1>
      <p>
        Buying or selling a home is often the biggest emotional and financial
        decision you'll ever make. Choosing an exceptional REALTOR® is an
        important first step.
      </p>
    </Container>
  );
}

export default Second;

const Container = styled.div`
@media (max-width: 768px) {
    height: auto;
    padding-bottom: 5%;
    padding: 5% 5%;
}
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10%;
  h1 {
    @media (max-width: 768px) {
    font-size: 2rem;
    width: 100%;
    text-align: left;
}
    font-size: 4vw;
    width: 60%;
    text-align: center;
    font-family: 'Kanit', sans-serif;
  }
  p{
    @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-top: 5%;
    width: 100%;
    line-height: 40px;
    text-align: left;
}
    font-size: 1.8vw;
    line-height: 30px;
    width: 80%;
    text-align: center;
  }
`;
