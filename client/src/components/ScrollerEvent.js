import React, {Component} from 'react';
import moment from 'moment';

import '../styles/css/Event.css'

class ScrollerEvent extends Component {
  render(){
    const { title, venue, date, url } = this.props;

    return(
    <li className="box is-marginless" id="concert">
      <div className='columns'>
          <div className='column is-4 has-text-centered'>{title}</div>
          <div className='column is-4 has-text-centered'>{venue}</div>
          <div className='column is-2 has-text-centered'>{moment(date).format('MMMM Do, h:mm a')}</div>
          <div className='column is-size-7 has-text-centered'>
            <a href={url} target='_blank'>Event Link</a>
          </div>
      </div>
    </li>
    )
  }
}

export default ScrollerEvent;
