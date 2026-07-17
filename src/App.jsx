import Header from "./components/Header.jsx"
import CrisisBanner from "./components/CrisisBanner.jsx"
import MoodList from "./components/MoodList.jsx"
import './App.css'

const entries = [
  { id: 1, mood: "calm", score:4 },
  { id: 2, mood: "stressed", score:2},
  { id: 3, mood: "hopeful", score: 5}
];



function App() {
  return (
    <div>
      <Header tagline="No fixing, just understanding." />
      <MoodList entries={entries} />
      <CrisisBanner />
    </div>
  )
}

export default App
