import React from "react";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { FaClipboardList, FaListOl } from "react-icons/fa";
import styled from "styled-components";
import Button from "../../utils/Button";

function Fifth() {
  return (
    <Container>
      <Top>
        <h2>Getting started is simple.</h2>
      </Top>
      <Mid>
        <Card>
          <FaListOl size="3rem" color="#bb836a" />
          <p>Answer 6 easy questions</p>
          <span>6 questions. No obligations.</span>
        </Card>
        <Card>
          <BsFillCalendar2CheckFill size="3rem" color="#bb836a" />
          <p>Chat with Kathryn</p>
          <span>However you prefer—in person, online, via text or phone</span>
        </Card>
        <Card>
          <FaClipboardList size="3rem" color="#bb836a" />
          <p>Start your journey</p>
          <span>Your timeline. Your comfort. Your goals.</span>
        </Card>
      </Mid>
      <Bottom>
        <Button content="I'M READY" />
      </Bottom>
    </Container>
  );
}

export default Fifth;
const Container = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    padding: 5%;
  }
  width: 100%;
  background: #f7f5f1;
  padding-bottom: 5%;
`;
const Top = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    @media (max-width: 768px) {
      font-size: 1.5rem;
      margin-top: 15%;
      width: 100%;
      text-align: center;
      font-weight: 800;
    }
    font-size: 4vw;
    font-weight: 500;
    font-family: "Kanit", sans-serif;
  }
`;
const Mid = styled.div`
  @media (max-width: 768px) {
    flex-direction: column;
  }
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
`;
const Bottom = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  margin-left: 25%;
`;
const Card = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    min-height: auto;
    margin-top: 5%;
    padding: 5%;
  }
  width: 33%;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  min-height: 50vh;
  padding: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
    font-size: 2vw;
    font-weight: 700;
    margin: 4% 0%;
    font-family: "Kanit", sans-serif;
  }
  span {
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
    font-size: 2vw;
    font-weight: 700;
    color: #bb836a;
    text-align: center;
  }
`;
