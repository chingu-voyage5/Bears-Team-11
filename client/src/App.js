import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

import './styles/css/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        <Footer />
      </div>
    );
  }
}

export default App;
