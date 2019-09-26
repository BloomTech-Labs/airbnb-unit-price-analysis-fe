import React from "react";
import styled from "styled-components";

import device from "../../devices";
import Url from "../../img/url.png";
import Listing from "../../img/listing.png";
import Price from "../../img/price.png";

const Q3div = styled.div`
  height: 210vh;
  width: 100%;
  background-color: #ffe6e6;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media ${device.desktop} {
    justify-content: space-between;
    height: 220vh;
  }
`;

const Spacer = styled.div`
  height: 80px;
`;

const H1 = styled.h1`
  font-family: "Montserrat", sans-serif;
  color: #484848;
  font-size: 32px;

  @media ${device.desktop} {
    font-size: 38px;
  }
`;

const TextImageDiv = styled.div`
  display: flex;
  width: 80%;
  height: 40vh;
  align-items: center;
  justify-content: space-around;
  margin: 0 0 50px 0;

  @media ${device.desktop} {
    align-items: flex-start;
    height: auto;
  }
`;

const TextImageDivR = styled(TextImageDiv)`
  flex-direction: row-reverse;
`;

const ImageSect = styled.div`
  width: 80%;

  @media ${device.desktop} {
    width: 70%;
  }
`;

const TextSect = styled.div`
  width: 60%;
  height: 100%;
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  line-height: 1.4;
  color: #484848;

  @media ${device.desktop} {
    font-size: 26px;
    justify-content: start;
    width: 50%;
  }
`;

const TextTitle = styled.h3`
  font-size: 24px;

  @media ${device.desktop} {
    font-size: 32px;
    margin: 0 0 5% 0;
  }
`;

function Quadrant3() {
  return (
    <Q3div>
      <Spacer />
      <H1>Never second-guess your prices again</H1>
      <TextImageDiv>
        <ImageSect>
          <img src={Url} width="90%" />
        </ImageSect>
        <TextSect>
          <TextTitle>Connect your listing</TextTitle>Securely connect your
          listings from any major channel. Our system will link your listing to
          your Wheelhouse account in minutes. You can then add more listings or
          start setting up your pricing.
        </TextSect>
      </TextImageDiv>
      <TextImageDivR>
        <ImageSect>
          <img src={Listing} width="100%" />
        </ImageSect>
        <TextSect>
          <TextTitle>Have multiple listings</TextTitle>
          Access all of your AirBnB accounts with one click. You’ll be able to
          manage all the accounts, calendars, and pricing recommendations from
          the price my airbnb dashboard. You can choose one favorite that will
          always be on the dashboard.
        </TextSect>
      </TextImageDivR>
      <TextImageDiv>
        <ImageSect>
          <img src={Price} width="90%" />
        </ImageSect>
        <TextSect>
          <TextTitle>Track performance and adjust over time</TextTitle>
          Have total visibility into the health of your listings with insights
          into occupancy and earnings. Then, make confident, data-informed
          decisions on your pricing strategy.
        </TextSect>
      </TextImageDiv>
      <Spacer />
    </Q3div>
  );
}

export default Quadrant3;
