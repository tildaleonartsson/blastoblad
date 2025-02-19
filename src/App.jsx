import { useState, useEffect } from 'react';
import './App.css';
import HeaderNav from './components/header/header.jsx';
import Hero from "./components/hero/hero.jsx";
import Spots from "./components/spots/spots.jsx";
import Banner from "./components/banner/banner.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import BodenPage from "./pages/BodenPage.jsx";
import SelfPickPage from "./pages/SelfPickPage.jsx";
import FindUsPage from "./pages/FindUsPage.jsx";
import NotFound from "./pages/NotFound.jsx";

const spotsData = [
  {
    image: "images/boden/bodenpappajason.jpg",
    title: "Grönsaksboden",
    text: "I vår grönsaksbod har vi öppet varje dag. Här kan ni hitta här och närodlade grönsaker med mera.",
  },
  {
    image: "images/skylt/skylten.jpg",
    title: "Hitta Till Oss",
    text: "Vi finns på Hallansåsen mellan Båstad och Torekov. Välkommna hit på Karstorpsvägen 256 BÅSTAD.",
  },
  {
    image: "images/blommor/bukettsolrosgräs.jpg",
    title: "Självplock Blommor",
    text: "Vår blomsteräng är full med blommor. Ta med vänner och familj på en mysig stund på landet.",
  },
];

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/omoss" element={<AboutPage />} />
        <Route path="/boden" element={<BodenPage />} />
        <Route path="/självplock" element={<SelfPickPage />} />
        <Route path="/hittahit" element={<FindUsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>

      <div className="App">

        <main>
          <h2>Användare</h2>
          <ul>
            {users.map(user => (
              <li key={user.id}>{user.name} - {user.email}</li>
            ))}
          </ul>
        </main>

        <footer className="read-the-docs">
        </footer>
      </div>
    </>
  );
}

export default App;

