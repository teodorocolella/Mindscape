import { useState } from 'react'
import './App.css'

const entries = [
  { id: 1, mood: "calm", score:4 },
  { id: 2, mood: "stressed", score:2},
  { id: 3, mood: "hopeful", score: 5}
];

const moodEmoji = (score) => {
  if (score >= 4) {
    return "😄";
  }
  if (score = 3) {
    return "🙂"
  }
  if (score <= 2) {
    return "😞"
  }
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>moodHeaven</h1>
      <p>Feeling Sad or Anxious? Talk about it, you'll feel better</p>
      <ul>
        {entries.map((entry) => (
          <li key={entry.id}>
            {moodEmoji(entry.score)} {entry.mood} ({entry.score}/5)
      </li>
      ))}
      </ul>
    </div>
  )
}

export default App
