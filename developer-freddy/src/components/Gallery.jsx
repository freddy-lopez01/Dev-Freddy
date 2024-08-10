import React from 'react';
import ImageGrid from './ImageGrid';
import './Gallery.css';


const images = [
  { src: 'img3.jpg', alt: 'Photo 1' },
  { src: 'img8.jpg', alt: 'Photo 1' },
  { src: 'tetra.jpg', alt: 'Photo 1' },
  { src: 'img14.jpg', alt: 'Photo 1' },
  { src: 'greentetra.jpg', alt: 'Photo 1' },
  { src: 'img15.jpg', alt: 'Photo 1' },



  { src: 'img7.jpg', alt: 'Photo 1' },
  { src: 'img2.jpg', alt: 'Photo 1' },
  { src: 'img9.jpg', alt: 'Photo 1' },
  { src: 'img6.jpg', alt: 'Photo 1' },
  { src: 'img10.jpg', alt: 'Photo 1' },
  { src: 'img11.jpg', alt: 'Photo 1' },
  { src: 'img5.jpg', alt: 'Photo 1' },
  { src: 'img17.jpeg', alt: 'Photo 1' },
  { src: 'mag.png', alt: 'Photo 1' },
];

const Gallery = () => {
  return (
    <div className="gallery-grid">
      <ImageGrid images={images} />
    </div>
  );
};

export default Gallery;

