import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <p>Kathryn McClintock</p>
      <List>
        <ul>
          <li>512.818.3572</li>
          <li>kathryn@mcclintockliving.com</li>
        </ul>

        <ul>
          {" "}
          <li>9600 Great Hills Trail, Suite </li>
          <li>150W</li>
          <li>Austin, TX 78759</li>
        </ul>
      </List>

      <p>
        Kathryn McClintock is a Greater Austin REALTOR® based in Georgetown,
        Texas. She is a sixth-generation Texan and hopes to make her home, your
        home.
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
    color: #fff;
    padding: 3%;
    font-size: 2vw;
  }
`;
const List = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  gap: 5%;
  padding: 3%;
  ul{
    list-style-type: none;
    li{
        font-size: 1.4vw;
        color: #fff;
    }
  }
`;
