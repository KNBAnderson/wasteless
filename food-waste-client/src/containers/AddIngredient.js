import React, { Component } from "react";
import { FormGroup, FormControl } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import "./AddIngredient.css";
import { API } from "aws-amplify";
import { s3Upload } from "../libs/awsLibs";

export default class AddIngredient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: null,
      ingredientName: ""
    };
  }

  validateForm() {
    return this.state.ingredientName.length > 0;
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
      // const ingredientKey = await s3Upload(this.state.ingredientName);
      await this.addIngredient({
        // ingredientKey,
        ingredientName: this.state.ingredientName
      });
      this.setState({ isLoading: false });
      this.setState({ ingredientName: ""})
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
    console.log(this.props.childProps)
    return (
      <div className="AddIngredient">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="ingredientName">
            <FormControl
              onChange={this.handleChange}
              value={this.state.ingredientName}
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
