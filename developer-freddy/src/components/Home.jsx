import React from "react";
import "./Home.css";
import Carousel from './Carousel';
import Bio from './bio';
import ZigZagCards from './ZigZag';


function Home () {
    return (
        <>
            <div className="main">
              <Carousel/>
              <div className="submain">
                <Bio/>
              </div>
              <ZigZagCards/>
            </div>
        </>
    )
}

export default Home
