import React, { Component } from "react";
import { FormGroup, FormControl } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import "./AddIngredient.css";

export default class AddIngredient extends Component {
  constructor(props) {
    super(props);
  }

  

  render() {
    return (
      <div className="AddIngredient">
        <form onSubmit={this.props.onSubmit}>
          <FormGroup controlId="ingredientName">
            <FormControl
              onChange={this.props.onChange}
              value={this.props.ingredientName}
              type="text"
            />
          </FormGroup>
          <LoaderButton
            block
            bsStyle="primary"
            bsSize="large"
            disabled={!this.props.validateForm()}
            type="submit"
            isLoading={this.props.isLoading}
            text="Add to pantry"
            loadingText="Adding…"
          />
        </form>
      </div>
    );
  }
}
