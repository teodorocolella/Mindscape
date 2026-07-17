import MoodCard from "./component/MoodCard.jsx"
function MoodList ({entries }) {
    return (
        <ul>
        {entries.map((entry) => (
            <MoodCard key={entry.id} mood={entry} />
        ))}
        </ul>
    )
    }