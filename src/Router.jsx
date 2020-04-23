import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TheNavbar from "./Navbar";
import Home from "./Home";
import Pokemon from "./Pokemon";

function Router() {
  return (
    <BrowserRouter>
      <TheNavbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:pokemon" component={Pokemon} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
