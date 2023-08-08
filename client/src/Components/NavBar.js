import React from "react";
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <nav>
            <div>
                <Link to="/account/register">
                    <span className="signup-link">
                        <h3>Join Now</h3>
                    </span>
                </Link>
                <Link to="/shop">
                    <span className="shop-link">
                        <h3>Shop</h3>
                    </span>
                </Link>
                <Link to="/about">
                    <span className="about-link">
                        <h3>About</h3>
                    </span>
                </Link>
                <Link to="/account/login">
                    <span className="login-link">
                        <h3>LogIn</h3>
                    </span>
                </Link>
                <Link to="/account">
                    <button className="user-link">Account</button>
                </Link>
            </div>
        </nav>
    )
}

export default NavBar