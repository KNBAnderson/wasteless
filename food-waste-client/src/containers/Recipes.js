import React, { Component } from "react";
import "./Recipes.css";
import { Card, CardImg, CardText, CardBody,
 CardSubtitle } from 'reactstrap';

function findUsedIngredients(recipe) {
  let array = [];
  recipe.usedIngredients.forEach(element => {
    array.push(element.name);
  });
  return array.join(", ");
}

function findMissedIngredients(recipe) {
  let array = [];
  recipe.missedIngredients.forEach(element => {
    array.push(element.name);
  });
  return array.join(", ");
}

export default class Recipes extends Component {
  // constructor(props) {
  //   super(props);
  // }


  render() {
    console.log(this.props.recipes.length);
    
    return (
      <div className="recipes">
        <h1>Recipes</h1>
        <div className="recipes-container">
          {this.props.recipes.map(
            recipe =>
            this.props.recipes.length !==0
            ? <Card>
            <CardImg top width="100%" src={recipe.image} alt="Card image cap" />
            <CardBody>
              <h3>{recipe.title}</h3>
              <CardSubtitle>You have {findUsedIngredients(recipe)}</CardSubtitle>
              <hr/>
              <CardText>You will need {findMissedIngredients(recipe)}</CardText>
            </CardBody>
            </Card>
            : <h4>
                You have no recipes in your pantry yet
              </h4>
          )}
        </div>
      </div>
    );
  }
}

