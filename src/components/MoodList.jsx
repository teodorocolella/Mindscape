import MoodCard from "./MoodCard.jsx"
function MoodList ({entries, onDelete}) {
    return entries.length === 0 ? (
        <p>No entries yet.</p>
    ) : (
        <ul>
        {entries.map((entry) => (
            <MoodCard key={entry.id} entry={entry} onDelete={onDelete} />
        ))}
        </ul>
    )
    }

export default MoodList;
