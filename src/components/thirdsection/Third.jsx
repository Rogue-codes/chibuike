import React from "react";
import styled from "styled-components";

function Third() {
  return (
    <Container>
      <Top>
        <h2>Who you work with matters.</h2>
        <h2>See why homeowners choose Chibuike.</h2>
      </Top>
      <Bottom>
        <Card>
          <h2>15 Years in Technology</h2>
          <p>
            Before transitioning into residential real estate, Chibuike had a
            successful, 15-year career in software engineering and digital
            product management.
          </p>
        </Card>
        <Card>
          <h2>Better Communication, Faster</h2>
          <p>
            Chibuike holds a Bachelor’s degree in Communication from Trinity
            University. Her communication style is warm, timely, clear, and
            concise.
          </p>
        </Card>
        <Card>
          <h2>Unparalleled Negotiation</h2>
          <p>
            As a certified Real Estate Negotiation Expert (RENE), Chibuike is
            client-focused. Her mission is to achieve the best possible outcome
            for her clients, regardless of timeline or price level.
          </p>
        </Card>
        <Card>
          <h2>Complimentary Home Staging</h2>
          <p>
            With an accreditation in professional home staging (ASP®), Chibuike
            offers complimentary styling and photography services with all
            listings.
          </p>
        </Card>
      </Bottom>
    </Container>
  );
}

export default Third;

const Container = styled.div`
  width: 100%;
  height: auto;
  background: #2c2c2c;
  padding: 2%;
`;
const Top = styled.div`
  width: 100%;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5%;
  h2 {
    @media (max-width: 768px) {
      font-size: 3rem;
      text-align: center;
    }
    font-size: 3vw;
    letter-spacing: 5px;
    font-family: "Kanit", sans-serif;
    font-style: italic;
    color: #f2d9d2;
    font-weight: 600;
  }
`;
const Bottom = styled.div`
  @media (max-width: 768px) {
    flex-direction: column;
  }
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2%;
`;
const Card = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    padding: 5%;
  }
  width: 49%;
  height: auto;
  background: #fff;
  margin-bottom: 2%;
  padding: 2%;
  h2 {
    @media (max-width: 768px) {
      font-size: 1.8rem;
      width: 100%;
    }
    font-size: 2vw;
    margin: 5% 0%;
    font-family: 'Kanit', sans-serif;
  }
  p {
    @media (max-width: 768px) {
      font-size: 1.5rem;
      line-height: 35px;
    }
    font-size: 1.52vw;
    margin: 5% 0%;
    line-height: 40px;
  }
`;
