import React, { Component } from 'react';
import CityBox from './CityBox';
import "../styles/css/Results.css";
// Here is the right structure for the response data
// Query: location: "new york", genre: "music_rock", start_date: "20180706", end_date: "20180720"
// import ResultMock from '../lib/resultMock.json';


// Sample data structure used for initial build
const data = [
  {
    city: 'San Francisco',
    startDate: '20180821',
    endDate: '20180829'
  },
  {
    city: 'London',
    startDate: '20181021',
    endDate: '20181029'
  },
  {
    city: 'Vancouver',
    startDate: '2018021',
    endDate: '20180929'
  }
]



  const renderTrips = data.map(locations => (
    <CityBox trip={locations} key={locations.city} />
  ));

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {trip};
  }

  render() {
    return (
      <section>
        <div className="hero is-small is-light is-bold">
          <div className='hero-body'>
            <h2 className="title has-text-centered"> Your Trip </h2>
          </div>
        </div>
        <div className='container'>
          {renderTrips}
        </div>
      </section>
    )
  }
}

export default Results;