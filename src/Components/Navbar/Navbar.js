import "./Navbar.scss";
import React from "react";

function Navbar() {
    return (
        <nav className="navbar-container">
            <div className="navbar-container__wrapper">
                <ul className="navbar">
                    <li className="navbar__link">Gallery</li>
                    <li className="navbar__link">About</li>
                    <li className="navbar__link">Contact</li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
