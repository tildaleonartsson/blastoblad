import React from "react";
import HeaderNav from "../components/header/header";
import Footer from "../components/footer/footer";
import TomatoSlider from "../components/slider/tomatoslider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Responsive from "../components/slider/slider";

const FindUsPage = () => {
  return (
    <>
    <HeaderNav />
    <div>
      <h1>Hitta hit</h1>
      <p>Vi finns på Hallandsåsen mellan Båstad och Torekov. Adress: Karstorpsvägen 256, Båstad.</p>
    </div>
    <TomatoSlider />
    <Footer />
    </>
    
  );
};

export default FindUsPage;
