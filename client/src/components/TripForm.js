import React, { Component } from "react";
import uuidv1 from "uuid/v1";

import TripFormGroup from "./TripFormGroup";

import "../styles/css/TripForm.css";

const cityMock = {
  id: uuidv1(),
  address: "",
  startDate: null,
  endDate: null
};

class TripForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: [cityMock],
      focusedDateInput: null
    };
  }

  handleAddressChange = (id, address) => {
    this.setState(prev => ({
      cities: prev.cities.map(
        city => (city.id === id ? { ...city, address } : city)
      )
    }));
  };

  handleDateChange = (id, startDate, endDate) => {
    this.setState(prev => ({
      cities: prev.cities.map(
        city => (city.id === id ? { ...city, startDate, endDate } : city)
      )
    }));
  };

  handleDateInputFocusChange = focusedDateInput => {
    this.setState({ focusedDateInput });
  }

  handleCityAdd = () => {
    if (this.state.cities.length > 4)
      return;

    this.setState(prev => ({
      cities: [...prev.cities, { ...cityMock, id: uuidv1() }]
    }));
  };

  handleCityRemove = id => {
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
            focusedDateInput={this.state.focusedDateInput}
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
