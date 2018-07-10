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
    console.log(this.props);
    return <div>check console for data</div>
    // return (
    //   <div>
    //     <div className='pad-top pad-bottom'>
    //       <div 
    //         className='box'
    //         onClick={() => this.setState({ expanded: !this.state.expanded })}
    //         >
    //         <div className='columns'>
    //           <div className='column has-text-centered'>
    //             {trip.location}
    //           </div>
    //           <div className='column is-1 has-text-centered has-text-danger'>
    //             <i className='fa fa-chevron-down'></i>
    //           </div>
    //           <div className='column has-text-centered'>
    //             <span>
    //             {this.handleDateFormat(trip.start_date)} - {this.handleDateFormat(trip.end_date)}
    //             </span>  
    //           </div>
    //         </div>
    //         {(this.state.expanded && <div>Hi</div>)}
    //       </div>
    //     </div>
    //   </div> 
    // );
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
