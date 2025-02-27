import React from "react";
import HeaderNav from "../components/header/header.jsx";
import Hero from "../components/hero/hero.jsx";
import Spots from "../components/spots/spots.jsx";
import Footer from "../components/footer/footer.jsx";
import NewsCard from "../components/news/news.jsx";



const HomePage = () => {
    return (
      <>
        <HeaderNav />
        <Hero
        image="/images/blommor/solrosor.jpg"
        title="Från vår trädgård, till ert hem"
        subtitle="Hitta till oss"
        linkText="Läs mer"
        linkUrl="/hittahit"
      />
        <div style={{ width: "100vw", height: "auto" }}>
      <Spots />
    </div>
    <NewsCard
  title="Spännande Nyhet!"
  description="Det här är en kort beskrivning av nyheten."
  imageUrl="https://via.placeholder.com/400"
/>
<NewsCard
  title="Spännande Nyhet!"
  description="Det här är en kort beskrivning av nyheten."
  imageUrl="https://via.placeholder.com/400"
/>
<Footer />
      </>
    );
  };
export default HomePage;
