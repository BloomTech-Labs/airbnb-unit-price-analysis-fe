import React from "react";
import styled from "styled-components";

import device from "../../devices";
import Banner from "../../img/LandingBanner.png";

import Header from "./Header";

const Q1div = styled.div`
  // height: 45vw;        //<- Dynamic height
  // min-height: 600px;   //<- Dynamic height
  height: 110vh; //<- Static height
  width: 100%;
  background-image: url(${Banner});
  display: flex;
  align-items: center;

  @media ${device.desktop} {
    height: 90vh;
    background-size: 100%;
  }

  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-size: 300%;
    margin: 10% 0 0 0;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

function Quadrant1() {
  return (
    <Q1div>
      <Header />
    </Q1div>
  );
}

export default Quadrant1;
