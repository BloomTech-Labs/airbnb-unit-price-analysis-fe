import React from "react";
import styled from "styled-components";

import Carousel from "./Carousel";
import Caroucell from './Caroucell';

const Q4div = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  height: 55%;
  width: 80%;
  margin: 0;
  display: flex;
  justify-content: space-between;
`;

function Quadrant4() {
  return (
    <Q4div>
      {/* <Carousel /> */}
      <Caroucell />
    </Q4div>
  );
}

export default Quadrant4;
