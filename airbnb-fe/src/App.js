import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";
import ExternalApi from "./components/ExternalApi";
import Calendar from "./components/calendar/Calendar";
import Landing from "./components/landing/Landing";
import Confirmation from "./components/confirmation/Confirmation";
import Listing from "./components/listing/Listing";
import "./index.css";

import { useAuth0 } from "./react-auth0-wrapper";
import styled from "styled-components";

const MainContainerDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

function App() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (
    <MainContainerDiv className="App">
      <Router>
        <header>
          <NavBar />
          {isAuthenticated && (
            <span>
              <Calendar />
            </span>
          )}
        </header>
        <Switch>
          {/* <Route path="/" exact component={Confirmation} /> */}
          {/* <Route path="/" exact component={Calendar} /> */}
          {/* <Route path="/" exact component={Listing} /> */}
          <Route path="/" exact component={Landing} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/external-api" component={ExternalApi} />
        </Switch>
      </Router>
    </MainContainerDiv>
  );
}

export default App;
