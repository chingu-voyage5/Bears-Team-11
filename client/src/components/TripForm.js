import React, { Component } from "react";
import uuidv1 from "uuid/v1";
import moment from 'moment';
import { withRouter } from 'react-router-dom';

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

let GENRES = [
  { name: "hip-hop", selected: false },
  { name: "country", selected: false },
  { name: "rock", selected: false },
  { name: "electronic", selected: false },
  { name: "jazz", selected: false },
  { name: "classical", selected: false },
  { name: "latin", selected: false },
  { name: "metal", selected: false },
  { name: "folk", selected: false },
  { name: "pop", selected: false },
  { name: "r&b", selected: false },
  { name: "soul", selected: false },
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
  
  componentDidMount() {
    this.hydrateState();

    // save to localStorage if leave/refresh
    window.addEventListener(
      'beforeunload',
      this.setLocalStorage.bind(this)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      'beforeunload',
      this.setLocalStorage.bind(this)
    );

    // save to localStorage if form submitted
    this.setLocalStorage();
  }

  setLocalStorage = () => {
    const genres = this.state.genres
      .filter(genre => genre.selected);

    localStorage.setItem('genres', JSON.stringify(genres)); 
    localStorage.setItem('cities', JSON.stringify(this.state.cities));
  }

  hydrateState = () => {
    for (let key in this.state) {
      if(localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key)
        try {
          value = JSON.parse(value);
          if (key === 'cities') {
            value = value.map(cityKey => {
              return {
                ...cityKey,
                startDate: cityKey.startDate ? moment(cityKey.startDate, 'YYYYMMDD') : null,
                endDate: cityKey.endDate ? moment(cityKey.endDate, 'YYYYMMDD') : null
              }
            })
          }
          if (key === 'genres') {
            value = GENRES.map(genre => {
              let updatedGenre = value.find(selectedGenre => selectedGenre.name === genre.name);
              return updatedGenre ? {...genre, ...updatedGenre } : genre
            });
            }
            
          this.setState({ [key]: value})
        } catch (error) {
          this.setState({ 
            cities: [cityMock],
            genres: GENRES
          })
        }
      }
    }
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

    // genres is expected to be a String of form "music_soul,music_pop"
    const genres = this.state.genres
      .filter(genre => genre.selected)
      .map(genre => 'music_' + genre.name)
      .join(',');
    
    this.props.handleFormSubmit(
      this.state.cities,
      genres,
    );

    this.props.history.push('/results');
  };

  isDisabled = () => {
    const selectedGenres = this.state.genres.filter(genre => genre.selected);
    const selectedCities = this.state.cities.filter(city => city.location && city.startDate && city.endDate);
    if (!selectedGenres.length) return true;
    if (selectedCities.length !== this.state.cities.length) return true;
  }

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
          <button className="button is-success" disabled={this.isDisabled()}>submit
            <i className="fa fa-arrow-right"></i>
          </button>
        </div>
      </form>
    );
  }
}

export default withRouter(TripForm);
