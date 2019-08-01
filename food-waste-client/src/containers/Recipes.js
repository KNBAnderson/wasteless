import React, { Component } from "react";
import "./Recipes.css";


export default class Recipes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.recipes.length);
    
    return (
      <div className="recipes">
        <h1>Recipes</h1>
        {this.props.recipes.map(
          recipe =>
          this.props.recipes.length !==0
          ? <li 
            key = {recipe.id}>
            {recipe.title}
          </li>
          : <h4>
              You have no recipes in your pantry yet
            </h4>
        )}
      </div>
    );
  }
}

