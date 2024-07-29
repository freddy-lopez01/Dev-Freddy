// Carousel.js
import React from 'react';
import Slider from 'react-slick';
import './Carousel.css'; // Custom styles for the carousel

// Import the logo images
import instagramLogo from './assets/512-instagram.png';
import facebookLogo from './assets/512-facebook.png';
import youtubeLogo from './assets/512-youtube.png';
import linkedinLogo from './assets/512-linkedin.png';
import githubLogo from './assets/github-sign.png';
import tiktokLogo from './assets/tiktok.png';
// Add more logos as needed

const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const logos = [
        { src: instagramLogo, alt: 'Instagram', link: 'https://www.instagram.com/flscapes/?locale=hi_IN'},
        { src: facebookLogo, alt: 'Facebook', },
        { src: youtubeLogo, alt: 'YouTube', link:'https://www.youtube.com/@flscapes' },
        { src: linkedinLogo, alt: 'LinkedIn', link: 'https://www.linkedin.com/in/freddy-lopez-558639260/' },
        { src: githubLogo, alt: 'GitHub', link: 'https://github.com/freddy-lopez01'},
        { src: tiktokLogo, alt: 'Tiktok', link: 'https://www.tiktok.com/@freddylopez366?lang=en'},
        // Add more logos as needed
    ];

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {logos.map((logo, index) => (
                    <div key={index} className="logo-slide">
                        <a href={logo.link} target="_blank" rel="noopener noreferrer">
                            <img src={logo.src} alt={logo.alt} className="logo-image" />
                        </a>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;

