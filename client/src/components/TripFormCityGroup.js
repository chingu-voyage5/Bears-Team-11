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
        type: "text",
        id: 'cityInput',
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
      <div className="field-body" style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div id="seperator" style={{
          display: 'flex'
        }}>
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
          <div className="field is-grouped"
            style={{
              marginTop: '4px',
              marginLeft: '12px',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <div className="control" style={{ margin: '2px' }}>
              <button
                type="button"
                className="button is-link"
                onClick={props.handleCityAdd}
                style={{ borderRadius: '50%' }}
              >
                <i className="fa fa-plus"></i>
              </button>
            </div>
            <div className="control" style={{ margin: '2px' }}>
              <button
                type="button"
                className="button is-danger"
                onClick={() => props.handleCityRemove(props.id)}
                style={{ borderRadius: '50%' }}
              >
                <i className="fa fa-times"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripFormGroup;
