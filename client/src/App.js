import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Test from './Test';
import './styles/css/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        <Test />
      </div>
    );
  }
}

export default App;
