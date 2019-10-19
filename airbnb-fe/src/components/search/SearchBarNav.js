import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Loader from 'react-loader-spinner';

import { connect } from 'react-redux';
import { getListing, getListings } from '../../store/actions/index';

import { withRouter } from "react-router-dom";
import { useAuth0 } from "../../react-auth0-wrapper";


const S = {};

S.Container = styled.div`
  box-sizing: border-box;
  border: solid black 1px;
  width: 30%;
  height: 60%;
  display: flex;
`;

S.Icon = styled.div`
  // border: solid grey 1px;
  box-sizing: border-box;
  height: 100%;
  width: 15%;
  font-size: 10px;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;

S.Form = styled.form`
  display: flex;
  width: 90%;
  background-color: yellow;
`;
S.Input = styled.input`
  // border: solid green 1px;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  display: flex;
  align-items: center;
`;

S.Button = styled.button`

    border: solid grey 1px;
    box-sizing: border-box;
    height: 100%;
    width: 11.1%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
`


S.StyledLoader = styled(Loader)`
  margin-top: 200px;
`;

export function SearchBarNav(props){

    const [url, setUrl] = useState("")
    const { user } = useAuth0();


    useEffect(() => {
        console.log("useEffect trigger")
        console.log("searchResult length", props.searchResult.length)

        let demo = "";
        if (props.isDemo){
            demo = "demo-"
        }
        if(user){
            props.getListings(user.email)
        }
        if(props.searchResult.length > 0){
            console.log("conditional trigger")
            props.history.push(`/${demo}confirmation`);
        }
    }, [props.searchResult.length, props.listings.length, user, props.isSearchMode, props.isDemo])

    // const parseIdFromUrl = (url) => {
    //     // https://www.airbnb.com/rooms/plus/14071876?source_impression_id=p3_1570169163_0UseAOfbkQEhOoG3
    //     let urlSplit = url.split('?')
    //     let firstHalfArr = urlSplit[0].split("");
    //     let idArr = []
    //     // need to get last 8 characters of urlSplit[0]
    //     for(let i = 0; i < 8; i++){
    //       idArr.push(firstHalfArr.pop())
    //     }
    //     let idArrReverse = idArr.reverse()
    //     let idString = idArrReverse.join("")

    //     return idString
    // }

    const parseIdFromUrl = (url) => {
        let urlSplit = url.split('?')
        let firstHalfArr = urlSplit[0];
        let idArr = []
        let k =  firstHalfArr.length
        
        // need to get last 8 characters of urlSplit[0]
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

    const handleSubmit = (e) => {
        e.preventDefault()
        let id = parseIdFromUrl(url);
        props.getListing(id)
    }

    const fillTestUrl = (e) => {
        e.preventDefault()
        setUrl("https://www.airbnb.com/rooms/20685563?source_impression_id=p3_1569467509_yL2ofzzD2Oz5DDIi");
    }



    return(
        <>
        { !props.isFetching
            ? <S.Container>
                <S.Icon
                    data-testid="plus-icon"
                    onClick = {(e) => fillTestUrl(e)}
                ></S.Icon>
                <S.Form
                    onSubmit = {(e) => handleSubmit(e)}
                >
                    <S.Input
                        placeholder = "Enter Airbnb URL."
                        name = "url"
                        value = {url}
                        onChange = {(e) => {setUrl(e.target.value)}}
                    />
                    <S.Button>
                        <div>+</div>
                    </S.Button>
                </S.Form>
            </S.Container>
            : <S.StyledLoader type="TailSpin" color="grey" height={80} width={80} />
        }
        </>
    )

}

const mapStateToProps = (state) => {
    return {
        isFetching: state.isFetching,
        searchResult: state.searchResult,
        listings: state.listings,
        isSearchMode: state.isSearchMode,
        isDemo: state.isDemo
    }
}

export default connect(mapStateToProps, { getListing, getListings })(withRouter(SearchBarNav));
