import React, {Component} from 'react';
import ScrollerEvent from './ScrollerEvent';
import '../styles/css/ConcertScoller.css'

class ConcertScroller extends Component {
  render(){
    const events = this.props.trip.events.filter((e) => e != undefined && e.performer && e.performer.spotify != undefined );
    const event = events.map(((event, index) => {
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
