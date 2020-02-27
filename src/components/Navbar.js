import React from "react";
import {Link,NavLink} from "react-router-dom";
class Navbar extends React.Component {
    render() {
        return(
        <div>
            <nav className="navbar navbar-expand-sm bg-light">
                <Link to="/" className="brand-logo">
                  BrandLogo
                </Link>

                <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink  className="nav-link" to="/home">home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/login">Login</NavLink>
                </li>
                
                </ul>

            </nav>
        </div>)
    }

}
export default Navbar;