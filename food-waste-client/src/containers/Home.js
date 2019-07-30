import React from 'react';
import "./Home.css";
import SplashBanner from './SplashBanner';

function Home(props) {
    return (
        <div className="Home">
          <SplashBanner props={props}/>
        </div>
    );
}

export default Home;