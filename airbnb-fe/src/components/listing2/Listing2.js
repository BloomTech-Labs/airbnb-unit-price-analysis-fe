import React from "react";
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";



import Quadrant1 from './Quadrant1';
import Quadrant2 from './Quadrant2';
import Quadrant3 from './Quadrant3';
import Quadrant4 from './Quadrant4';


const S = {}

S.Container = styled.div`
    width: 89%;
    margin: auto;
    margin-top: 16.5vh;
    display: flex;
    flex-direction: column;
    font-family: "Montserrat", sans-serif;
    box-sizing: border-box;
`
    



function Listing2(props) {
    let listing;

    //*********************
    // For integrated use: 
    
    if(props.isDemo) {
        listing = props.searchResult[0];
    } else {
        listing = props.location.state.listing;
    }

    //*********************




    //*********************
    // For development use: 

    // listing = {
    //     picture_url: "https://i.pinimg.com/originals/58/d4/60/58d46000c24f232f1bf4da352332c46a.jpg",
    //     name: "Lofty House in Lytle Creek",
    //     city: "Fontana",
    //     room_type: "Apartment",
    //     guests_included: 5,
    //     bedrooms: 3,
    //     beds: 8,
    //     bathrooms: 3
    // }

    //*********************


  return (
    <S.Container>
        <Quadrant1 listing = {listing} />
        <Quadrant2 />
        <Quadrant3 />
        <Quadrant4 />
    </S.Container>
  );
}


const mapStateToProps = (state) => {
    return {
        searchResult: state.searchResult,
        isDemo: state.isDemo
    }
  }
  
  export default connect(mapStateToProps, null)(withRouter(Listing2));
  