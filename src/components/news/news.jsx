import React from "react";
import "./news.css"; // Importera CSS-filen

const NewsCard = ({ title, description, imageUrl }) => {
  return (
    <div className="news-card">
      <div className="news-content">
        <div className="news-text">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="news-image">
          <img src={imageUrl} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
