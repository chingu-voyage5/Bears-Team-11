import React, { Component } from "react";

import TripFormGroup from "./TripFormGroup";

import "../styles/css/TripForm.css";

const cityMock = {
  id: 0,
  address: "",
  startDate: null,
  endDate: null
};

class TripForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: [cityMock]
    };
  }

  handleAddressChange = (id, address) => {
    this.setState(prev => ({
      cities: prev.cities.map(
        city => (city.id === id ? { ...city, address } : city)
      )
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
          />
        ))}
      </form>
    );
  }
}

export default TripForm;
