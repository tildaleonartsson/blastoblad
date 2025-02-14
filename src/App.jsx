import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="app-container">
      <header>
      </header>
      
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
  );
}

export default App;

