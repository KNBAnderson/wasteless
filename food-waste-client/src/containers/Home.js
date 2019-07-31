import React from 'react';
import "./Home.css";
import SplashBanner from './SplashBanner';
import About from './About';
import RecipeBanner from './RecipeBanner';

function Home(props) {
    return (
        <div className="Home">
          <SplashBanner props={props}/>
          <About/>
          <RecipeBanner/>
        </div>
    );
}

export default Home;