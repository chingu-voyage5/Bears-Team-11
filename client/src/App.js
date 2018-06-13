import React, { Component } from 'react';
import './styles/css/App.css';

class App extends Component {
  constructor(){
    super();
    const params = this.getHashParams();
    this.state = {
      loggedIn: params.access_token ? true: false
    }
  }
  getHashParams() {
    let hashParams = {};
    let e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    return hashParams;
  }
  render() {
    return (
      <div>
        <a href="/#" onClick={e=>{
          fetch('/login').then(res=>res.json()).then(data=>{
            window.open(data.url)
          })
        }}>
          <button>test button</button>
        </a>
      </div>
    );
  }
}

export default App;
