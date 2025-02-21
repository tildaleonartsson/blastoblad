import React from "react";
import "./spots.css";

const spotsData = [
  { src: "/images/skylt/skyltenväg.jpg", text: "Hitta Till Oss" },
  { src: "/images/boden/bodenpappajason.jpg", text: "Grönsaksboden" },
  { src: "/images/blommor/bukettsolrosgräs.jpg", text: "Självplock Blommor" },
  { src: "/images/familjen/fikaskåpbilen.jpg", text: "Om Oss" },
];

const Spots = () => {
  return (
    <div className="spots-grid">
      {spotsData.map((spot, index) => (
        <div key={index} className="spot-container">
          <div className="ribbon">{spot.text}</div>
          <img src={spot.src} alt={spot.text} className="spot-image" />
        </div>
      ))}
    </div>
  );
};

export default Spots;
