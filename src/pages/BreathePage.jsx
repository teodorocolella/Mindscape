import { useState, useEffect } from "react";

function BreathePage() {
    const [phase, setPhase] = useState("breathe in");

    useEffect(() => {
        const timer = setInterval(() => {
            setPhase((p) => (p === "breathe in" ? "breathe out" : "breathe in"));
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="breathe-page">
        <h2>Breathe</h2>
        <p className="muted">Follow the circle — in as it grows, out as it shrinks.</p>
        <div className="breathe-circle">
            <span>{phase}</span>
        </div>
        </div>
    );
    }

export default BreathePage;