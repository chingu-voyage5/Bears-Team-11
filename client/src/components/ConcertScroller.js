import React, {Component} from 'react';
import ScrollerEvent from './ScrollerEvent';
import '../styles/css/ConcertScoller.css'

class ConcertScroller extends Component {
  constructor(){
    super()
    this.state = {

    }
  }
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
          {/* <div className="columns">
            <div className="column is-4 has-text-centered">
              Event
            </div>
            <div className="column is-1 has-text-centered">
              Venue
            </div>
            <div className="column is-1 has-text-centered">
              Date
            </div>
            <div className="column is-1 has-text-centered">
              URL
            </div>
          </div> */}
          {event}
        </div>
      </div>
    )
  }
}

export default ConcertScroller