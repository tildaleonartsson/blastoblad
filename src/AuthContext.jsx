import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Kontrollera om användaren är inloggad vid sidladdning
  useEffect(() => {
    axios
      .get("http://localhost:5000/verify", { withCredentials: true })
      .then((res) => setUser(res.data.userId))
      .catch(() => setUser(null));
  }, []);

  // Inloggning
  const login = async (username, password) => {
    try {
      await axios.post("http://localhost:5000/login", { username, password }, { withCredentials: true });

      // Verifiera att användaren är inloggad
      const res = await axios.get("http://localhost:5000/verify", { withCredentials: true });
      setUser(res.data.userId);
    } catch (error) {
      console.error("Inloggning misslyckades:", error);
      throw error; // Skicka vidare felet så att `Login.jsx` kan hantera det
    }
  };

  // Utloggning
  const logout = async () => {
    await axios.post("http://localhost:5000/logout", {}, { withCredentials: true });
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
