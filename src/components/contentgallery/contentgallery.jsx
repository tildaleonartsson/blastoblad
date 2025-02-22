import React from 'react';
import './ContentGallery.css';

const ContentGallery = ({ mainImage, overlayText, galleryImages }) => {
  return (
    <div className="content-gallery">
      <div className="content-gallery-main">
        <div className="content-gallery-image">
          <img src={mainImage.src} alt={mainImage.alt} />
          <div className="overlay">
            <p className="overlay-text">{overlayText}</p>
          </div>
        </div>
      </div>
      <div className="content-gallery-images">
        {galleryImages.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentGallery;

