import React, { Component } from 'react';
import moment from 'moment';
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
                {trip.city}
              </div>
              <div className='column is-1 has-text-centered has-text-danger'>
                <i className='fa fa-chevron-down'></i>
              </div>
              <div className='column has-text-centered'>
                <span>
                {this.handleDateFormat(trip.startDate)} - {this.handleDateFormat(trip.endDate)}
                </span>  
              </div>
            </div>
            {(this.state.expanded && <div>Hi</div>)}
          </div>
        </div>
      </div> 
    );
  }
}

export default CityBox;
