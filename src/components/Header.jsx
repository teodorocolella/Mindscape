import { NavLink } from "react-router-dom";

function Header({tagline}) {
    return (
        <div className="site-header">
            <h1>Mindscape</h1>
            <p className="tagline">{tagline}</p>
            <nav>
                <ul>
                    <li><NavLink to="/">Check In</NavLink></li>
                    <li><NavLink to="/history">History</NavLink></li>
                    <li><NavLink to="/breathe">Breathe</NavLink></li>
                    <li><NavLink to="/resources">Resources</NavLink></li>
                </ul>
            </nav>
        </div>

    )
}

export default Header