import React from 'react';
import CityBox from './CityBox';

import "../styles/css/Results.css";

const Results = (props) => 
  <section>
    <div className="hero is-small is-light is-bold">
      <div className='hero-body'>
        <h2 className="title has-text-centered"> Your Trip </h2>
      </div>
    </div>
    <div className='container'>
      {props.cities.map(city => 
        <CityBox key={city.id} city={city} genre={props.genres} />
      )}
    </div>
  </section>
    

export default Results;
