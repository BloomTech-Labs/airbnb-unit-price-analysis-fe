import React, { useEffect } from 'react';

import Listing from './Listing';

const Listings = (props) => {
    useEffect(() => {
        props.getListings();
    }, []);

    return (
        <div>
            {props.isFetching && <h2>Loading...</h2>}

            {props.listings.length !== 0 && <Listing listing={props.listings[0]} />}

            {/* The code below is for when we're able to get multiple listings
            instead of time intervals of the same listing. */}
            
            {/* {props.listings.length !== 0 && props.listings.map(listing => (
                <Listing key={listing.id} listing={listing} />
            ))} */}
        </div>
    );
};

export default Listings;