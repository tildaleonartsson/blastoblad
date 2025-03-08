import React from "react";
import HeaderNav from "../components/header/header";
import Footer from "../components/footer/footer";
import TomatoSlider from "../components/slider/tomatoslider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Responsive from "../components/slider/slider";
import { PrimeReactProvider } from "primereact/api";
import { Carousel } from 'primereact/carousel';

const products = [
  {
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Tomat 1",
    description: "Tomat 1",
  },
  {
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Tomat 2",
    description: "Tomat 2",
  },
  {
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Tomat 3",
    description: "Tomat 3",
  },
  {
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Tomat 4",
    description: "Tomat 4",
  },
  {
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Tomat 5",
    description: "Tomat 5",
  },
];

const responsiveOptions = [
  {
    breakpoint: "1024px",
    numVisible: 3,
    numScroll: 3,
  },
  {
    breakpoint: "768px",
    numVisible: 2,
    numScroll: 2,
  },
  {
    breakpoint: "560px",
    numVisible: 1,
    numScroll: 1,
  },
];

const productTemplate = (product) => {
  return (
    <div className="tomato-slide">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
    </div>
  );
};

const FindUsPage = () => {
  return (
    <>
    <HeaderNav />
    <PrimeReactProvider><Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} className="custom-carousel" circular
autoplayInterval={3000} itemTemplate={productTemplate} />
</PrimeReactProvider>
    <Footer />

    </>
    
  );
};

export default FindUsPage;
