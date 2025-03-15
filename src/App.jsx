import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import BodenPage from "./pages/BodenPage.jsx";
import SelfPickPage from "./pages/SelfPickPage.jsx";
import OurFarm from "./pages/OurFarm.jsx";
import NotFound from "./pages/NotFound.jsx";
import Login from "./pages/Login.jsx";
import Admin from "./pages/Admin.jsx";
import PrivateRoute from "./routes/PrivateRoute";
import { AuthProvider } from "./AuthContext.jsx";
import Hero from "./components/hero/hero.jsx";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Publika sidor */}
          <Route path="/" element={<HomePage />} />
          <Route path="/omoss" element={<AboutPage />} />
          <Route path="/boden" element={<BodenPage />} />
          <Route path="/självplock" element={<SelfPickPage />} />
          <Route path="/vårodling" element={<OurFarm />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/hero/:id" element={<Hero />} />

          {/* Skyddad admin-sida */}
          <Route element={<PrivateRoute />}>
          <Route path="/admin" element={<Admin />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
