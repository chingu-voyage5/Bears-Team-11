import React, { Component } from "react";
import uuidv1 from "uuid/v1";

import TripFormGroup from "./TripFormGroup";

import "../styles/css/TripForm.css";

const cityMock = {
  id: uuidv1(),
  address: "",
  startDate: null,
  endDate: null,
  focusedDateInput: null,
};

class TripForm extends Component {
  constructor(props) {
    super(props);

    // cities is an array with each city having its own unique id
    this.state = {
      cities: [cityMock],
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

  // handler for add city button
  handleCityAdd = () => {
    // maximum number of allowed cities - 5
    if (this.state.cities.length > 4)
      return;

    this.setState(prev => ({
      cities: [...prev.cities, { ...cityMock, id: uuidv1() }]
    }));
  };

  // handler for remove city button
  handleCityRemove = id => {
    // minimum number for allowed cities - 1
    if (this.state.cities.length < 2)
      return;
    
    this.setState(prev => ({
      cities: prev.cities.filter(city => city.id !== id)
    }));
  };

  render() {
    return (
      <form className="landing-trip-form">
        {this.state.cities.map(city => (
          <TripFormGroup
            key={city.id}
            id={city.id}
            address={city.address}
            handleAddressChange={this.handleAddressChange}
            startDate={city.startDate}
            endDate={city.endDate}
            handleDateChange={this.handleDateChange}
            focusedDateInput={city.focusedDateInput}
            handleDateInputFocusChange={this.handleDateInputFocusChange}
            handleCityAdd={this.handleCityAdd}
            handleCityRemove={this.handleCityRemove}
          />
        ))}
      </form>
    );
  }
}

export default TripForm;
