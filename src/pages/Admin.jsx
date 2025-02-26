import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <button onClick={handleLogout}>Logga ut</button>
    </div>
  );
};

export default Admin;
