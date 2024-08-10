import React, { useEffect } from 'react';
import './ImageGrid.css';

const ImageGrid = ({ images }) => {
  useEffect(() => {
    const imageItems = document.querySelectorAll('.image-item');
    const options = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    imageItems.forEach((item, index) => {
      observer.observe(item);
    });
  }, []);

  return (
    <div className="image-grid">
      {images.map((image, index) => (
        <div key={index} className="image-item" style={{ transitionDelay: `${index * 100}ms` }}>
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;

