import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Error404 from "./containers/Error404";
import Login from "./containers/Login";

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route component={Error404} />
  </Switch>;