import React, { Component } from "react";
import { PageHeader } from "react-bootstrap";
import "./IngredientsList.css";


export default class IngredientsList extends Component {
  constructor(props) {
    super(props);
  }

  renderIngredientsList(ingredients) {
    return [{}].concat(ingredients).map(
      (ingredient) =>
      this.props.ingredients.length !== 0
          ? <li 
            id = {ingredient.ingredientId}>
            {ingredient.ingredientName}
          </li>
          : <h4>
              You have no ingredients in your pantry yet
            </h4>
    );
  }

  renderLoadMessage() {
    return (
      <h3>Your list is loading...</h3>
    )
  }

  render() {
    return (
      <div className="ingredients">
        <PageHeader>What's in your pantry</PageHeader>
        <ul>
          {this.props.listIsLoading ? this.renderLoadMessage(): this.renderIngredientsList(this.props.ingredients)}
        </ul>
      </div>
    );
  }
}