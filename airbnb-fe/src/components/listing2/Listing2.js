import React, { useEffect } from "react";
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import {getPricing, getPricingCounts} from '../../store/actions';



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

    const parseIdFromUrl = (url) => {
        let urlSplit = url.split('?')
        let firstHalfArr = urlSplit[0];
        let idArr = []
        let k =  firstHalfArr.length
        for(let i = firstHalfArr.length; i <= firstHalfArr.length; i--){
            k--
            if(firstHalfArr[i] == "/"){
                break
          }
        }
        do {
            idArr.push(firstHalfArr.slice([k+2]))
            k = k+1
        }while (k <= firstHalfArr.length)
    
        return idArr[0]
    }

    let listing;

    if(props.isDemo) {
        listing = props.searchResult[0];
    } else {
        listing = props.location.state.listing;
    }

    useEffect(() => {
        console.log("listing", listing)
        if(listing){
            let id = parseIdFromUrl(listing.url)
            props.getPricing(id)
            props.getPricingCounts(id)
        }
    }, [listing])


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
        isDemo: state.isDemo,
    }
  }
  
  export default connect(mapStateToProps, {getPricing, getPricingCounts})(withRouter(Listing2));
  