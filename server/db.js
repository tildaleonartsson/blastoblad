const Database = require("better-sqlite3");
const db = new Database("database.db");

// Skapa en tabell (om den inte redan finns)
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
  )
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS spots (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    src TEXT NOT NULL,
    text TEXT NOT NULL,
    link TEXT NOT NULL
  )
`);

module.exports = db;
