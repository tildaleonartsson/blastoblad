import React from "react";
import Hero from "../components/hero/hero";
import HeaderNav from "../components/header/header";
import TextImgGrid from "../components/textimggrid/textimggrid";
import Footer from "../components/footer/footer";

const AboutPage = () => {
  return (
    <>
    
    <HeaderNav />
    <Hero heroId={4} />
    <TextImgGrid />
    <TextImgGrid />
    <Footer />
    </>
  );
};

export default AboutPage;