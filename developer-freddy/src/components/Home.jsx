import React from "react";
import "./Home.css";
import Carousel from './Carousel';
import Bio from './bio';
import ZigZagCards from './ZigZag';


function Home () {
    return (
        <>
            <div className="main">
              <div className="submain">
                <Carousel/>
                <Bio/>
              </div>
              <ZigZagCards/>
            </div>
        </>
    )
}

export default Home
