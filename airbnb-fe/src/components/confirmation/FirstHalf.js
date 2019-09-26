import React from "react";
import styled from "styled-components";
import ResultBox from "./ResultBox";

const Container = styled.div`
  width: 100%;
  height: 60vh;
  box-sizing: border-box;
`;

function FirstHalf() {
  return (
    <Container>
      <h2>Is this your airbnb?</h2>
      <ResultBox />
    </Container>
  );
}

export default FirstHalf;
