import React, {Component} from 'react';
import ScrollerEvent from './ScrollerEvent';
import '../styles/css/ConcertScoller.css'

class ConcertScroller extends Component {
  render(){
    const event = this.props.trip.map(((event, index) => {
      const eventName = event.title;
      const eventVenue = event.venue_name;
      const eventDate = event.date;
      const eventLink = event.event_url;
      return <ScrollerEvent name={eventName} index={index} key={index} venue={eventVenue} date={eventDate} link={eventLink}/>
    }))
    return(
      <div className="container is-marginless">
        <div className="box" id="scroller">
          {event}
        </div>
      </div>
    )
  }
}

export default ConcertScroller;
