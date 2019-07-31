import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import "./SplashBanner.css";

function SplashBanner(props) {

    return (
        <div className="lander">
        <h1 className="logo">WASTE<span>LESS</span></h1>
        {!props.props.isAuthenticated ? <div id="banner-buttons">
            <Link to="/signup">
                <Button id="signup-button">Create an account</Button>
            </Link>
            <Link to="/login">
                <Button id="login-button">Login to your account</Button>
            </Link>
        </div>
        :<div id="banner-buttons">
            <Link to="/ingredients">
                <Button id="pantry-button">Manage your pantry</Button>
            </Link>
        </div>}
      </div>
    );
}

export default SplashBanner;