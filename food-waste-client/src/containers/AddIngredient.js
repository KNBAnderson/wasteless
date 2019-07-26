import React, { Component } from "react";
import { FormGroup, FormControl } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import "./AddIngredient.css";
import { API } from "aws-amplify";

export default class AddIngredient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: null,
      ingredient: ""
    };
  }

  validateForm() {
    return this.state.ingredient.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    try {
      await this.addIngredient({
        ingredient: this.state.ingredient
      });
      this.props.history.push("/");
    } catch (e) {
      alert(e);
      this.setState({ isLoading: false });
    }
  }

  addIngredient(ingredient) {
    return API.post("ingredients", "/ingredients", {
      body: ingredient
    });
  }

  render() {
    return (
      <div className="AddIngredient">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="ingredient">
            <FormControl
              onChange={this.handleChange}
              id = "ingredient"
              value={this.state.ingredient}
              type="text"
            />
          </FormGroup>
          <LoaderButton
            block
            bsStyle="primary"
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            isLoading={this.state.isLoading}
            text="Add to pantry"
            loadingText="Adding…"
          />
        </form>
      </div>
    );
  }
}
