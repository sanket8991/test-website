import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="brand">
        Quiet Pages
      </Link>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/stories">Stories</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
