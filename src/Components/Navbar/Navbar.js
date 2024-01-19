import "./Navbar.scss";
import React from "react";

function Navbar() {
    return (
        <nav>
            <ul className="navbar">
                <li className="navbar__link">Gallery</li>
                <li className="navbar__link">About</li>
                <li className="navbar__link">Contact</li>
            </ul>
        </nav>
    );
}

export default Navbar;
