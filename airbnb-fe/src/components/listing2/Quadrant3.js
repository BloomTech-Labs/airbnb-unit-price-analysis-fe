import React from "react";
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";



const S = {}



S.Container = styled.div`
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    // border: solid black 1px;
    height: 45vh;
    flex-direction: column;
    align-items: center;
    margin-top: 5vh;
    filter: blur(${props => props.demo ? '10px' : '0px'});
    -webkit-filter: blur(${props => props.demo ? '10px' : '0px'});
    -moz-filter: blur(${props => props.demo ? '10px' : '0px'});
`

S.HalvesLR = styled.div`
    display: flex;
    box-sizing: border-box;
    // border: solid red 1px;
    height: 85%;
    width: 100%;
    margin-top: 2vh;

`

S.HalfL = styled.div`
    width: 50%;
    box-sizing: border-box;
    // border: solid black 1px;
    display: flex;
    flex-direction: column;
    padding-left: 30px;
`
S.HalfR = styled(S.HalfL)`
    border-left: dotted green 8px;
`


function Quadrant3(props) {




  return (
    <S.Container demo={props.isDemo}>
        <div style = {{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <h2>Comparison</h2>
                <div>By Area and By Property Type</div>
            </div>
            <S.HalvesLR>
                <S.HalfL>
                    <h2 style= {{width: "100%", textAlign: "center"}}>Your Lisiting</h2>
                    <div>Rating: ⭐⭐⭐⭐⭐</div>
                    <div>Current rate: ${props.listing.price}</div>
                    <div>Guests allowed: {props.listing.guests_included}</div>
                    <div>Beds: {props.listing.beds} 🛏</div>
                    <div>Bathrooms: {props.listing.bathrooms}</div>
                    <div>Extra amenities: {props.listing.amenities.length}</div>
                    {/* <div>Successful bookings (past month): 10</div> CANT GET THIS */}
                </S.HalfL>
                <S.HalfR>
                    <h2 style= {{width: "100%", textAlign: "center"}}>Most Popular Listing</h2>
                    <div>Rating: ⭐⭐⭐⭐⭐</div>
                    <div>Current rate: $40</div>
                    <div>Guests allowed: 8</div>
                    <div>Beds: 4 🛏</div>
                    <div>Bathrooms: 2</div>
                    <div>Extra amenities: 3</div>
                    {/* <div>Successful bookings (past month): 10</div> CANT GET THIS */}
                </S.HalfR>
            </S.HalvesLR>
    </S.Container>
  );
}


const mapStateToProps = (state) => {
    return {

      isDemo: state.isDemo
    }
  }

  export default connect(mapStateToProps, null)(withRouter(Quadrant3));
