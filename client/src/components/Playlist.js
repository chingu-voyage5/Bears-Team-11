import React, { Component } from 'react';
import PlaylistSong from './PlaylistSong';
import { OAuthLogin } from '../utils/Oauth';

class Playlist extends Component {

  render() {
    const events = this.props.trip.events.filter((e) => e != undefined && e.performer && e.performer.spotify != undefined );
    const song = events.map(((event, index) => {
      const firstTrackResult = event.performer.spotify.tracks[0];
      const trackArtist = event.performer.performer_name;
      const trackTitle = firstTrackResult.name;
      const trackPreviewURL = firstTrackResult.preview_url;
      return <PlaylistSong artist={trackArtist}  title={trackTitle} previewURL={trackPreviewURL} key={index} index={index}/>
    }))

    return (
      <div className="container is-paddingless">
        <div className="box is-marginless is-radiusless">
          <div className='columns'>
            <div className='column is-1 has-text-centered'>
              #
            </div>
            <div className='column is-4'>
              Artist
            </div>
            <div className='column is-4'>
              Title
            </div>
            <div className='column is-3'>
              <button
                className='is-pulled-right'
                onClick={OAuthLogin}
              >
                Connect to Spotify
              </button>
            </div>
          </div>
          {song}
        </div>
      </div>
    )
  }
}

export default Playlist;