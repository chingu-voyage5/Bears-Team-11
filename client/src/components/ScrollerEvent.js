import React, {Component} from 'react';
import moment from 'moment';
import '../styles/css/Event.css'

class ScrollerEvent extends Component {
  constructor(){
    super()
    this.state = {

    }
  }

  render(){
    const { name } = this.props;
    const { venue } = this.props;
    const { date } = this.props;
    const { link } = this.props;

    return(
    <div className="box is-marginless" id="concert">
      <div className='columns'>
          <div className='column is-4 has-text-centered'>{name}</div>
          <div className='column is-4 has-text-centered'>{venue}</div>
          <div className='column is-2 has-text-centered'>{moment(date).format('MMMM Do, h:mm a')}</div>
          <div className='column is-size-7 has-text-centered'>
            <a href={link} target='_blank'>Event Link</a>
          </div>
      </div>
    </div>
    )
  }
}

export default ScrollerEvent