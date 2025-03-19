import React from 'react';
import './ContentGallery.css';

const ContentGallery = ({ mainImage, overlayText, galleryImages }) => {
  return (
    <>
    <div className="parent">
      <div className="div1"><img src="./images/boden/bodenpotatis.jpg" alt="" /> </div>
      <div className="div2"><img src="/images/boden/bodensallad.jpg" alt="" /> </div>
      <div className="div4"><img src={mainImage.src} alt={mainImage.alt} />
        <div className="overlay">
          <p>Välkommen till vår lilla bod – fylld med färska råvaror och vackra blommor från Bjäre! Här hittar du noggrant utvalda grönsaker och blommor, odlade med omsorg hos oss eller hos andra lokala bönder.</p>
          <p>Sortimentet varierar från dag till dag, men du kan nästan alltid hitta nyupptagen färskpotatis, solmogna tomater, krispig gurka, olika sorters sallad, morötter och bönor. Vi har även färska kryddor, rödlök, gul lök, schalottenlök, vitlök och purjolök – perfekta för att lyfta dina maträtter! När säsongen tillåter finns också solmogna jordgubbar, saftiga blåbär och syrlig rabarber.</p>
          <p>Utanför boden finns vårt vackra blomster självplock. Men där inne finns det färdigbundna buktetter, ståtlig gladiolus och doftande luktärt.</p>
        </div>
    </div>
    </div>
    </>
  );
};

export default ContentGallery;

