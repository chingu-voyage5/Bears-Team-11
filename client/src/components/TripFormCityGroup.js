import React from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import { DateRangePicker } from "react-dates";

import "react-dates/lib/css/_datepicker.css";

// refer to https://github.com/hibiken/react-places-autocomplete
const renderFunc = ({ getInputProps, getSuggestionItemProps, suggestions }) => (
  <div className="field">
    <input
      {...getInputProps({
        className: "input is-primary",
        type: "text"
      })}
    />

    <div className="autocomplete-dropdown-container">
      {suggestions.map(suggestion => {
        const className = suggestion.active
          ? "has-background-primary"
          : "has-background-white";
        return (
          <div {...getSuggestionItemProps(suggestion, { className })}>
            <span>{suggestion.description}</span>
          </div>
        );
      })}
    </div>
  </div>
);

const placesOnError = (status, clearSuggestions) => {
  console.error("Google Maps API returned error with status: ", status);
  clearSuggestions();
};

const TripFormGroup = props => {
  return (
    <div className="field is-horizontal">
      <div className="field-body">
        <PlacesAutocomplete
          value={props.address}
          onChange={address => props.handleAddressChange(props.id, address)}
          onError={placesOnError}
        >
          {renderFunc}
        </PlacesAutocomplete>

        <DateRangePicker
          startDate={props.startDate}
          startDateId={`startDate ${props.id}`}
          endDate={props.endDate}
          endDateId={`endDate ${props.id}`}
          onDatesChange={({ startDate, endDate }) =>
            props.handleDateChange(props.id, startDate, endDate)
          }
          focusedInput={props.focusedDateInput}
          onFocusChange={focusedDateInput =>
            props.handleDateInputFocusChange(props.id, focusedDateInput)
          }
        />
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button
            type="button"
            className="button is-link"
            onClick={props.handleCityAdd}
          >
            add
          </button>
        </div>
        <div className="control">
          <button
            type="button"
            className="button is-danger"
            onClick={() => props.handleCityRemove(props.id)}
          >
            remove
          </button>
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD:client/src/components/TripFormCityGroup.js
export default TripFormCityGroup;
=======
export default TripFormGroup;
>>>>>>> development:client/src/components/TripFormGroup.js
