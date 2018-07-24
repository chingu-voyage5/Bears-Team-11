import React, {Component} from 'react';
import ScrollerEvent from './ScrollerEvent';
import '../styles/css/ConcertScoller.css'

class ConcertScroller extends Component {
  render(){
    const renderScrollerItems = () => {
      return this.props.events.map(((event, index) => {
        const { title, venue_name: venue, date, event_url: url} = event;
        return <ScrollerEvent key={index} title={title} venue={venue} date={date} url={url}/>
      }));
    }

    return(
      <div className="container is-marginless">
        <ul className="box" id="scroller">
          {renderScrollerItems()}
        </ul>
      </div>
    )
  }
}

export default ConcertScroller;
