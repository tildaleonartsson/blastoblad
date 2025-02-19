import React from "react";
import "./Spots.css";

const Spots = ({ spots }) => {
  return (
    <div className="spots-container">
      {spots.map((spot, index) => (
        <div key={index} className="spot">
          <img src={spot.image} alt={spot.title} className="spot-image" />
          <h3 className="spot-title">{spot.title}</h3>
          <p className="spot-text">{spot.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Spots;
