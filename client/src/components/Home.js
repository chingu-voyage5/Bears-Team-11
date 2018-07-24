import React, { Component } from 'react';
import Hero from './Hero';
import TripForm from './TripForm';

class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <TripForm handleFormSubmit={this.props.handleFormSubmit} />
      </div>
    )
  }
  
}

export default Home;