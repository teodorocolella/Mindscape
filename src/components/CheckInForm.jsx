import { useState } from "react";

function CheckInForm({ onAdd }) {
    const [mood, setMood] = useState("");
    const [score, setScore] = useState(3);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEntry = {
            id: Date.now(),
            mood: mood,
            score: Number(score)
        };
        onAdd(newEntry);
        setMood("");
        setScore(3);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="mood">Mood:</label>
            <select name="mood" id="mood" required value={mood} onChange={(e) => setMood(e.target.value)}>
                <option value="" disabled>How are you feeling?</option>
                <option value="calm">Calm</option>
                <option value="happy">Happy</option>
                <option value="okay">Okay</option>
                <option value="tired">Tired</option>
                <option value="stressed">Stressed</option>
                <option value="sad">Sad</option>
                <option value="anxious">Anxious</option>
                <option value="hopeful">Hopeful</option>
            </select>
            <label htmlFor="score">Score:</label>
            <input type="number" name="score" id="score" min="1" max="5" value={score} onChange={(e) => setScore(e.target.value)} />
            <button type="submit">Log it</button>
        </form>
    );

}

export default CheckInForm;
