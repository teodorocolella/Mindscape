const moodEmoji = (score) => {
    if (score >= 4) {
        return "😄";
    }
    if (score === 3) {
        return "🙂"
    }
    if (score <= 2) {
        return "😞"
    }
}

function MoodCard({ entry, onDelete }) {
    return (
        <li>
            {moodEmoji(entry.score)} {entry.mood} ({entry.score}/5)
            <button onClick={() => onDelete(entry.id)}>Delete</button>
        </li>
    )
}

export default MoodCard;
