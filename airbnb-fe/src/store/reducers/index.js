import {

  FETCH_LISTING_START,
  FETCH_LISTING_SUCCESS,
  FETCH_LISTING_FAILURE,
  FETCH_PRICING_START,
  FETCH_PRICING_SUCCESS,
  FETCH_PRICING_FAILURE,
  FETCH_PRICING_COUNTS_START,
  FETCH_PRICING_COUNTS_SUCCESS,
  FETCH_PRICING_COUNTS_FAILURE,
  SIMULATION_API_CALL,
  GET_LISTINGS_START,
  GET_LISTINGS_FAILURE,
  GET_LISTINGS_SUCCESS,
  SET_SEARCH_MODE,
  SET_DEMO_MODE,
  DELETE_LISTING_START,
  DELETE_LISTING_SUCCESS,
  DELETE_LISTING_FAILURE,
  UPDATE_LISTING_START,
  UPDATE_LISTING_SUCCESS,
  UPDATE_LISTING_FAILURE,
} from "../actions";

const initialState = {
  isFetching: false,
  error: null,
  listings: [],
  searchResult: [],
  deletingListing: false,
  updatingListing: false,
    getListingsError: null,
    listingsRetrieved: false,
    retrievingListings: false,
  pricingPercentile: {
    percentiles: [],
    listing_percentile: null,
  },
  listingsPerPercentile:[],
  fetchingPricing: false,
  pricingFetched: false,
  fetchingPricingCounts: false,
  pricingCountsFetched: false,

};

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    // =========================================

    //FETCH LISTINGS
    case FETCH_LISTING_START:
      console.log("FETCHING_START!");
      return {
        ...state,
        isFetching: true
      };
    case FETCH_LISTING_SUCCESS:
      console.log("FETCHING_SUCCESS!");
      return {
        ...state,
        isFetching: false,
        searchResult: action.payload
      };
    case FETCH_LISTING_FAILURE:
      console.log("FETCHING_FAILURE!");
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };

    // =========================================
    
    //FETCH PRICING
    case FETCH_PRICING_START:
      console.log("FETCHING_PRICING_START!");
      return {
        ...state,
        fetchingPricing: true,
        pricingFetched: false
      };
    case FETCH_PRICING_SUCCESS:
      console.log("FETCHING_PRICING_SUCCESS!");
      return {
        ...state,
        fetchingPricing: false,
        pricingFetched: true,
        pricingPercentile: action.payload
      };
    case FETCH_PRICING_FAILURE:
      console.log("FETCHING_PRICING_FAILURE!");
      return {
        ...state,
        fetchingPricing: false,
        pricingFetched: false
      };
      
    // =========================================

    //FETCH PRICING
    case FETCH_PRICING_COUNTS_START:
      console.log("FETCHING_PRICING_COUNTS_START!");
      return {
        ...state,
        fetchingPricingCounts: true,
        pricingCountsFetched: false
      };
    case FETCH_PRICING_COUNTS_SUCCESS:
      console.log("FETCHING_PRICING_COUNTS_SUCCESS!");
      return {
        ...state,
        fetchingPricingCounts: false,
        pricingCountsFetched: true,
        listingsPerPercentile: action.payload
      };
    case FETCH_PRICING_COUNTS_FAILURE:
      console.log("FETCHING_PRICING_COUNTS_FAILURE!");
      return {
        ...state,
        fetchingPricingCounts: false,
        pricingFetchedCounts: false
      };
      
    // =========================================
    
    case SIMULATION_API_CALL:
      console.log("SIMULATION_API_CALL");
      console.log(action.payload);
      return {
        ...state,
        listings: action.payload,
        searchResult: []
      };
      
    case SIMULATION_API_CALL:
        console.log("SIMULATION_API_CALL");
        console.log(action.payload)
        return {
            ...state,
            listings: action.payload,
            searchResult: []
        }
    // =========================================
    
    case GET_LISTINGS_START: 
            return {
                ...state,
                retrievingListings: true
            }
        case GET_LISTINGS_FAILURE: 
            return {
                ...state,
                retrievingListings: false,
                getListingsError: action.payload
            }
        case GET_LISTINGS_SUCCESS:
            console.log("GET_LISTINGS");
            console.log(action.payload)
            if(action.payload.length === 0) {
                return {
                    ...state,
                    isSearchMode: true,
                    listingsRetrieved: true
                }
            }

            return {
                ...state,
                listings: action.payload,
                listingsRetrieved: true
            }
            
    // =========================================
    
    case SET_SEARCH_MODE:
      console.log("SET_SEARCH_MODE_ON");
      console.log(action.payload);
      return {
        ...state,
        isSearchMode: action.payload
      };
    case SET_DEMO_MODE:
      console.log("SET_DEMO_MODE_ON");
      console.log(action.payload);
      return {
        ...state,
        isDemo: action.payload
      };

    // =========================================
    
    //DELETE LISTING
    case DELETE_LISTING_START:
      return {
        ...state,
        deletingListing: true,
        error: null
      };
    case DELETE_LISTING_SUCCESS:
      return {
        ...state,
        error: null,
        deletingListing: false,
        listings: action.payload
      };
    case DELETE_LISTING_FAILURE:
      return {
        ...state,
        deletingListing: false,
        error: action.payload
      };

    // =========================================
    
    //UPDATE LISTING
    case UPDATE_LISTING_START:
      return {
        ...state,
        updatingListing: true,
        error: null
      };
    case UPDATE_LISTING_SUCCESS:
      return {
        ...state,
        error: null,
        updatingListing: false
      };
    case UPDATE_LISTING_FAILURE:
      return {
        ...state,
        updatingListing: false,
        error: action.payload
      };

    default:
      return state;
  }
};
