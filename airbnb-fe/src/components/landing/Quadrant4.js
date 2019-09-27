import React from "react";
import styled from "styled-components";

import Carousel from "./Carousel";

const Q4div = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  height: 40%;
  width: 70%;
  margin: 0;
  display: flex;
  justify-content: space-between;
`;

function Quadrant4() {
  return (
    <Q4div>
      <Container>
        {/* <Carousel /> */}
      </Container>
    </Q4div>
  );
}

export default Quadrant4;
