import React from 'react';

const TripFormGenres = (props) => (
  <div className="select is-multiple">
    <select multiple size="8">
      {props.genres.map((genre, idx) => <option key={idx} value={genre}>{genre}</option>)}
    </select>
  </div>
);

export default TripFormGenres;