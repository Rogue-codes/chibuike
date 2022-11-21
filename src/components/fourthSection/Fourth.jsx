import React from "react";
import styled from "styled-components";
import img from "../../assets/ch1.jpeg"
function Fourth() {
  return (
    <Container>
      <p>It’s not just about a house. It’s about you.</p>
      <Image>
        <img src={img} alt="" />
      </Image>
    </Container>
  );
}

export default Fourth;

const Container = styled.div`
    @media (max-width: 768px) {
    flex-direction: column;
    padding: 5%;
    height: auto;
}
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2%;

  p {
    @media (max-width: 768px) {
    font-size: 2rem;
    width: 100%;
    font-weight: 800;
}
    margin: 5%;
    font-size: 3vw;
    width: 40%;
    font-family: 'Kanit', sans-serif;
  }
`;
const Image = styled.div`
    @media (max-width: 768px) {
    width: 100%;
}
    width: 40%;
    height: 90%;
    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`
