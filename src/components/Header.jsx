import { Link } from "react-router-dom";

function Header({tagline}) {
    return (
        <div>
            <h1>Mindscape</h1>
            <p>{tagline}</p>
            <nav>
                <ul>
                    <li><Link to="/">Check In</Link></li>
                    <li><Link to="/history">History</Link></li>
                    <li><Link to="/breathe">Breathe</Link></li>
                    <li><Link to="/resources">Resources</Link></li>
                </ul>
            </nav>
        </div>

    )
}

export default Header