import React from "react";
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import Chart3 from '../charts/Chart3';



const S = {}

S.Container = styled.div`
    display: flex;  
    justify-content: space-between;
    box-sizing: border-box;
    // border: solid black 1px;
    flex-direction: column;
    align-items: center;
    height: 40vh
`
    





function Quadrant4(props) {
  return (
    <S.Container>
        <h1>Ratings</h1>
        {/* <Chart2/> */}
        <Chart3/>
    </S.Container>
  );
}


const mapStateToProps = (state) => {
    return {}
  }
  
  export default connect(mapStateToProps, null)(withRouter(Quadrant4));
  