import React, { useEffect, useState } from "react";
import { useAuth } from "../AuthContext";

const Admin = () => {
  const { logout } = useAuth();
  const [spots, setSpots] = useState([]);
  const [heroes, setHeroes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/spots")
      .then((res) => res.json())
      .then((data) => setSpots(data))
      .catch(() => setError("Kunde inte hämta Spots"));

    fetch("http://localhost:5000/hero")
      .then((res) => res.json())
      .then((data) => setHeroes(data)) // Hämta ALLA hero-sektioner
      .catch(() => setError("Kunde inte hämta Hero-sektioner"));
  }, []);

  const handleEditHero = (id, field, value) => {
    setHeroes((prev) =>
      prev.map((hero) => (hero.id === id ? { ...hero, [field]: value } : hero))
    );
  };

  const handleSaveHero = (id) => {
    const hero = heroes.find((h) => h.id === id);
    fetch(`http://localhost:5000/hero/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(hero),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Misslyckades att spara Hero");
        return res.json();
      })
      .then(() => alert("Hero sparad!"))
      .catch(() => setError("Misslyckades att spara Hero"));
  };

  return (
    <>
    <div>
      <h2>Admin Panel</h2>
      <button onClick={logout}>Logga ut</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <h3>Hero-sektioner</h3>
      {heroes.map((hero) => (
        <div key={hero.id}>
          <h4>Hero ID: {hero.id}</h4>
          <label>Titel:</label>
          <input
            value={hero.title}
            onChange={(e) => handleEditHero(hero.id, "title", e.target.value)}
          />
          <label>Bild-URL:</label>
          <input
            value={hero.image}
            onChange={(e) => handleEditHero(hero.id, "image", e.target.value)}
          />
          <button onClick={() => handleSaveHero(hero.id)}>Spara</button>
        </div>
      ))}
    </div>

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
        <td>
          <input
            value={s.src}
            onChange={(e) => handleEditSpot(s.id, "src", e.target.value)}
          />
        </td>
        <td>
          <input
            value={s.text}
            onChange={(e) => handleEditSpot(s.id, "text", e.target.value)}
          />
        </td>
        <td>
          <input
            value={s.link}
            onChange={(e) => handleEditSpot(s.id, "link", e.target.value)}
          />
        </td>
        <td>
          <button onClick={() => handleSaveSpot(s.id)}>Spara</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
</>
  );
};

export default Admin;
