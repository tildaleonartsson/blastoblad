import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Import slick-carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Import slick-carousel theme CSS
import "./tomatoslider.css"; // Import your own CSS for styling

const TomatoSlider = () => {
  const [tomatoes, setTomatoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTomatoes = async () => {
      try {
        const response = await fetch("http://localhost:5000/tomatoes");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTomatoes(data);
      } catch (error) {
        setError(error.message); // Store error message
        console.error("Error fetching tomatoes:", error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    fetchTomatoes();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  if (error) {
    return <div>Error fetching tomatoes: {error}</div>; // Show error message
  }

  return (
    <div className="slider-container">
      <h2>Våra Tomater</h2>
      <Slider {...settings}>
        {tomatoes.map((tomato) => (
          <div key={tomato.id} className="tomato-slide">
            <img src={tomato.image} alt={tomato.title} />
            <h3>{tomato.title}</h3>
            <p>{tomato.introduction}</p>
            <p>{tomato.information}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TomatoSlider;