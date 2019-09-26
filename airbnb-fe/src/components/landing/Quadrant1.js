import React from "react";
import styled from "styled-components";
import Banner from "../../img/LandingBanner.png";

import Header from "./Header";

const Q1div = styled.div`
  // height: 45vw;        //<- Dynamic height
  // min-height: 600px;   //<- Dynamic height
  height: 96vh; //<- Static height
  width: 100%;
  background-image: url(${Banner});
  display: flex;
  align-items: center;
`;

function Quadrant1() {
  return (
    <Q1div>
      <Header />
    </Q1div>
  );
}

export default Quadrant1;
