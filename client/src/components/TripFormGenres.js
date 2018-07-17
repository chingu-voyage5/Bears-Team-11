import React from "react";
import classNames from "classnames";

const TripFormGenres = props => (
    <div className="buttons" id="genres">
      {props.genres.map(genre => 
        <button 
          key={genre.name}
          type="button"
          className={(!genre.selected) ? classNames("button outlined") : classNames("button is-primary")}
          onClick={() => {props.genreToggle(genre.name)}}
          id="genre"
        >
          {genre.name.toUpperCase()}
        </button>
      )}
    </div>
);

export default TripFormGenres;
