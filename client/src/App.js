import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import TripForm from './components/TripForm';

import './styles/css/App.css';
import 'react-dates/initialize';


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
        <Navbar />
        <Hero />
        <TripForm />
        <Footer />
      </div>
    );
  }
}

export default App;
