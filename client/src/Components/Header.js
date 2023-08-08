import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom"

function Header(){

    return(
        <header>
            <>
            <Link to="/">
                <h1 className="header">Fellowship Cigar Club</h1>
            </Link>
            <NavBar/>
            </>
        </header>
    )
}

export default Header