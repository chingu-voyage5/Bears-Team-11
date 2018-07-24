import React from 'react';
import { Query } from 'react-apollo';
import moment from 'moment';
import classNames from 'classnames';

import Playlist from './Playlist';
import ConcertScroller from './ConcertScroller';
import { getCityQuery } from '../graphql/queries';
import "../styles/css/Results.css";

const handleDateFormat = (date) => moment(date).format('ll');

const CityBox = ({ city: { location, startDate, endDate }, genres, id, expandCity, expanded }) => (
  <Query 
    query={getCityQuery} 
    variables={{ 
      location,
      start_date: startDate.format("YYYYMMDD"),
      end_date: endDate.format("YYYYMMDD"),
      genres
    }}
  >
    {({ loading, error, data }) => {
      let events = [];
      if (!loading && !error) {
        events = data.city.events.filter(event => event.performer && event.performer.spotify);
      }

      const buttonClass = classNames('button is-large is-white', {
        'is-loading': loading
      });

      const spanClass = classNames('icon', { 'has-text-danger': error, 'has-text-info': !error && data.city });
      const iconClass = classNames('fas', {'fa-times': error, 'fa-chevron-down': !error && data.city });

      return ( 
        <div>
          <div className='pad-top pad-bottom'>
            <div 
              className='box'
              >
              <div className='columns'>
                <div className='column has-text-centered'>
                <i className="fa fa-map-marker-alt" style={{marginRight: '5px', color: '#FF3860'}}></i>
                  {location}
                </div>
                <button
                  className={buttonClass}
                  onClick={() => {expandCity(id); console.log('here')}}
                  disabled={loading || error}
                >
                  <span className={spanClass} style={{ pointerEvents: 'none' }}>
                    <i className={iconClass}></i>
                  </span>
                </button>
                <div className='column has-text-centered'>
                  <span>
                  {handleDateFormat(startDate)} - {handleDateFormat(endDate)}
                  </span>  
                </div>
              </div>
            </div>
          </div>
          {
            expanded && data &&
            <div>
              <ConcertScroller events={events} />
              <Playlist events={events} />
            </div>
          }
        </div>
      );
    }}
    
  </Query>
)

export default CityBox;
