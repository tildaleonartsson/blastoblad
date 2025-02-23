import React from "react";
import HeaderNav from "../components/header/header";
import Hero from "../components/hero/hero";

const SelfPickPage = () => {
  return (
    <>
<HeaderNav />
<Hero
        image="/images/blommor/blommorkorg.jpg"
        title="Skapa er egen blomsterlycka"
        subtitle="Hitta till oss"
        linkText="Läs mer"
        linkUrl="/hittahit"
      />

      <p>Tulpaner, Påskliljor, Narcissior</p>
      <p>Dahlior</p>
    </>

  );
};

export default SelfPickPage;
