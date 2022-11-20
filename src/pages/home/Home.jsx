import React from "react";
import styled from "styled-components";
import Fifth from "../../components/FifthSection/Fifth";
import Fourth from "../../components/fourthSection/Fourth";
import Landing from "../../components/Landing/Landing";
import Second from "../../components/secondSection/Second";
import Third from "../../components/thirdsection/Third";

function Home() {
  return (
    <Container>
        <Landing/>
        <Second/>
        <Third/>
        <Fourth/>
        <Fifth/>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

