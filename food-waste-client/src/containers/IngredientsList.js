import React, { Component } from "react";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
import "./IngredientsList.css";
import { API } from "aws-amplify";
import { LinkContainer } from "react-router-bootstrap";


export default class IngredientsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      ingredients: []
    };
  }

  renderIngredientsList(ingredients) {
    return [{}].concat(ingredients).map(
      (ingredient) =>
      console.log(ingredient)
        // i !== 0
        //   ? <ListGroupItem header={ingredient.split("\n")[0]}>
        //     {"Created: " + new Date(ingredient.createdAt).toLocaleString()}
        //   </ListGroupItem>
        //   : <ListGroupItem>
        //       <h4>
        //         You have no ingredients in your pantry yet
        //       </h4>
        //     </ListGroupItem>
    );
  }

  async componentDidMount() {
    if (!this.props.childProps.isAuthenticated) {
      return;
    }
    try {
      const ingredients = await this.getIngredients();
      this.setState({ ingredients });
    } catch (e) {
      alert(e);
    }
    this.setState({ isLoading: false });
  }
  
  getIngredients() {
    return API.get("ingredients", "/ingredients");
  }

  render() {
    this.getIngredients()
    return (
      <div className="ingredients">
        <PageHeader>What's in your pantry</PageHeader>
        <ListGroup>
          {this.renderIngredientsList(this.state.ingredients)}
        </ListGroup>
      </div>
    );
  }
}