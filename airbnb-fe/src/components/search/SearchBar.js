import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getListing } from "../../store/actions/index";
import { withRouter } from "react-router-dom";

const S = {};

S.Container = styled.div`
  margin-top: 12.5%;
  box-sizing: border-box;
  border: solid black 1px;
  width: 30%;
  height: 6%;
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
  width: 88.9%;
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
  font-size: 30px;

  &:hover {
    cursor: pointer;
  }
`;

function SearchBar(props) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (props.searchResult.length > 0) {
      props.history.push("/confirmation");
    }
  }, [props.searchResult.length]);

  const parseIdFromUrl = url => {
    // Will not work if not in "https://www.airbnb.com/rooms/20685563......" format
    const id = url.substring(29, 37);
    return id;
  };

  const handleSubmit = e => {
    e.preventDefault();
    let id = parseIdFromUrl(url);
    props.getListing(id);
  };

  const fillTestUrl = e => {
    e.preventDefault();
    setUrl(
      "https://www.airbnb.com/rooms/20685563?source_impression_id=p3_1569467509_yL2ofzzD2Oz5DDIi"
    );
  };

  return (
    <S.Container>
      <S.Icon onClick={e => fillTestUrl(e)}>click to put test url</S.Icon>
      <S.Form onSubmit={e => handleSubmit(e)}>
        <S.Input
          placeholder="Enter Airbnb URL."
          name="url"
          value={url}
          onChange={e => {
            setUrl(e.target.value);
          }}
        />
        <S.Button>
          <div>+</div>
        </S.Button>
      </S.Form>
    </S.Container>
  );
}

const mapStateToProps = state => {
  return {
    searchResult: state.searchResult
  };
};

export default connect(
  mapStateToProps,
  { getListing }
)(withRouter(SearchBar));
