import {
    FETCH_LISTING_START,
    FETCH_LISTING_SUCCESS,
    FETCH_LISTING_FAILURE,
    SIMULATION_API_CALL
} from '../actions';

const initialState = {
    isFetching: false,
    error: null,
    listings: [],
    searchResult: [],
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_LISTING_START:
            console.log("FETCHING_START!");
            return {
                ...state,
                isFetching: true
            }
        case FETCH_LISTING_SUCCESS:
            console.log("FETCHING_SUCCESS!");
            return {
                ...state,
                isFetching: false,
                searchResult: action.payload
            }
        case FETCH_LISTING_FAILURE:
            console.log("FETCHING_FAILURE!");
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case SIMULATION_API_CALL:
            console.log("SIMULATION_API_CALL");
            return {
                ...state,
                listings: action.payload
            }
        default:
            return state;
    }
};