import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <p>CHIBUIKE DARAOJIMBA</p>
      <List>
        <ul>
          <li>+27634632178</li>
          <li><a href="mailTo:chibuikedaraojimba@gmail.com">chibuikedaraojimba@gmail.com</a></li>
          <li><a href="https://www.linkedin.com/in/chibuikedaraojimba">LinkedIn</a></li>
        </ul>

        <ul>
          {" "}
          <li>9600 Great Hills Trail, Suite </li>
          <li>150W</li>
          <li>Pretoria, South Africa</li>
        </ul>
      </List>

      <p>
        Chibuike Daraojimba is a Greater Project Manager and a Business Analyst® based in Pretoria, South Africa.
      </p>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  width: 100%;
  height: auto;
  background: #2c2c2c;
  p{
    @media (max-width: 768px) {
      font-size: 1.3rem;
    }
    color: #fff;
    padding: 3%;
    font-size: 2vw;
  }
`;
const List = styled.div`
@media (max-width: 768px) {
  flex-direction: column;
}
  width: 100%;
  height: 30vh;
  display: flex;
  gap: 5%;
  padding: 3%;
  ul{
    @media (max-width: 768px) {
      margin-top: 5%;
    }
    list-style-type: none;
    li{
        @media (max-width: 768px) {
            font-size: 1.3rem;
        }
        font-size: 1.4vw;
        color: #fff;
        a{
          color: white;
          text-decoration: none;
        }
    }
  }
`;
