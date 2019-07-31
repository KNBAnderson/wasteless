import React from 'react';
import "./Home.css";
import SplashBanner from './SplashBanner';
import About from './About';

function Home(props) {
    return (
        <div className="Home">
          <SplashBanner props={props}/>
          <About/>
        </div>
    );
}

export default Home;