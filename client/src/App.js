import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TripFormContainer from './components/TripFormContainer';
import TripForm from './components/TripForm';

import './styles/css/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        <TripFormContainer>
          <TripForm />
        </TripFormContainer>
      </div>
    );
  }
}

export default App;
