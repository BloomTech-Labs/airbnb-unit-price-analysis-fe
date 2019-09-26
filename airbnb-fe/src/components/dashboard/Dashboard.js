import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getListings } from '../../store/actions';

import Header from './Header';
import Listings from './Listings';

const Dashboard = (props) => {
    const getListings = () => {
        props.getListings();
    };

    return (
        <DashboardContainer>
            <Header />
            <Listings 
                getListings={getListings}
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

const mapStateToProps = (state) => {
    return {
        isFetching: state.isFetching,
        listings: state.listings,
        error: state.error
    }
}

export default connect(mapStateToProps, { getListings })(Dashboard);