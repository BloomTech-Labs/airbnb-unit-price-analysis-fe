import React from "react";
import styled from "styled-components";

import Url from "../../img/url.png";
import Listing from "../../img/listing.png";
import Price from "../../img/price.png";

const Q3div = styled.div`
  height: 180vh;
  width: 100%;
  background-color: #ffe6e6;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Spacer = styled.div`
  height: 100px;
`;

const H1 = styled.h1`
  font-family: "Montserrat", sans-serif;
  color: #484848;
  font-size: 32px;
`;

const TextImageDiv = styled.div`
  display: flex;
  width: 80%;
  height: 40vh;
  justify-content: space-between;
  margin: 40px 0px;
`;

const TextImageDivR = styled(TextImageDiv)`
  flex-direction: row-reverse;
`;

const ImageSect = styled.div`
  height: 100%;
`;

const TextSect = styled.div`
  width: 60%;
  height: 100%;
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  line-height: 1.4;
  color: #484848;
`;

function Quadrant3() {
  return (
    <Q3div>
      <Spacer />
      <H1>Never second-guess your prices again</H1>
      <TextImageDiv>
        <ImageSect>
          <img src={Url} />
        </ImageSect>
        <TextSect>
          <h3>Connect your listing</h3>Securely connect your listings from any
          major channel. Our system will link your listing to your Wheelhouse
          account in minutes. You can then add more listings or start setting up
          your pricing.
        </TextSect>
      </TextImageDiv>
      <TextImageDivR>
        <ImageSect>
          <img src={Listing} />
        </ImageSect>
        <TextSect>
          <h3>Have multiple listings</h3>
          Have one AirBnB account, or multiple accounts, with one click. You’ll
          be able to manage all the accounts, calendars, and pricing
          recommendations from the price my airbnb dashboard. You can choose one
          favorite that will always be on the dashboard.
        </TextSect>
      </TextImageDivR>
      <TextImageDiv>
        <ImageSect>
          <img src={Price} />
        </ImageSect>
        <TextSect>
          <h3>Track performance and adjust over time</h3>
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
