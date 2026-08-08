import Header from "./components/Header.jsx"
import CheckInForm from "./components/CheckInForm.jsx"
import CrisisBanner from "./components/CrisisBanner.jsx"
import MoodList from "./components/MoodList.jsx"
import './App.css'
import { useState } from "react";

const seedEntries = [
  { id: 1, mood: "calm", score:4 },
  { id: 2, mood: "stressed", score:2},
  { id: 3, mood: "hopeful", score: 5}
];

function App() {
  const [entries, setEntries] = useState(seedEntries);

  const addEntry = (entry) => setEntries([...entries, entry]);

  const deleteEntry = (id) => setEntries(entries.filter((entry) => entry.id !== id));

  return (
    <div>
      <Header tagline="No fixing, just understanding." />
      <CheckInForm onAdd={addEntry} />
      <MoodList entries={entries} onDelete={deleteEntry} />
      <CrisisBanner />
    </div>
  )
}

export default App
