import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import moment from 'moment';

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
                {location}
              </div>
              <div className='column is-1 has-text-centered has-text-danger'>
                <i className='fa fa-chevron-down'></i>
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
