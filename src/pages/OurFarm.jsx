import React, { useEffect, useState } from "react";
import HeaderNav from "../components/header/header";
import Footer from "../components/footer/footer";
import { PrimeReactProvider } from "primereact/api";
import { Carousel } from "primereact/carousel";

const responsiveOptions = [
  { breakpoint: "1024px", numVisible: 3, numScroll: 3 },
  { breakpoint: "768px", numVisible: 2, numScroll: 2 },
  { breakpoint: "560px", numVisible: 1, numScroll: 1 },
];

const OurFarm = () => {
  const [tomato, setTomato] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tomatoes")
      .then((response) => response.json())
      .then((data) => setTomato(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const tomatoTemplate = (tomato) => (
    <div className="tomato-slide">
      <img src={tomato.image} alt={tomato.title} />
      <h3>{tomato.title}</h3>
      <p>{tomato.introduction}</p>
      <p>{tomato.information}</p>
    </div>
  );

  return (
    <>
      <HeaderNav />
      <PrimeReactProvider>
        <h2>Våra Tomater</h2>
        <Carousel
          value={tomato} // Uppdaterad från products till tomato
          numVisible={3}
          numScroll={3}
          responsiveOptions={responsiveOptions}
          className="custom-carousel"
          circular
          autoplayInterval={5000}
          itemTemplate={tomatoTemplate}
        />
        <h2>Vår Chili</h2>
      </PrimeReactProvider>
      <Footer />
    </>
  );
};

export default OurFarm;