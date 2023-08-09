import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom"

function Header(){

    return(
        <header className="header-container">
            <div className="header-leftside">
                <NavBar/>
            </div>
            <div className="header-center">
                <Link to="/">
                    <h1 className="header-logo">Fellowship Cigars</h1>
                </Link>
            </div>
            <div className="header-rightside">
                <div>
                <Link to="/account">
                    <button className="button">Account</button>
                </Link>
                </div>
                <div>
                <Link to="/account/login">
                    <h3 className="login-link">LogIn/Logout</h3>
                </Link>
                </div>
            </div>
        </header>
    )
}

export default Header