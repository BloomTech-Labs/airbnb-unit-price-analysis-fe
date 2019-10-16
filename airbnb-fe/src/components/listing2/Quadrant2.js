import React from "react";
import styled from 'styled-components';
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
`
    





function Quadrant2(props) {


  return (
    <S.Container>
        <h1>September 2019</h1>
        <Chart2/>
        {/* <Chart3/> */}
        <h2>Your listing is listed below-average compared to others in your area</h2>
        <div>With your amenities and size of listing you could raise the Current Rate to increase your Profit Margin by % per year</div>
    </S.Container>
  );
}


const mapStateToProps = (state) => {
    return {}
  }
  
  export default connect(mapStateToProps, null)(withRouter(Quadrant2));
  