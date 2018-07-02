import React from 'react';

import TripFormCityGroup from "./TripFormCityGroup";

const TripFormCities = (props) => (
  props.cities.map(city => (
    <TripFormCityGroup
      key={city.id}
      id={city.id}
      address={city.address}
      handleAddressChange={props.handleAddressChange}
      startDate={city.startDate}
      endDate={city.endDate}
      handleDateChange={props.handleDateChange}
      focusedDateInput={city.focusedDateInput}
      handleDateInputFocusChange={props.handleDateInputFocusChange}
      handleCityAdd={props.handleCityAdd}
      handleCityRemove={props.handleCityRemove}
    />
  ))
);

export default TripFormCities;