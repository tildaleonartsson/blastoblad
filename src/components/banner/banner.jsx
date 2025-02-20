import React from "react";
import "./banner.css";

const Banner = ({ text = "Your default text" }) => {
  return <div className="ribbon">{text}</div>;
};

export default Banner;