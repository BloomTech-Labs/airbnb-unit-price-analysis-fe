import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Profile from "./components/Profile";
import PrivateRoute from './components/PrivateRoute';
import ExternalApi from "./components/ExternalApi";
import Calendar from "./components/Calendar";


function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <NavBar />
          <Calendar />
        </header>
        <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/external-api" component={ExternalApi} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;