import React, { Component } from 'react';
import moment from 'moment';
import Playlist from './Playlist';
import ConcertScroller from './ConcertScroller';
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
    const { trip } = this.props;

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
                {this.upperCaseCity(trip.location)}
              </div>
              <div className='column is-1 has-text-centered has-text-danger'>
                <i className='fa fa-chevron-down' style={{color: '#7782E9'}}></i>
              </div>
              <div className='column has-text-centered'>
                <span>
                {this.handleDateFormat(trip.start_date)} - {this.handleDateFormat(trip.end_date)}
                </span>  
              </div>
            </div>
          </div>
        </div>
        {(this.state.expanded ?
        <div>
          <ConcertScroller trip={trip} />
          <Playlist trip={trip} />
        </div>
        : null)}
      </div> 
    );
  }
}

export default CityBox;
