import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const Listing = ({ listing, history }) => {
  const redirectToCalendar = e => {
    e.preventDefault();
    history.push({
      pathname: "/listing",
      state: { listing: listing }
    });
  };

  return (
    <ListingCard onClick={e => redirectToCalendar(e)}>
      <Picture src={listing.picture_url} alt="#" />
      <ListingDetails>
        <h2>{listing.name}</h2>
        <Location>{listing.street}</Location>
        <p>
          {listing.guests_included} Guests • {listing.bedrooms} Bedrooms •{" "}
          {listing.beds} Beds • {listing.bathrooms} Baths{" "}
        </p>
        <ViewMore>View More</ViewMore>
      </ListingDetails>
    </ListingCard>
  );
};

const ListingCard = styled.div`
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
  padding: 6px 18px 6px 6px;
  display: flex;
  margin-bottom: 25px;
  cursor: pointer;
`;

const Picture = styled.img`
  height: 175px;
  border-radius: 3px;
  margin-right: 20px;
`;

const ListingDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h2 {
    margin-bottom: 0;
  }
`;

const Location = styled.p`
  margin-top: 9px;
  font-size: 0.85rem;
`;

const ViewMore = styled.h4`
  color: #00bfa5;
  margin-bottom: 0;
  margin-top: 10px;
  margin-left: auto;
  cursor: pointer;
`;

export default withRouter(Listing);
