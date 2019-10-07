import React from "react";
import styled from "styled-components";
import { connect } from 'react-redux';
import { saveListing } from '../../store/actions';
import { withRouter } from "react-router-dom";
import { useAuth0 } from "../../react-auth0-wrapper";



import Text from "./Text";

const S = {};

S.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
  padding-top: 30px;
  background-color: #f0f0f0;
  border-radius: 6px;
  box-shadow: 0 8px 8px -5px gray;
`;

S.Result = styled.div`
  display: flex;
  align-items: center;
  height: 85%;
  width: 100%;
  box-sizing: border-box;
`;

S.ImageDiv = styled.div`
  width: 30%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

S.Image = styled.img`
  width: 75%;
  height: 80%;
  background-color: #cfcfcf;
`;

S.ConfirmButton = styled.button`
  width: 100%;
  height: 15%;
  box-sizing: border-box;
  font-size: 20px;
  font-weight: 600;
  background: none;
  border: none;
  border-top: solid grey 1px;
  font-family: "Varela Round", sans-serif;
`;

function ResultBox(props) {
  const { user } = useAuth0();


  const saveListing = (e) => {
    e.preventDefault()
    props.saveListing(props.searchResult[0], user.email)
    setTimeout(props.history.push("/dashboard"), 3000);
  }

  const redirectToCalendar = (e) => {
    e.preventDefault();
    props.history.push({
      pathname: '/demo-listing',
      // state: { detail: value }
    }) 
  }
  
  return (
    <S.Container>
      <S.Result>
        <S.ImageDiv>
          <S.Image src = {props.searchResult[0].picture_url}/>
        </S.ImageDiv>
        <Text searchResult = {props.searchResult} />
      </S.Result>
      <S.ConfirmButton onClick = {props.isDemo 
        ? (e) => redirectToCalendar(e) 
        : (e) => saveListing(e)}>This is my house</S.ConfirmButton>
    </S.Container>
  );
}


const mapStateToProps = (state) => {
  return {
      searchResult: state.searchResult,
      listings: state.listings,
      isDemo: state.isDemo
  }
}

export default connect(mapStateToProps, {saveListing})(withRouter(ResultBox));
