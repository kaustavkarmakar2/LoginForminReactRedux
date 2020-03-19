import React from "react";
import { Link, NavLink } from "react-router-dom";
class Navbar extends React.Component {
  render() {
    return (
      <div className="header">
        <nav className="navbar navbar-expand-sm bg-light">
          <Link to="/home" className="brand-logo">
            BrandLogo
          </Link>

          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/signup">
                Signup
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Navbar;
