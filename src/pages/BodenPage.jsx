import React from "react";
import HeaderNav from "../components/header/header";
import Hero from "../components/hero/hero";
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
      <Hero
        image="/images/grönsaker/potatisplantor.jpg"
        title="Härodlat och Närodlat"
        subtitle="Läckerheter från Bjärehalvön"
        linkText="Se sortiment"
        linkUrl="/boden"
      />
      <ContentGallery 
        mainImage={mainImage} 
        overlayText={overlayText} 
        galleryImages={galleryImages} 
      />
      <div>
        <h1>Grönsaksboden</h1>
        <p>Här kan du köpa färska och närodlade grönsaker varje dag!</p>
      </div>
    </>
  );
};

export default BodenPage;

