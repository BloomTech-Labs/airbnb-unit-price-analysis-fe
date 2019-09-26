import axios from 'axios';

export const FETCH_LISTING_START = "FETCH_LISTING_START";
export const FETCH_LISTING_SUCCESS = "FETCH_LISTING_SUCCESS";
export const FETCH_LISTING_FAILURE = "FETCH_LISTING_FAILURE";

export const getListings = () => (dispatch) => {
    dispatch({ type: FETCH_LISTING_START });

    // ID will eventually be dynamic.
    axios.get("https://cors-anywhere.herokuapp.com/http://labsairbnb-env.nrn8awhuyg.us-west-1.elasticbeanstalk.com/data?id=20685563")
        .then(response => {
            dispatch({ type: FETCH_LISTING_SUCCESS, payload: response.data })
        })
        .catch(error => {
            dispatch({ type: FETCH_LISTING_FAILURE, payload: error });
        })
}