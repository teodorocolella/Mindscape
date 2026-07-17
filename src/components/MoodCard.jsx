function MoodCard({ mood }) {
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
}