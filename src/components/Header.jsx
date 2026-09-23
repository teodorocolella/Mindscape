import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="topbar">
  <NavLink to="/" className="brand">Mindscape</NavLink>
  <nav>
    <ul>
      <li><NavLink to="/">Check In</NavLink></li>
        <li><NavLink to="/history">History</NavLink></li>
        <li><NavLink to="/breathe">Breathe</NavLink></li>
        <li><NavLink to="/resources">Resources</NavLink></li>
    </ul>
  </nav>
</header>

    )
}

export default Header