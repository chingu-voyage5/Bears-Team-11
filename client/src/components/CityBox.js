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
      expanded: false,
      loaded: false
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
  componentDidUpdate(){
    if(this.props.data.loading === false){
      // console.log(this.props.data)
      const events = this.props.data.city.events.filter((e) => e != undefined && e.performer && e.performer.spotify != undefined );
      if(events.length != 0 && this.props.inc != null){
        this.props.inc();
      }
    }
  }
  com
  render () {
    if (this.props.data.loading){
      return <div></div>;
    }
      

    // additional available vars - events, totalEvents
    // console.log('this.props.data :', this.props.data);
    const { location } = this.props.city;
    const { startDate, endDate } = this.props.city;
    const events = this.props.data.city.events.filter((e) => e != undefined && e.performer && e.performer.spotify != undefined );
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
                {this.upperCaseCity(location)}
                {/* {location} */}
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
            {/* {(this.state.expanded && <div>data successfully loaded</div>)} */}
          </div>
        </div>
        {((this.state.expanded && events.length != 0) ?
        <div id="result-div">
          <ConcertScroller trip={events} />
          <Playlist trip={events} />
        </div>
        : null)}
      </div> 
    );
  }
}

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
