import React from 'react';
import styled from 'styled-components';

const Listing = ({ listing }) => {
    return (
        <ListingCard>
            <Picture src={listing.picture_url} alt="#" />
            <ListingDetails>
                <h2>{listing.name}</h2>
                <Location>{listing.street}</Location>
                <p>{listing.guests_included} Guests • {listing.bedrooms} Bedrooms • {listing.beds} Beds • {listing.bathrooms} Baths </p>
            </ListingDetails>
        </ListingCard>
    );
};

const ListingCard = styled.div`
    border: 1px solid #E5E5E5;
    border-radius: 3px;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
    padding: 6px;
    display: flex;
    margin-bottom: 25px;
`;

const Picture = styled.img`
    height: 175px;
    border-radius: 3px;
    margin-right: 20px;
`;

const ListingDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
        margin-bottom: 0;
    }
`;

const Location = styled.p`
    margin-top: 9px;
    font-size: 0.85rem;
`;

export default Listing;