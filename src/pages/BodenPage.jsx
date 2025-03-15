import React from "react";
import HeaderNav from "../components/header/header";
import Hero from "../components/hero/hero";
import Footer from "../components/footer/footer";
import ContentGallery from "../components/contentgallery/contentgallery";

const BodenPage = () => {
  const mainImage = {
    src: '/images/grönsaker/Salladshuvud.jpg', // Detta kan vara en faktisk path till din bild
    alt: 'Main gallery image'
  };

  const overlayText = 'Här är en dynamisk text över bilden';

  const galleryImages = [
    { src: '/images/boden/bodenpappajason.jpg', alt: 'Bild grönsaksboden med Jonas och Hund' }, // Se till att stigen är korrekt
    { src: '/images/kossor/solnedgångkossor.jpg', alt: 'Kossor mot solnedgång' }
  ];

  return (
    <>
      <HeaderNav />
      <Hero heroId={2}
      />
      <ContentGallery 
        mainImage={mainImage} 
        overlayText={overlayText} 
        galleryImages={galleryImages} 
      />
      <Footer />
    </>
  );
};

export default BodenPage;

