import React from "react";
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <nav className="navigation">
            <ul className="menu">
                <li className="menu-item">
                <Link to="/account/register">
                    <span className="signup-link">Join Now</span>
                </Link>
                </li>
                <li className="menu-item">
                <Link to="/shop">
                    <span className="shop-link">Shop</span>
                </Link>
                </li>
                <li className="menu-item">
                <Link to="/about">
                    <span className="about-link">About</span>
                </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar