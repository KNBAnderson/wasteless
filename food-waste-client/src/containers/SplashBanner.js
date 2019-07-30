import React from 'react';
import { Link } from 'react-router-dom';
import "./SplashBanner.css";
import { Button } from "react-bootstrap";
import PropTypes from 'prop-types';

function SplashBanner(props) {

    return (
        <div className="lander">
        <h1 className="logo">WASTE<span>LESS</span></h1>
        <div id="banner-buttons">
            <Link to="/signup">
                <Button id="signup-button">Create an account</Button>
            </Link>
            <Link to="/login">
                <Button id="login-button">Login to your account</Button>
            </Link>
        </div>
      </div>
    );
}

SplashBanner.propTypes = {
  isAuthenticated: PropTypes.bool,
  onLogout: PropTypes.func
};

export default SplashBanner;