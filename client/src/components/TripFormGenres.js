import React from "react";
import classNames from "classnames";

const TripFormGenres = props => (
  <div className="buttons is-centered">
    {props.genres.map(genre => 
      <button 
        key={genre.name}
        type="button"
        className={classNames("button", { "is-warning": genre.selected })}
        onClick={() => props.genreToggle(genre.name)}
      >
        {genre.name}
      </button>
    )}
  </div>
);

export default TripFormGenres;