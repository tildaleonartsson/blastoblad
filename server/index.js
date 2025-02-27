const express = require("express");
const cors = require("cors");
const db = require("./db"); // Din SQLite-anslutning
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
app.use(cors({ origin: "http://localhost:3000", credentials: true })); // Tillåt frontend att skicka cookies
app.use(express.json());
app.use(cookieParser());

const SECRET_KEY = process.env.JWT_SECRET || "supersecretkey";

// 📝 **Registrera en admin (KÖR EN GÅNG, SEN KOMMENTERA BORT)**
// app.post("/register", async (req, res) => {
//   const { username, password } = req.body;
//   const hashedPassword = await bcrypt.hash(password, 10);

//   try {
//     db.prepare("INSERT INTO users (username, password) VALUES (?, ?)").run(
//       username,
//       hashedPassword
//     );
//     res.json({ message: "Admin skapad!" });
//   } catch (err) {
//     res.status(400).json({ error: "Användarnamn finns redan" });
//   }
// });
// 🔑 **Inloggning**
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = db
    .prepare("SELECT * FROM users WHERE username = ?")
    .get(username);

  if (!user) {
    return res.status(400).json({ error: "Fel användarnamn eller lösenord" });
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    return res.status(400).json({ error: "Fel användarnamn eller lösenord" });
  }

  // Skapa JWT-token
  const token = jwt.sign({ userId: user.username }, SECRET_KEY, {
    expiresIn: "1h",
  });

  // Skicka token i en httpOnly-cookie
  res.cookie("token", token, {
    httpOnly: true,
    secure: false, // Sätt till true om du kör HTTPS
    sameSite: "strict",
  });

  res.json({ message: "Inloggning lyckades!" });
});

// 🔍 **Verifiera om användaren är inloggad**
app.get("/verify", (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ error: "Ej inloggad" });

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    res.json({ loggedIn: true, userId: decoded.userId });
  } catch {
    res.status(401).json({ error: "Ogiltig token" });
  }
});

// 🚪 **Logga ut**
app.post("/logout", (req, res) => {
  res.clearCookie("token").json({ message: "Utloggad" });
});

// 🖥️ **Starta servern**
app.listen(5000, () => console.log("Server running on http://localhost:5000"));
