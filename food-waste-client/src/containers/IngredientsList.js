import React, { Component } from "react";
import "./IngredientsList.css";


export default class IngredientsList extends Component {
  // constructor(props) {
  //   super(props);
  
  // }

  renderIngredientsList(ingredients) {
    return ingredients.map(
      (ingredient) =>
      this.props.ingredients.length !== 0 && !this.props.listIsLoading
          ? <li 
            key = {ingredient.ingredientId}>
            {ingredient.ingredientName}
          </li>
          : <h4>
              You have no ingredients in your pantry yet
            </h4>
    );

  }

  renderLoadMessage() {
    return (
      <h4>Your list is loading...</h4>
    )
  }

  render() {
    return (
      <div className="ingredients">
        <h1>What's in your pantry</h1>
        <ul>
          {this.props.listIsLoading ? this.renderLoadMessage(): this.renderIngredientsList(this.props.ingredients)}
        </ul>
      </div>
    );
  }
}