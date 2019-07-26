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
      (ingredient, i) =>
        i !== 0
          ? <LinkContainer
              key={ingredient.ingredientId}
              to={`/ingredients/${ingredient.ingredientId}`}
            >
              <ListGroupItem header={ingredient.content.trim().split("\n")[0]}>
                {"Created: " + new Date(ingredient.createdAt).toLocaleString()}
              </ListGroupItem>
            </LinkContainer>
          : <LinkContainer
              key="new"
              to="/ingredients/new"
            >
              <ListGroupItem>
                <h4>
                  <b>{"\uFF0B"}</b> Create a new note
                </h4>
              </ListGroupItem>
            </LinkContainer>
    );
  }

  async componentDidMount() {
    if (!this.props.isAuthenticated) {
      return;
    }
    try {
      const ingredients = await this.ingredients();
      this.setState({ ingredients });
    } catch (e) {
      alert(e);
    }
    this.setState({ isLoading: false });
  }
  
  ingredients() {
    return API.get("ingredients", "/ingredients");
  }

  render() {
    return (
      <div className="ingredients">
        <PageHeader>What's in your pantry</PageHeader>
        <ListGroup>
          {!this.state.isLoading && this.renderIngredientsList(this.state.ingredients)}
        </ListGroup>
      </div>
    );
  }
}