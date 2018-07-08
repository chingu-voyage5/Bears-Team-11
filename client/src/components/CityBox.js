import React, { Component } from 'react';
import moment from 'moment';
import Playlist from './Playlist';
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
                {trip.location}
              </div>
              <div className='column is-1 has-text-centered has-text-danger'>
                <i className='fa fa-chevron-down'></i>
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
          <Playlist trip={trip} />
        : null)}
      </div> 
    );
  }
}

export default CityBox;
