import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Error404 from "./containers/Error404";
import Login from "./containers/Login";
import AppliedRoute from "./components/AppliedRoute";
import ResetPassword from "./containers/ResetPassword";
import Settings from "./containers/Settings";


export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    {/* <UnauthenticatedRoute */}
    <AppliedRoute
    // Replace this^ later
      path="/login/reset"
      exact
      component={ResetPassword}
      props={childProps}
    />
    {/* <AuthenticatedRoute */}
    <AppliedRoute
    //Replace this^ later
      path="/settings"
      exact
      component={Settings}
      props={childProps}
    />
    <Route component={Error404} />
  </Switch>;
