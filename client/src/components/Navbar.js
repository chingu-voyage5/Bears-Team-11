import React, { Component } from 'react';
import logo from '../assets/logo1.png';
import spotify from '../assets/spotify.png';
import '../styles/css/Navbar.css';
import { OAuthLogin } from '../utils/Oauth';

class Navbar extends Component {
  render() {
    return (
      <div id="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item">
            <img src={logo} alt="Bears Events" width="40" height="60"></img>
            <h3>BEARS·EVENTS</h3>
          </a>
        </div>
        <a onClick={OAuthLogin}>
          <img src={spotify} alt="Bears Events" width="40" height="40"></img>
        </a>
      </div>
    )
  }
}

export default Navbar