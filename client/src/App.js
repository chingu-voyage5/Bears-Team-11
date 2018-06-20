import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Apollo from './Apollo';
import './styles/css/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        <Apollo />
      </div>
    );
  }
}

export default App;
