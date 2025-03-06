import React, { useEffect, useState } from "react";
import "./spots.css";

const Spots = () => {
  const [spotsData, setSpotsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/spots")
      .then((res) => res.json())
      .then((data) => setSpotsData(data))
      .catch((err) => console.error("Fel vid hämtning av spots:", err));
  }, []);

  return (
    <div className="spots-grid">
      {spotsData.map((spot) => (
        <a key={spot.id} href={spot.link} className="spot-container">
          <div className="ribbon">{spot.text}</div>
          <img src={spot.src} alt={spot.text} className="spot-image" />
        </a>
      ))}
    </div>
  );
};

export default Spots;