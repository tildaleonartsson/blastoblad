import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 - Sidan finns inte</h1>
      <p>Hoppsan! Sidan du söker kunde inte hittas.</p>
      <Link to="/">Gå tillbaka till startsidan</Link>
    </div>
  );
};

export default NotFound;