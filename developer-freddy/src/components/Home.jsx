import React from "react";
import "./Home.css";
import Carousel from './Carousel';
import Bio from './bio';
import ZigZagCards from './ZigZag';
import SocialGrid from './SocialGrid';

function Home () {
    return (
        <>
            <div className="main">
              <div className="submain">
                <Bio/>
              </div>
              <ZigZagCards/>
              <div className="social-comp">
                <h1>Find me on...</h1>
                <SocialGrid/>
              </div>

            </div>
        </>
    )
}

export default Home
