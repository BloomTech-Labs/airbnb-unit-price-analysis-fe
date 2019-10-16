import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { getListing, deleteLISTING } from "../../store/actions";
import { Link } from "react-router-dom";

import Header from "./Header";
import Listings from "./Listings";

const Dashboard = props => {
  const getListing = () => {
    props.getListings();
  };

  return (
    <DashboardContainer>
      <Header />
      <Listings
        getListing={getListing}
        deleteLISTING={props.deleteLISTING}
        isFetching={props.isFetching}
        listings={props.listings}
        error={props.error}
      />
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  padding: 0 11%;
  margin-top: 10%;
`;

const mapStateToProps = state => {
  console.log(state.listings);
  return {
    isFetching: state.isFetching,
    listings: state.listings,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getListing, deleteLISTING }
)(Dashboard);
