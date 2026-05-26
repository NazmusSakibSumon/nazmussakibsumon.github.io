import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>

      <h2>Nazmus Sakib Sumon</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/excel">Excel</Link>
        <Link to="/sql">SQL</Link>
        <Link to="/powerbi">Power BI</Link>
        <Link to="/python">Python</Link>
        <Link to="/tableau">Tableau</Link>
      </div>

    </nav>
  );
}

export default Navbar;