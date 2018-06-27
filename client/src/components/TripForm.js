import React, { Component } from "react";
import uuidv1 from "uuid/v1";

import TripFormCities from './TripFormCities';
import TripFormGenres from './TripFormGenres';

import "../styles/css/TripForm.css";

const cityMock = {
  id: uuidv1(),
  address: "",
  startDate: null,
  endDate: null,
  focusedDateInput: null,
};

const GENRES = [
  'Hip-hop',
  'Country',
  'Pop',
  'Rock',
  'Soul',
  'Classical',
  'EDM',
  'Jazz'
]


class TripForm extends Component {
  constructor(props) {
    super(props);

    // cities is an array with each city having its own unique id
    this.state = {
      cities: [cityMock],
      genres: GENRES
    };
  }

  // handler for PlacesAutocomplete 'onChange'
  handleAddressChange = (id, address) => {
    this.setState(prev => ({
      cities: prev.cities.map(
        city => (city.id === id ? { ...city, address } : city)
      )
    }));
  };

  // handler for DateRangePicker 'onDatesChange'
  handleDateChange = (id, startDate, endDate) => {
    this.setState(prev => ({
      cities: prev.cities.map(
        city => (city.id === id ? { ...city, startDate, endDate } : city)
      )
    }));
  };

  // handler for DateRangePicker 'onFocusChange'
  handleDateInputFocusChange = (id, focusedDateInput) => {
    this.setState(prev => ({
      cities: prev.cities.map(
        city => (city.id === id ? { ...city, focusedDateInput } : city)
      )
    }));
  }

  handleCityAdd = () => {
    // maximum number of allowed cities - 5
    if (this.state.cities.length > 4)
      return;

    this.setState(prev => ({
      cities: [...prev.cities, { ...cityMock, id: uuidv1() }]
    }));
  };

  handleCityRemove = id => {
    // minimum number for allowed cities - 1
    if (this.state.cities.length < 2)
      return;
    
    this.setState(prev => ({
      cities: prev.cities.filter(city => city.id !== id)
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('Form has been submitted', this.state);
  }

  render() {
    return (
      <form className="landing-trip-form" onSubmit={this.handleSubmit}>
        <TripFormCities
          cities={this.state.cities}
          handleAddressChange={this.handleAddressChange}
          handleDateChange={this.handleDateChange}
          handleDateInputFocusChange={this.handleDateInputFocusChange}
          handleCityAdd={this.handleCityAdd}
          handleCityRemove={this.handleCityRemove}
        />
        <TripFormGenres
          genres={GENRES}
        />
        <div className="control has-text-centered">
          <button className="button is-success">Submit</button>
        </div>
      </form>
    );
  }
}

export default TripForm;
