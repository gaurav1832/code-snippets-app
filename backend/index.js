require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// Endpoint to submit code snippet
app.post("/submit", (req, res) => {
  const { username, code_language, stdin, source_code } = req.body;
  const sql =
    "INSERT INTO code_snippets (username, code_language, stdin, source_code) VALUES (?, ?, ?, ?)";
  connection.query(
    sql,
    [username, code_language, stdin, source_code],
    (err, result) => {
      if (err) {
        console.error("Error submitting code snippet:", err);
        res.status(500).send("Error submitting code snippet");
      } else {
        res.status(201).send("Code snippet submitted successfully");
      }
    }
  );
});

// End point for fetching code snippets
app.get("/snippets", (req, res) => {
  const sql =
    "SELECT id, username, code_language, stdin, LEFT(source_code, 100) as source_code_preview, timestamp FROM code_snippets";
  connection.query(sql, (err, results) => {
    if (err) {
      console.error("Error retrieving code snippets:", err);
      res.status(500).send("Error retrieving code snippets");
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
