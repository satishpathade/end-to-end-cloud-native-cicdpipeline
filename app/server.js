const express = require("express");
const db = require("./db");

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.get("/api/tasks", async (req, res) => {

const [rows] = await db.query("SELECT * FROM tasks");

res.json(rows);

});

app.post("/api/tasks", async (req, res) => {

const { task } = req.body;

await db.query("INSERT INTO tasks (task) VALUES (?)", [task]);

res.json({message:"Task added"});

});

const PORT = 3000;

app.listen(PORT, () => {

console.log("Server running on port " + PORT);

});