import React, { useState, useEffect } from "react";
import "./Home.css";
import Bio from './bio';
import ZigZagCards from './ZigZag';
import SocialGrid from './SocialGrid';

function Home () {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        "IMG_2068.jpg",
        "IMG_2669.jpg",
        "7G7A5513.jpg",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 8000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <>
            <div className="main" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
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
