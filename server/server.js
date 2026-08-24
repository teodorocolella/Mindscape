import express from "express";
import fs from "node:fs"

const DATA_FILE = "./server/entries.json";

const loadEntries = () => {
  if (!fs.existsSync(DATA_FILE)) {
    return [
      { id: 1, mood: "calm", score: 4 },
      { id: 2, mood: "stressed", score: 2 },
      { id: 3, mood: "hopeful", score: 5 },
    ];
  }
  return JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
};

const saveEntries = () => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(entries, null, 2));
};


let entries = loadEntries();

const app = express();
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

app.get("/api/entries", (req, res) => {
  res.json(entries);
});

app.post("/api/entries", (req, res) => {
    const newEntry = { id: Date.now(), ...req.body };
    entries.push(newEntry);
    res.status(201).json(newEntry);
    saveEntries();
});

app.delete("/api/entries/:id", (req, res) => {
    const id = Number(req.params.id);
    entries = entries.filter((entry) => entry.id !== id);
    saveEntries();
    res.json({ deleted: id });
});

app.listen(3001, () => {
  console.log("Mindscape server listening on http://localhost:3001");
});