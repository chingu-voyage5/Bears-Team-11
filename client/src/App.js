import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import TripForm from './components/TripForm';
import Results from './components/Results';

import './styles/css/App.css';
import 'react-dates/initialize';

class App extends Component {
  render() {
    return (
      <div style={{position: 'relative'}}>
        <Navbar />
        <Hero />
        <TripForm />
        <Results />
        <Footer />
      </div>
    );
  }
}

export default App;
