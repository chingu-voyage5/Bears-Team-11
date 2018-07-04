import React, { Component } from 'react';
import logo from '../assets/logo1.png';
import spotify from '../assets/spotify.png';
import '../styles/css/Navbar.css';

class Navbar extends Component {
  oAuth = () => {
    const url = '/login';
    const name = '_blank';
    const specs = 'width=500,height=500';
    window.open(url, name, specs);
  }
  
  render() {
    return (
      <div id="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item">
            <img src={logo} alt="Bears Events" width="40" height="60"></img>
            <h3>BEARS·EVENTS</h3>
          </a>
        </div>
        <a onClick={this.oAuth}>
          <img src={spotify} alt="Bears Events" width="40" height="40"></img>
        </a>
      </div>
    )
  }
}

export default Navbar