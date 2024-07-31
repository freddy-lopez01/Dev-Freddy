// Carousel.js
import React from 'react';
import './Bio.css'; // Custom styles for the carouse
import profilePic from './assets/profile.png'

function Bio () {
    return (
        <>
          <div className="bio-container">
            <div className="bio-content">
                <div className="bio-text">
                    <h2>Freddy Lopez</h2>
                    <p>
                        Welcome to my bio! I specialize in configuring software for researchers on the cluster to optimize and solve issues with their workflows. I work with Linux and HPC in the research sector and love interacting with and helping customers find solutions to issues.
                    </p>
                </div>
                <div className="bio-photo">
                    <img src={profilePic} alt="Freddy Lopez" />
                </div>
            </div>
          </div>
        </>
    );
}

export default Bio 

