import React, { useEffect, useRef, useState } from 'react';
import './ZigZag.css';

const cards = [
    {
        img: 'datacenter.jpeg',
        title: '..a Undergraduate',
        description: 'As a HPC Systems Administrator, alot of my time is spent within the Datacenter loctated beneath Allen Hall on the beautiful Campus of the University of Oregon. You can find me troubleshooting nodes, replacing hardware, configuring switches, and installing brand new hardware.',
        id: 1
    },
    {
        img: 'duo-tank.jpg',
        title: '..a Aquascaper',
        description: 'Aquascaping is my passion and the art of arranging aquatic plants, rocks, stones, and driftwood to create a beautiful underwater landscape. Whether I’m aiming for a simple, minimalistic design or a complex setup that resembles a natural environment like a forest or river, each project allows me to express my creativity. It requires me to be detail-oriented and patient, but the result is always worth the effort—a stunning piece of nature that brings tranquility and beauty into my home.',
        id: 2
    },
    {
        img: 'tetra.jpg',
        title: '..a Photographer',
        description: 'Photography is a powerful medium that allows me to capturethe beauty of the world around me. I especially enjoy using it to document my aquariums and all the life within them. Each time I take a photo, I aim to showcase the intricate details of the plants, the graceful movement of the fish, and the overall harmony of the overall design. It’s a fulfilling way to combine my love for aquascaping with my passion for nature photography.',
        id: 3
    },
    {
        img: 'mag.png',
        title: '..a Designer',
        description: 'new content here',
        id: 4
    }
];

const ZigZagCards = () => {
    const [isVisible, setIsVisible] = useState(Array(cards.length).fill(false));
    const cardRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = cardRefs.current.indexOf(entry.target);
                    if (index !== -1) {
                        setIsVisible((prev) => {
                            const newVisible = [...prev];
                            newVisible[index] = true; // Mark the card as visible
                            return newVisible;
                        });
                        observer.unobserve(entry.target); // Stop observing once visible
                    }
                }
            });
        });

        cardRefs.current.forEach((card) => {
            if (card) {
                observer.observe(card);
            }
        });

        return () => {
            cardRefs.current.forEach((card) => {
                if (card) {
                    observer.unobserve(card);
                }
            });
        };
    }, []);

    return (
        <div className="zigzag-container">
        <h1>About me as..</h1>
            {cards.map((card, index) => (
                <div
                    key={card.id}
                    ref={(el) => (cardRefs.current[index] = el)}
                    className={`zigzag-card ${index % 2 === 0 ? 'left' : 'right'} ${isVisible[index] ? 'fade-in' : ''}`}
                >
                    <div className="card-image">
                        <img src={card.img} alt={`Card ${index + 1}`} />
                    </div>
                    <div className="card-description">
                        <h2>{card.title}</h2>
                        <p>{card.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ZigZagCards;

