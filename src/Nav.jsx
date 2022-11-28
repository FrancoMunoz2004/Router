import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
        <div className="header">
        <Link to="/">Home</Link>
        </div>
    
      <li>
        <Link to="/Dennis">Dennis Ritchie</Link>
      </li>
      <li>
        <Link to="/Bjarne">Bjarne Stroustrup</Link>
      </li>
      <li>
        <Link to="/James">James Gosling</Link>
      </li>
      <li>
        <Link to="/Linus">Linus Torvalds</Link>
      </li>
      <li>
        <Link to="/AndersHejlsberg">Anders Hejlsberg</Link>
      </li>
    
    </div>
  );
}
export default Nav;
