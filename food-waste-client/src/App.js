import React, { Component } from "react";
import "./App.css";
import TopNav from "./containers/TopNav";
import Routes from "./Routes";
import { Auth } from "aws-amplify";
import { withRouter } from "react-router-dom";

class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      isAuthenticated: false,
      isAuthenticating: true
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
    // this.props.history.push("/login");
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };

    return (
      !this.state.isAuthenticating &&
      <div className="App container">
      <TopNav isAuthenticated={this.state.isAuthenticated} onLogout={this.handleLogout}/>
      <Routes childProps={childProps} />
      </div>
    );
  }
}

export default withRouter(App);