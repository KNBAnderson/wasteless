import React, { Component } from "react";
import AddIngredient from "./AddIngredient";
import IngredientsList from "./IngredientsList"
import { withRouter } from "react-router-dom";

class App extends Component {

  render() {
    return (
      <div className="Pantry">
      <IngredientsList/>
      <AddIngredient/>
      </div>
    );
  }
}

export default withRouter(App);