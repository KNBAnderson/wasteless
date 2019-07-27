import React, { Component } from "react";
import AddIngredient from "./AddIngredient";
import IngredientsList from "./IngredientsList"
import { withRouter } from "react-router-dom";

class Pantry extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: null,
      ingredients: []
    };
  }

  
  render() {
    return (
      <div className="Pantry">
      {/* <IngredientsList ingredients={this.state.ingredients}/> */}
      <AddIngredient childProps={this.props}/>
      </div>
    );
  }
}

export default withRouter(Pantry);