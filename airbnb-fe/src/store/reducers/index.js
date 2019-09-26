import {
    FETCH_LISTING_START,
    FETCH_LISTING_SUCCESS,
    FETCH_LISTING_FAILURE
} from '../actions';

const initialState = {
    isFetching: false,
    error: null,
    listings: []
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
                listings: action.payload
            }
        case FETCH_LISTING_FAILURE:
            console.log("FETCHING_FAILURE!");
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
};