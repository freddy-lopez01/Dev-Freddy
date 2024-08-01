import React, { useEffect, useRef, useState } from 'react';
import './ZigZag.css';

const cards = [
    {
        img: 'datacenter.jpeg',
        description: 'This is the description for the first card.',
        id: 1
    },
    {
        img: 'duo-tank.jpg',
        description: 'This is the description for the second card.',
        id: 2
    },
    {
        img: 'tetra.jpg',
        description: 'This is the description for the third card.',
        id: 3
    },
    {
        img: 'mag.png',
        description: 'This is the description for the fourth card.',
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
                        <p>{card.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ZigZagCards;

