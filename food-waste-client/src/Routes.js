import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Error404 from "./containers/Error404";
import Login from "./containers/Login";
import AppliedRoute from "./components/AppliedRoute";
import ResetPassword from "./containers/ResetPassword";
import Settings from "./containers/Settings";
import ChangePassword from "./containers/ChangePassword";
import ChangeEmail from "./containers/ChangeEmail";
import Signup from "./containers/Signup";
import Pantry from "./containers/Pantry";
import Recipes from "./containers/Recipes";

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <AppliedRoute path="/signup" exact component={Signup} props={childProps} />
    <AppliedRoute path="/ingredients" exact component={Pantry} props={childProps} />
    <AppliedRoute path="/recipes" exact component={Recipes} props={childProps}/>
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
    {/* <AuthenticatedRoute */}
    <AppliedRoute
      path="/settings/password"
      exact
      component={ChangePassword}
      props={childProps}
    />
    {/* <AuthenticatedRoute */}
    <AppliedRoute
      path="/settings/email"
      exact
      component={ChangeEmail}
      props={childProps}
    />
    <Route component={Error404} />
  </Switch>;
