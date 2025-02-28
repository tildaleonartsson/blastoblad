import React from "react";
import "./spots.css";

const spotsData = [
  { src: "/images/skylt/skyltenväg.jpg", text: "Hitta Till Oss", link: "/hittahit" },
  { src: "/images/boden/bodenpappajason.jpg", text: "Grönsaksboden", link: "/boden" },
  { src: "/images/blommor/bukettsolrosgräs.jpg", text: "Självplock Blommor", link: "/självplock" },
  { src: "/images/familjen/fikaskåpbilen.jpg", text: "Om Oss", link: "/omoss" },
];

const Spots = () => {
  return (
    <div className="spots-grid">
      {spotsData.map((spot, index) => (
        <a key={index} href={spot.link} className="spot-container">
          <div className="ribbon">{spot.text}</div>
          <img src={spot.src} alt={spot.text} className="spot-image" />
        </a>
      ))}
    </div>
  );
};

export default Spots;
