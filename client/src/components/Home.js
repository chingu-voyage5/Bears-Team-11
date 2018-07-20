import React, { Component } from 'react';
import  { Redirect } from 'react-router-dom';
import Hero from './Hero';
import TripForm from './TripForm';

class Home extends Component {
  render() {
    if (this.props.toResults) return <Redirect to='/results' />;

    return (
      <div>
        <Hero />
        <TripForm
          handleFormSubmit={this.props.handleFormSubmit}
        />
      </div>
    )
  }
  
}

export default Home;