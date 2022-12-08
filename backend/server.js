import express from "express";
import notes from "./data/notes.js";
import dotenv from "dotenv";
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("Api started");
});
app.get("/api/notes", (req, res) => {
  res.json(notes);
});
app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((no) => no._id === req.params.id);
  res.send(note);
});
app.listen(PORT, console.log(`Port started on ${PORT}`));
