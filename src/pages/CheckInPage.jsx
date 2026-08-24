import CheckInForm from "../components/CheckInForm.jsx";
import MoodList from "../components/MoodList.jsx";

function CheckInPage({ entries, onAdd, onDelete }) {
  return (
    <div>
      <CheckInForm onAdd={onAdd} />
      <MoodList entries={entries} onDelete={onDelete} />
    </div>
  );
}

export default CheckInPage;