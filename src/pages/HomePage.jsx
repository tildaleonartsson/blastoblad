import React from "react";
import HeaderNav from "../components/header/header.jsx";
import Hero from "../components/hero/hero.jsx";
import Spots from "../components/spots/spots.jsx";
import Footer from "../components/footer/footer.jsx";
import GoogleMapComponent from "../components/googlemapcomponent/googlemapcomponent.jsx";
import NewsCard from "../components/news/news.jsx";

const HomePage = () => {
    return (
      <>
        <HeaderNav />
        <Hero heroId={1} />
        <div style={{ width: "100vw", height: "auto" }}>
          <Spots />
        </div>
        <h2 className="h2news">Aktuellt</h2>
        <NewsCard 
        title="Tulpan säsong"
        description="Tulpansäsongen närmar sig. De har radan börjat titta upp över jorden i självplocket. Förhoppningen är att vi kommer kunna öppna vårt självplock tills Påsken, men den är sen i år och våra tulpaner har redan börjat titta upp. Hål utkik här och på sociala medier för uppdatering om när vi kommer att öppna vårt självplock för året."
        imageUrl="/images/blommor/tulpan2024.jpg"/>
        <div id="map">
        <GoogleMapComponent />
        </div>
        <Footer />
      </>
    );
  };
export default HomePage;
