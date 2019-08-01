import React, { Component } from "react";
import AddIngredient from "./AddIngredient";
import IngredientsList from "./IngredientsList"
import { API } from "aws-amplify";
import { Button } from "react-bootstrap";
import "./Pantry.css";
import { Link } from 'react-router-dom';

class Pantry extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      buttonIsLoading: null,
      ingredientName: "",
      listIsLoading: true,
      ingredients: []
    };
  }
  
  getIngredients() {
    return API.get("ingredients", "/ingredients");
  }
  
  async createIngredientList() {
    const list = await this.getIngredients();
    let ingredientArray = [];
    list.forEach(ingredientObj => {
      if (ingredientObj.ingredientName) {
        ingredientArray.push(ingredientObj)
      }
    });
    return ingredientArray
  }
  
  async componentDidMount() {
    if (!this.props.isAuthenticated) {
      return;
    }
    try {
      const ingredients = await this.createIngredientList();
      this.setState({ ingredients });
    } catch (e) {
      alert(e);
    }
    this.setState({ listIsLoading: false });
  }
  
  //AddIngredient functions 
  
  validateForm =() => {
    return this.state.ingredientName.length > 0;
  }
  
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  
  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ buttonIsLoading: true });
    try {
      await this.addIngredient({
        ingredientName: this.state.ingredientName
      });
      this.setState({ ingredientName: ""})
      this.setState({ buttonIsLoading: false });
      const ingredients = await this.createIngredientList();
      this.setState({ ingredients });
    } catch (e) {
      alert(e);
      this.setState({ buttonIsLoading: false });
    }
  }
  
  addIngredient(ingredient) {
    return API.post("ingredients", "/ingredients", {
      body: ingredient
    });
  }

  getIngredientNames() {
    let apiArray = [];
    this.state.ingredients.forEach(ingredient => {
      apiArray.push(ingredient.ingredientName)
    });
    return apiArray.join();
  }
  

  render() {
    return (
      <div className="Pantry">
      <IngredientsList ingredients={this.state.ingredients} listIsLoading={this.state.listIsLoading} childProps={this.props}/>
      <AddIngredient childProps={this.props} ingredientName={this.state.ingredientName} isLoading={this.state.buttonIsLoading} onSubmit={this.handleSubmit} onChange={this.handleChange} validateForm={this.validateForm}/>
      <Link to="/recipes">
        <Button onClick={() => this.props.handleAPICall(this.getIngredientNames())}>Recipes</Button>
        </Link>
      </div>
    );
  }
}

export default Pantry;