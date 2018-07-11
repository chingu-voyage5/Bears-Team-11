import React, { Component } from "react";
import uuidv1 from "uuid/v1";

import TripFormCities from "./TripFormCities";
import TripFormGenres from "./TripFormGenres";

import "../styles/css/TripForm.css";

const cityMock = {
  id: uuidv1(),
  location: "",
  startDate: null,
  endDate: null,
  focusedDateInput: null
};

const GENRES = [
  { name: "Hip-hop", selected: false },
  { name: "Country", selected: false },
  { name: "Pop", selected: false },
  { name: "Rock", selected: false },
  { name: "Soul", selected: false },
  { name: "Classical", selected: false },
  { name: "Electronic", selected: false },
  { name: "Jazz", selected: false }
];

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
  handleLocationChange = (id, location) => {
    this.setState(prev => ({
      cities: prev.cities.map(
        city => (city.id === id ? { ...city, location } : city)
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
  };

  handleCityAdd = () => {
    // maximum number of allowed cities - 5
    if (this.state.cities.length > 4) return;

    this.setState(prev => ({
      cities: [...prev.cities, { ...cityMock, id: uuidv1() }]
    }));
  };

  handleCityRemove = id => {
    // minimum number for allowed cities - 1
    if (this.state.cities.length < 2) return;

    this.setState(prev => ({
      cities: prev.cities.filter(city => city.id !== id)
    }));
  };

  genreToggle = name => {
    this.setState(prev => ({
      genres: prev.genres.map(
        genre =>
          genre.name === name ? { ...genre, selected: !genre.selected } : genre
      )
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const genres = this.state.genres
      .filter(genre => genre.selected)
      .map(genre => genre.name);
    
    this.props.handleFormSubmit(
      this.state.cities,
      genres,
    );
  };

  render() {
    return (
      <form className="landing-trip-form" onSubmit={this.handleSubmit}>
      <TripFormGenres genres={this.state.genres} genreToggle={this.genreToggle} />
        <TripFormCities
          cities={this.state.cities}
          handleLocationChange={this.handleLocationChange}
          handleDateChange={this.handleDateChange}
          handleDateInputFocusChange={this.handleDateInputFocusChange}
          handleCityAdd={this.handleCityAdd}
          handleCityRemove={this.handleCityRemove}
        />
        
        <div className="control has-text-centered" id="submit">
          <button className="button is-success">submit
            <i className="fa fa-arrow-right"></i>
          </button>
        </div>
      </form>
    );
  }
}

export default TripForm;
