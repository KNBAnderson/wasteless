import React from 'react';
import { Link } from 'react-router-dom';
import "./RecipeBanner.css";
import { Button } from "react-bootstrap";


function RecipeBanner() {

  
    return (
      <div className="RecipeBanner">
        <div id="recipe-banner-text">
          <h2>Here's how you can start wasting less</h2>
          <h4>Use the food you already have and make something delicious!</h4>
        </div>
        <Link to="/ingredients"><Button>Start searching for recipes</Button></Link>
      </div>
    );
}

export default RecipeBanner;