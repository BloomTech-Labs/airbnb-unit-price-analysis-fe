import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { getListing } from '../../store/actions';
// import {Link} from 'react-router-dom';

import Header from './Header';
import Listings from './Listings';

export const Dashboard = (props) => {
    const getListing = () => {
        props.getListings();
    };

    return (
        <DashboardContainer>
            <Header />
            <Listings 
                getListing={getListing}
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

export default connect(mapStateToProps, { getListing })(Dashboard);