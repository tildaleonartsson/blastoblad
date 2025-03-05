import React, { useEffect, useState } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [spots, setSpots] = useState([]);
  const [hero, setHero] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/spots")
      .then((res) => res.json())
      .then((data) => setSpots(data));

    fetch("http://localhost:5000/hero")
      .then((res) => res.json())
      .then((data) => setHero(data[0]));
  }, []);

  const handleEditSpot = (id, field, value) => {
    setSpots((prev) =>
      prev.map((s) => (s.id === id ? { ...s, [field]: value } : s))
    );
  };

  const handleEditHero = (field, value) => {
    setHero((prev) => ({ ...prev, [field]: value }));
  };

  const handleSaveSpot = (id) => {
    const spot = spots.find((s) => s.id === id);
    fetch(`http://localhost:5000/spots/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(spot),
    });
  };

  const handleSaveHero = () => {
    fetch(`http://localhost:5000/hero/${hero.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(hero),
    });
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <button onClick={logout}>Logga ut</button>

      <h3>Spots</h3>
      <table>
        <thead>
          <tr>
            <th>Bild</th>
            <th>Text</th>
            <th>Länk</th>
            <th>Spara</th>
          </tr>
        </thead>
        <tbody>
          {spots.map((s) => (
            <tr key={s.id}>
              <td><input value={s.src} onChange={(e) => handleEditSpot(s.id, "src", e.target.value)} /></td>
              <td><input value={s.text} onChange={(e) => handleEditSpot(s.id, "text", e.target.value)} /></td>
              <td><input value={s.link} onChange={(e) => handleEditSpot(s.id, "link", e.target.value)} /></td>
              <td><button onClick={() => handleSaveSpot(s.id)}>Spara</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Hero</h3>
      <input value={hero?.title} onChange={(e) => handleEditHero("title", e.target.value)} />
      <button onClick={handleSaveHero}>Spara Hero</button>
    </div>
  );
};

export default Admin;
