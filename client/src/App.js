import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import TripForm from './components/TripForm';
import AuthSuccess from './components/AuthSuccess';

import TestQuery from './TestQuery';
import TestMutation from './TestMutation';

import './styles/css/App.css';
import 'react-dates/initialize';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/success" component={AuthSuccess} />
        <Navbar />
        <Hero />
        <TestQuery/>
        <TripForm />
        <Footer />
      </div>
    );
  }
}

export default App;