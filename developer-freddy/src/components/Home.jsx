import React from "react";
import "./Home.css";
import Carousel from './Carousel';
import Bio from './bio';


function Home () {
    return (
        <>
            <div className="main">
              <Carousel/>
              <Bio/>
            </div>
        </>
    )
}

export default Home
