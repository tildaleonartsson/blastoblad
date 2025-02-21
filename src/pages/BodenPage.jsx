import React from "react";
import HeaderNav from "../components/header/header";
import Hero from "../components/hero/hero";

const BodenPage = () => {
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
    <div>
      <h1>Grönsaksboden</h1>
      <p>Här kan du köpa färska och närodlade grönsaker varje dag!</p>
    </div>
    </>
  );
};

export default BodenPage;
