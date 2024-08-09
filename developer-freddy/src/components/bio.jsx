// Carousel.js
import React from 'react';
import './Bio.css'; // Custom styles for the carouse

function Bio () {
    return (
        <>
          <div className="bio-container">
            <div className="bio-content">
                <div className="bio-text">
                    <h1>Hi, I'm Freddy! Welcome!</h1>
                    <p>
                      I am a local of Oregon and the Pacific Northwest. I graduated from the University of Oregon with a degree in computer science and a minor in chemistry. I currently work as an HPC Systems Administrator with the Research Advanced Computing Services (RACS) team at the U of O. Working isn't all I do; I have many different hobbies and skills that I have picked up over the years, making life both fulfilling and exciting.
                    </p>
                    <p>
                      I throughly enjoy HPC adminstration as I get to interact with researchers daily and help them with any needs or issues that they have; from Software to workflow optimizations. 
                    </p>
                    <p>
                      HPC isn't the only thing I enjoy doing, keep scrolling to learn more about me and who I am as a person outside of the office!
                    </p>
                </div>
            </div>
          </div>
        </>
    );
}

export default Bio 

