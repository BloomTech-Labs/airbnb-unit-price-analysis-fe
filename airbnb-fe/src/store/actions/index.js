import axios from 'axios';

export const FETCH_LISTING_START = "FETCH_LISTING_START";
export const FETCH_LISTING_SUCCESS = "FETCH_LISTING_SUCCESS";
export const FETCH_LISTING_FAILURE = "FETCH_LISTING_FAILURE";

export const SIMULATION_API_CALL = "SIMULATION_API_CALL";

export const getListings = (id) => (dispatch) => {
    // const id = 10280848;
    // const id = 20685563;

    dispatch({ type: FETCH_LISTING_START });
    axios.get(`https://cors-anywhere.herokuapp.com/http://labsairbnb-env.nrn8awhuyg.us-west-1.elasticbeanstalk.com/data?id=${id}`)
        .then(response => {
            console.log(response)
            dispatch({ type: FETCH_LISTING_SUCCESS, payload: response.data })
        })
        .catch(error => {
            console.log(error)
            dispatch({ type: FETCH_LISTING_FAILURE, payload: error });
        })
}

export const simulateApiCall = (listing) => (dispatch) => {
    // development substitute until we deploy backend
    dispatch({ type: SIMULATION_API_CALL, payload: [listing, listing, listing]})
}