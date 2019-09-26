import React from "react";
import styled from "styled-components";

import FirstHalf from "./FirstHalf";
import SecondHalf from "./SecondHalf";

const Container = styled.div`
  width: 85%;
  margin: auto;
  margin-top: 8%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  font-family: "Varela Round", sans-serif;
`;

function Confirmation() {
  return (
    <Container>
      <FirstHalf />
      {/* <SecondHalf /> */}
    </Container>
  );
}

export default Confirmation;
