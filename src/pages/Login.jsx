import { useState } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
      navigate("/admin");
    } catch {
      alert("Fel användarnamn eller lösenord");
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Användarnamn" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Lösenord" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Logga in</button>
      </form>
    </div>
  );
};

export default Login;
