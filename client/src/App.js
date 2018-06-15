import React, { Component } from 'react';
import './styles/css/App.css';


class App extends Component {
  constructor() {
    super();
    const params = this.getHashParams();
    this.state = {
      loggedIn: params.access_token ? true : false
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
  componentWillMount() {
    let test = String(window.location.href).split('&')
    test.splice(0, 1)
    if (test.length > 1) {
      const accessToken = test[0].split('=')[1]
      const refreshToken = test[1].split('=')[1]
    }
    console.log(process.env)
  }
  render() {
    return (
      <div>
        <a href="/#" onClick={e => {
          fetch('/login', {
            method: 'get',
            credentials: 'include'
          }).then(res => res.json()).then(res => {
            window.location.href = res.url
          })
        }}>
          <button>test button</button>
        </a>
      </div>
    );
  }
}

export default App;
