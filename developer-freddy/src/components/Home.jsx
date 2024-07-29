import React from "react";
import "./Home.css";
import Carousel from './Carousel';
import Bio from './bio';


function Home () {
    return (
        <>
            <div className="main">
              <Carousel/>
              <div className="submain">
                <Bio/>
              </div>
            </div>
        </>
    )
}

export default Home
