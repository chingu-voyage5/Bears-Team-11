import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import moment from 'moment';
import Playlist from './Playlist';
import ConcertScroller from './ConcertScroller';

import { getCityQuery } from '../graphql/queries';
import "../styles/css/Results.css";

class CityBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    }
  }

  handleDateFormat(date) {
    return moment(date).format('ll');
  }
  upperCaseCity(city){
    let location = city;
    location = location.split(' ');
    location.forEach((e, i)=>{
      let temp = e.split('');
      temp[0] = temp[0].toUpperCase()
      location[i] = temp.join('')
    })
    return location.join(' ')
  }

  render () {
    if (this.props.data.loading)
      return <div>Loading...</div>;

    // additional available vars - events, totalEvents
    const { location } = this.props.data.city;
    const { startDate, endDate } = this.props.city;

    return (
      <div>
        <div className='pad-top pad-bottom'>
          <div 
            className='box'
            onClick={() => this.setState({ expanded: !this.state.expanded })}
            >
            <div className='columns'>
              <div className='column has-text-centered'>
              <i className="fa fa-map-marker-alt" style={{marginRight: '5px', color: '#FF3860'}}></i>
                {/*{this.upperCaseCity(location)}*/}
                {location}
              </div>
              <div className='column is-1 has-text-centered has-text-danger'>
                <i className='fa fa-chevron-down' style={{color: '#7782E9'}}></i>
              </div>
              <div className='column has-text-centered'>
                <span>
                {this.handleDateFormat(startDate)} - {this.handleDateFormat(endDate)}
                </span>  
              </div>
            </div>
            {(this.state.expanded && <div>data successfully loaded</div>)}
          </div>
        </div>
        {/*(this.state.expanded ?
        <div>
          <ConcertScroller trip={trip} />
          <Playlist trip={trip} />
        </div>
        : null)*/}
      </div> 
    );
  }
}

// only single genre supported atm, not even sure if it is working as expected
export default graphql(getCityQuery, {
  options: ({ city: { location, startDate, endDate }, genre }) => ({
    variables: {
      location,
      genre,
      start_date: startDate.format("YYYYMMDD"),
      end_date: endDate.format("YYYYMMDD"),
    }
  })
})(CityBox);
