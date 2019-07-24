import React, { Component } from "react";
import "./App.css";
import TopNav from "./containers/TopNav";
import Routes from "./Routes";

class App extends Component {
  render() {
    return (
      <div className="App container">
      <TopNav />
      <Routes />
      </div>
    );
  }
}

export default App;