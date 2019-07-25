import React, { Component } from "react";
import "./App.css";
import TopNav from "./containers/TopNav";
import Routes from "./Routes";

class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      isAuthenticated: false
    };
  }
  
  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  handleLogout = event => {
    this.userHasAuthenticated(false);
    console.log(this.state.isAuthenticated)
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };

    return (
      <div className="App container">
      <TopNav isAuthenticated={this.state.isAuthenticated} onLogout={this.handleLogout}/>
      <Routes childProps={childProps} />
      </div>
    );
  }
}

export default App;