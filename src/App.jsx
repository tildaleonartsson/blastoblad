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
    </>
  );
}

export default App;

