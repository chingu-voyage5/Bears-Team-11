import React, { Component } from 'react';
import CityBox from './CityBox';
import "../styles/css/Results.css";
import Mock from '../lib/resultMock.js';

const renderTrips = Mock.data.city.map(locations => (
  <CityBox trip={locations} key={locations.location} />
));

class Results extends Component {
  render() {
    return (
      <section>
        <div className="hero is-small is-light is-bold">
          <div className='hero-body'>
            <h2 className="title has-text-centered"> Your Trip </h2>
          </div>
        </div>
        <div className='container'>
          {renderTrips}
        </div>
      </section>
    )
  }
}

export default Results;