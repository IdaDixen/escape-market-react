const express = require("express");
const cors = require("cors");

// opret app og tilføj HTTP-headere til godkendelse af forespørgsler på tværs af porte
const app = express();
app.use(cors());

// Tilføj route
app.get("/", (req, res) => {
  res.send("Escape Market API virker!");
});

// serveren bruger forbindelsen til databasen fr db.js til at hente spil fra PostgreSQL
const pool = require("./db");
app.get("/games", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM games");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "Kunne ikke hente spil" });
    console.error("Fejl ved hentning af spil:", error.message);
  }
});

// Server skal lytte på port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server kører på http://localhost:${PORT}`);
});
