const Database = require("better-sqlite3");
const db = new Database("database.db");

// Skapa tabellen "users"
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
  );
`);

// Skapa tabellen "spots"
db.exec(`
  CREATE TABLE IF NOT EXISTS spots (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    src TEXT NOT NULL,
    text TEXT NOT NULL,
    link TEXT NOT NULL
  );
`);

// Skapa tabellen "hero"
db.exec(`
  CREATE TABLE IF NOT EXISTS hero (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    image TEXT,
    title TEXT,
    subtitle TEXT,
    linkText TEXT,
    linkUrl TEXT
  );
`);

module.exports = db;
