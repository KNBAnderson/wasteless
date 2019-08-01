import React, { Component } from "react";
import "./App.css";
import TopNav from "./containers/TopNav";
import Routes from "./Routes";
import { Auth } from "aws-amplify";
import { withRouter } from "react-router-dom";
import config from "./config";
var axios = require("axios");

class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      isAuthenticated: false,
      isAuthenticating: true,
      recipes: []
    };
  }

  async componentDidMount() {
    try {
      await Auth.currentSession();
      this.userHasAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
  
    this.setState({ isAuthenticating: false });
  }
  
  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  handleLogout = async event => {
    await Auth.signOut();
    this.userHasAuthenticated(false);
    this.props.history.push("/login");
  }

  handleAPICall = ingredients =>{
    const url = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients"
    axios.get(url, {
      method: 'get',
      params: {
        "number": "30",
        "ranking": "1",
        "ignorePantry": "false",
        "ingredients": ingredients
      },
      headers: {
        "x-rapidapi-host": config.recipeAPI.HOST,
        "x-rapidapi-key": config.recipeAPI.KEY
      },
    }).then((response) => {
      let recipes = response.data;
      this.setState({ recipes: recipes });
      console.log(this.state.recipes)
    })
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated,
      handleAPICall: this.handleAPICall,
      recipes: this.state.recipes
    };

    return (
      !this.state.isAuthenticating &&
      <div className="App notContainer">
      <TopNav isAuthenticated={this.state.isAuthenticated} onLogout={this.handleLogout}/>
      <Routes childProps={childProps} />
      </div>
    );
  }
}

export default withRouter(App);