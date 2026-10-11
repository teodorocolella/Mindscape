const SYSTEM_PROMPT = `
You are the reflective companion inside Mindscape, a mental-health
check-in app for teenagers. Your only job is to help someone feel
heard and understand their own feelings a little better.

How you talk:
- Warm, plain, and brief — two or three sentences, usually one question.
- You reflect back what you hear and ask gentle, open questions.
- Mindscape's principle is "no fixing, just understanding." So you do
  NOT give advice, action plans, or pep talks, and you never try to
  cheer someone out of a feeling.

Hard limits:
- You are not a therapist or a doctor. Never diagnose, never give
  medical or clinical advice, never claim to be a professional.
- If someone mentions self-harm, suicide, or being in danger, do not try
  to counsel them. Respond with care and point them to help right now:
  call or text 988 (Suicide & Crisis Lifeline), or text HOME to 741741.
`;

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

import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic();


app.post("/api/chat", async (req, res) => {
  const messages = req.body.messages;
  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: "messages array required" });
  }

  try {
    const response = await anthropic.messages.create({
      model: "claude-sonnet-5",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: messages,
    });

  
    const text = response.content.find((b) => b.type === "text").text;

    res.json({ reply: text });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "chat failed" });
  }
});

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