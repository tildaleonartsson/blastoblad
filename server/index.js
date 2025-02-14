const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

// Hämta alla användare
app.get("/users", (req, res) => {
  const users = db.prepare("SELECT * FROM users").all();
  res.json(users);
});

// Lägg till en användare
app.post("/users", (req, res) => {
  const { name, email } = req.body;
  const stmt = db.prepare("INSERT INTO users (name, email) VALUES (?, ?)");
  const info = stmt.run(name, email);
  res.json({ id: info.lastInsertRowid, name, email });
});

// Starta servern
app.listen(5000, () => console.log("Server running on http://localhost:5000"));
