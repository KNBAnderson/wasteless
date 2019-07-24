import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Error404 from "./containers/Error404";

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route component={Error404} />
  </Switch>;