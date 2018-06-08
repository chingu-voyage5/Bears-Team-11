import React from 'react';
import logo from '../assets/logo1.png';
import spotify from '../assets/spotify.png';
import '../styles/css/Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img src={logo} alt="Bears Events" width="40" height="40"></img>
                    <h3>BEARS·EVENTS</h3>
                </a>
            </div>
            <a>
                <img src={spotify} alt="Bears Events" width="40" height="40"></img>
            </a>
        </div>
    )
}

export default Navbar