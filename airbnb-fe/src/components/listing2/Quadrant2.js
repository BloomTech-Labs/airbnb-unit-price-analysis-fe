import React from "react";
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import Chart2 from "../charts/Chart2";



const S = {}


S.Container = styled.div`
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    // border: solid black 1px;
    flex-direction: column;
    align-items: center;
    height: 50vh;
    // filter: blur(${props => props.demo ? '10px' : '0px'});
    // -webkit-filter: blur(${props => props.demo ? '10px' : '0px'});
    // -moz-filter: blur(${props => props.demo ? '10px' : '0px'});
`

S.StyledH2 = styled.span`
    color: #00FF9D;

    ${props => 
    props.belowAverage && css`
        color: #FF5A5F;
    `}
`;




function Quadrant2(props) {
  console.log("Pricing percentile: ", props.pricingPercentile);
  console.log("Listings/percentile: : ", props.listingsPerPercentile);

  return (
    <S.Container demo={props.isDemo}>
        <h1>September 2019</h1>
        <Chart2
          pricingPercentile = {props.pricingPercentile}
          listingsPerPercentile = {props.listingsPerPercentile}
        />
        {/* <Chart3/> */}
        {props.pricingPercentile.listing_percentile <= props.pricingPercentile.percentiles[4]
          ? <h2>Your listing is listed <S.StyledH2 belowAverage>below-average</S.StyledH2> compared to others in your area.</h2>
          : <h2>Your listing is listed <S.StyledH2>above-average</S.StyledH2> compared to others in your area.</h2>}
        <div>With your amenities and size of listing you could raise the Current Rate to increase your Profit Margin by % per year</div>
    </S.Container>
  );
}


const mapStateToProps = (state) => {
    return {
      pricingPercentile: state.pricingPercentile,
      listingsPerPercentile: state.listingsPerPercentile,
      isDemo: state.isDemo
    }
  }

  export default connect(mapStateToProps, null)(withRouter(Quadrant2));
