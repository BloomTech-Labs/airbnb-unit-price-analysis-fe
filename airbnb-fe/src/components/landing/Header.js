import React from "react";
import styled from "styled-components";

import device from "../../devices";

const Container = styled.div`
  width: 50%;
  height: 46%;
  position: relative;
  bottom: 40px;
  left: 50px;
  display: flex;
  flex-direction: column;
  color: white;

  @media ${device.desktop} {
    height: 35%;
  }
`;

const H1 = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 40px;
  line-height: 1.4;
  font-weight: 500;
`;

const Text = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 35px;
  line-height: 1;
  font-weight: 300;
`;

const ButtonDiv = styled.div`
  width: 50%;
  height: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;

  @media ${device.desktop} {
    width: 40%;
  }
`;

const Button = styled.button`
  background: none;
  border-radius: 5px;
  color: white;
  border: solid white 2px;
  font-family: "Varela Round", sans-serif;
  font-size: 18px;
  line-height: 1.4;
  width: 45%;
  height: 100%;
  font-family: "Montserrat", sans-serif;
`;

const Button2 = styled(Button)`
  background-color: #ff5a5f;
  color: white;
  font-weight: bold;
  border: solid #ff5a5f 2px;
`;

function Header() {
  return (
    <Container>
      <H1>We value what you value</H1>
      <Text>
        Stop undervaluing your rentals and start making the profit you deserve
      </Text>
      <ButtonDiv>
        <Button>Demo</Button>
        <Button2>Join now</Button2>
      </ButtonDiv>
    </Container>
  );
}

export default Header;
