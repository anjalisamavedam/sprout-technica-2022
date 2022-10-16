import "./Navbar.css";
import React from 'react';

import logo from './apple-icon.png';

function Navbar() {
    return (
        <div>
            <nav>
                <ul id="navbar">
                    <li><img className="logo" src={logo}/></li>
                    <li><a href="../home">sprout</a></li>
                </ul>

                <div>

                    <ul id="navbar">
                        <li><a href="../home">Home</a></li>
                        <li><a href="../mentor">Mentor</a></li>
                        <li><a href="../mentee">Mentee</a></li>
                        <li><a href="../matching">Matching</a></li>
                    </ul>

                </div>
            </nav>

        </div>

    );
}

export default Navbar;