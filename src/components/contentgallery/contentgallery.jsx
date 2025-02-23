import React from 'react';
import './ContentGallery.css';

const ContentGallery = ({ mainImage, overlayText, galleryImages }) => {
  return (
    <>
    <div class="parent">
<div class="div1"><img src="./images/boden/bodenpotatis.jpg" alt="" /> </div>
<div class="div2"><img src="/images/boden/bodensallad.jpg" alt="" /> </div>
<div class="div3"><img src="/images/kossor/solnedgångkossor.jpg" alt="" /> </div>
<div class="div4"><img src={mainImage.src} alt={mainImage.alt} />
<div className="overlay">
  <h2>Text</h2>
  <ul>
    <li>Text</li>
    <li>Text</li>
  </ul>
  </div> </div>
</div>
      </>
  );
};

export default ContentGallery;

