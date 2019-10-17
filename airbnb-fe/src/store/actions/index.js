import axios from "axios";

export const FETCH_LISTING_START = "FETCH_LISTING_START";
export const FETCH_LISTING_SUCCESS = "FETCH_LISTING_SUCCESS";
export const FETCH_LISTING_FAILURE = "FETCH_LISTING_FAILURE";

export const SIMULATION_API_CALL = "SIMULATION_API_CALL";
export const SET_SEARCH_MODE = "SET_SEARCH_MODE";
export const SET_DEMO_MODE = "SET_DEMO_MODE";

export const GET_LISTINGS_START = "GET_LISTINGS_START";
export const GET_LISTINGS_FAILURE = "GET_LISTINGS_FAILURE";
export const GET_LISTINGS_SUCCESS = "GET_LISTINGS_SUCCESS";

let local = false;

//+++++++++++++++++++++++++++++++
// F O R   D E V E L O P M E N T
//*******************************
// local = true; //<- uncomment for local BE
//+++++++++++++++++++++++++++++++

let url;

if (local) {
  url = "http://localhost:8000/";
} else {
  url = "https://pricemyairbnb.herokuapp.com/";
}

export const getListing = id => dispatch => {
  // const id = 10280848;
  // const id = 20685563;

  dispatch({ type: FETCH_LISTING_START });
  axios
    .get(
      `http://LabsAirbnb-env-dev.us-west-1.elasticbeanstalk.com/data?id=${id}`
    )
    .then(response => {
      console.log(response);
      dispatch({ type: FETCH_LISTING_SUCCESS, payload: response.data });
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: FETCH_LISTING_FAILURE, payload: error });
    });
};

export const saveListing = (listing, email) => dispatch => {
  axios
    .post(`${url}api/listings/save`, { ...listing, user_email: email })
    .then(resp => {
      console.log(resp);
      dispatch({ type: SIMULATION_API_CALL, payload: resp.data });
    })
    .catch(err => {
      console.log(err);
    });
};

export const getListings = email => dispatch => {
  console.log("email", email);

  dispatch({ type: GET_LISTINGS_START });

  axios
    .post(`${url}api/listings/retrieve`, { user_email: email })
    .then(resp => {
      console.log(resp);
      dispatch({ type: GET_LISTINGS_SUCCESS, payload: resp.data });
    })
    .catch(err => {
      dispatch({ type: GET_LISTINGS_FAILURE, payload: err });
      console.log(err);
    });
};

export const setSearchMode = bool => dispatch => {
  console.log("SEARCH MODE TRIGGER");
  dispatch({ type: SET_SEARCH_MODE, payload: bool });
};

export const setDemo = bool => dispatch => {
  console.log("SET DEMO TRIGGER");
  dispatch({ type: SET_DEMO_MODE, payload: bool });
};

//   dispatch({ type: FETCH_LISTING_START });
//   axios
//     .get(
//       `https://cors-anywhere.herokuapp.com/http://LabsAirbnb-env-dev.us-west-1.elasticbeanstalk.com/data?id=${id}`
//     )
//     .then(response => {
//       console.log(response);
//       dispatch({ type: FETCH_LISTING_SUCCESS, payload: response.data });
//     })
//     .catch(error => {
//       console.log(error);
//       dispatch({ type: FETCH_LISTING_FAILURE, payload: error });
//     });
// ;

// export const saveListing = (listing, email) => dispatch => {
//   axios
//     .post(`${url}api/listings/save`, { ...listing, user_email: email })
//     .then(resp => {
//       console.log(resp);
//       dispatch({ type: SIMULATION_API_CALL, payload: resp.data });
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };

// export const getListings = email => dispatch => {
//   console.log("IN ACTION TRIGGER");

//   axios
//     .post(`${url}api/listings/retrieve`, { user_email: email })
//     .then(resp => {
//       console.log(resp);
//       dispatch({ type: GET_LISTINGS, payload: resp.data });
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };

// export const setSearchMode = bool => dispatch => {
//   console.log("SEARCH MODE TRIGGER");
//   dispatch({ type: SET_SEARCH_MODE, payload: bool });
// };

// export const setDemo = bool => dispatch => {
//   console.log("SET DEMO TRIGGER");
//   dispatch({ type: SET_DEMO_MODE, payload: bool });
// };

export const DELETE_LISTING_START = "DELETE_LISTING_START";
export const DELETE_LISTING_SUCCESS = "DELETE_LISTING_SUCCESS";
export const DELETE_LISTING_FAILURE = "DELETE_LISTING_FAILURE";

export const deleteLISTING = id => dispatch => {
  axios
    .delete(`${url}api/listings/${id}`, id)

    .then(res => {
      dispatch({ type: DELETE_LISTING_SUCCESS, payload: res.data });
      console.log(res.data);
    })

    .catch(err => {
      console.log(err.response);
      dispatch({ type: DELETE_LISTING_FAILURE });
    });
  console.log(id);
};

export const UPDATE_LISTING_START = "UPDATE_LISTING_START";
export const UPDATE_LISTING_SUCCESS = "UPDATE_LISTING_SUCCESS";
export const UPDATE_LISTING_FAILURE = "UPDATE_LISTING_FAIL";

export const updateLISTING = updatedListing => dispatch => {
  axios
    .put((`${url}/api/listings/:id`, updatedListing))

    .then(res => {
      console.log(res);
      dispatch({ type: UPDATE_LISTING_SUCCESS, payload: res.data });
    })

    .catch(err => {
      console.log(err.response);
      dispatch({ type: UPDATE_LISTING_FAILURE, payload: err.response });
    });
};
