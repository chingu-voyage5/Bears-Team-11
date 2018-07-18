import React, { Component } from 'react';
import CityBox from './CityBox';

import "../styles/css/Results.css";

class Results extends Component {
  state = {
    expandedCity: ''
  }

  expandCity = (cityId) => {
    // currently not toggling off, to be fixed
    if (cityId === this.state.expandedCity) {
      this.setState({ expandedCity: '' })
    }

    this.setState({ expandedCity: cityId })
  }
    

  render() {
    return (
      <section>
        <div className="hero is-small is-light is-bold">
          <div className='hero-body'>
            <h2 className="title has-text-centered"> Your Trip </h2>
          </div>
        </div>
        <div className='container'>
          {this.props.cities.map(city => 
            <CityBox 
              key={city.id}
              id={city.id}
              city={city}
              genres={this.props.genres}
              expandCity={this.expandCity}
              expanded={city.id === this.state.expandedCity}
            />
          )}
        </div>
      </section>
    )
  }
}
  
    

export default Results;
