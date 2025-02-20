import React from "react";
import HeaderNav from "../components/header/header.jsx";
import Hero from "../components/hero/hero.jsx";
import Spots from "../components/spots/spots.jsx";
import Banner from "../components/banner/banner.jsx";

const spotsData = [
    {
      image: "images/boden/bodenpappajason.jpg",
      title: "Grönsaksboden",
      text: "I vår grönsaksbod har vi öppet varje dag. Här kan ni hitta här och närodlade grönsaker med mera.",
    },
    {
      image: "images/skylt/skylten.jpg",
      title: "Hitta Till Oss",
      text: "Vi finns på Hallansåsen mellan Båstad och Torekov. Välkommna hit på Karstorpsvägen 256 BÅSTAD.",
    },
    {
      image: "images/blommor/bukettsolrosgräs.jpg",
      title: "Självplock Blommor",
      text: "Vår blomsteräng är full med blommor. Ta med vänner och familj på en mysig stund på landet.",
    },
  ];

const HomePage = () => {
    return (
      <>
        <HeaderNav />
        <Hero />
        <Spots spots={spotsData} />
        <Banner />
      </>
    );
  };
export default HomePage;
