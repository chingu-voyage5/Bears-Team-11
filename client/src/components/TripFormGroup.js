import React from 'react';
import PlacesAutocomplete from "react-places-autocomplete";

const renderFunc = ({ getInputProps, getSuggestionItemProps, suggestions }) => (
  <div className="autocomplete-root">
    <input
      {...getInputProps({
        className: "input is-primary",
        type: "text"
      })}
    />
    <div className="autocomplete-dropdown-container">
      {suggestions.map(suggestion => {
        const className = suggestion.active ? 'has-background-primary' : 'has-background-white';
        return (
          <div {...getSuggestionItemProps(suggestion, { className })}>
            <span>{suggestion.description}</span>
          </div>
        );
      })}
    </div>
  </div>
);

const TripFormGroup = (props) => {
  return (
    <div>
      <PlacesAutocomplete
        value={props.address}
        onChange={address => props.handleAddressChange(props.id, address)}
      >
        {renderFunc}
      </PlacesAutocomplete>
    </div>
  )
};

export default TripFormGroup;