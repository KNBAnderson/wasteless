import React, { Component } from "react";
import "./App.css";
import TopNav from "./containers/TopNav"

class App extends Component {
  render() {
    return (
      <div className="App container">
      <TopNav />
      </div>
    );
  }
}

export default App;