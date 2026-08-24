import Header from "./components/Header.jsx"
import CrisisBanner from "./components/CrisisBanner.jsx"
import './App.css'
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckInPage from "./pages/CheckInPage.jsx";
import HistoryPage from "./pages/HistoryPage.jsx";
import BreathePage from "./pages/BreathePage.jsx";
import ResourcesPage from "./pages/ResourcesPage.jsx";



function App() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEntries = async () => {
      const response = await fetch("/api/entries");
      const data = await response.json();
      setEntries(data);
      setLoading(false);
    };

    fetchEntries();
  }, []);

  const addEntry = async (entry) => {
  const res = await fetch("/api/entries", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(entry),
  });
  const saved = await res.json();
  setEntries([...entries, saved]);
};

  const deleteEntry = async (id) => {
    await fetch(`/api/entries/${id}`, {
      method: "DELETE",
    });
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  return (
    <BrowserRouter>
      <Header tagline="No fixing, just understanding." />
      {loading ? <p>Loading your entries...</p> : (
      <Routes>
        <Route path="/" element={<CheckInPage entries={entries} onAdd={addEntry} onDelete={deleteEntry} />} />
        <Route path="/history" element={<HistoryPage entries={entries} onDelete={deleteEntry} />} />
        <Route path="/breathe" element={<BreathePage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
      )}
      <CrisisBanner />
    </BrowserRouter>
  );
}


export default App
