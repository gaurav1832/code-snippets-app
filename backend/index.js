const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysqlpassword",
  database: "devtasks",
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

// Endpoint to retrieve all code snippets
app.get("/snippets", (req, res) => {
  const sql =
    "SELECT username, code_language, stdin, source_code, timestamp FROM code_snippets";
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
