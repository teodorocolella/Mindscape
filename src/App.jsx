import Header from "./components/Header.jsx"
import CrisisBanner from "./components/CrisisBanner.jsx"
import './App.css'
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckInPage from "./pages/CheckInPage.jsx";
import HistoryPage from "./pages/HistoryPage.jsx";
import BreathePage from "./pages/BreathePage.jsx";
import ResourcesPage from "./pages/ResourcesPage.jsx";

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
    <BrowserRouter>
      <Header tagline="No fixing, just understanding." />
      <Routes>
        <Route path="/" element={<CheckInPage entries={entries} onAdd={addEntry} onDelete={deleteEntry} />} />
        <Route path="/history" element={<HistoryPage entries={entries} onDelete={deleteEntry} />} />
        <Route path="/breathe" element={<BreathePage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
      <CrisisBanner />
    </BrowserRouter>
  );
}


export default App
