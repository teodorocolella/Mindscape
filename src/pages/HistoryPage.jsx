import MoodList from "../components/MoodList";

function HistoryPage({ entries, onDelete }) {
    const count = entries.length;
    const average = count > 0 ? (entries.reduce((sum, entry) => sum + entry.mood, 0) / count).toFixed(2) : 0;

    return (
        <div>
            <h1>History</h1>
            <p>Total Entries: {count} · Average Mood: {average}</p>
            <MoodList entries={entries} onDelete={onDelete} />
        </div>
    );
}

export default HistoryPage;