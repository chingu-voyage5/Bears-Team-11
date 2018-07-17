import React, { Component } from 'react';
import PlaylistSong from './PlaylistSong';
import { OAuthLogin } from '../utils/Oauth';
import '../styles/css/Playlist.css'

class Playlist extends Component {

  render() {
    const song = this.props.trip.map(((event, index) => {
      const firstTrackResult = event.performer.spotify.tracks[0];
      const trackArtist = event.performer.performer_name;
      const trackTitle = firstTrackResult.name;
      const trackPreviewURL = firstTrackResult.preview_url;
      const ticketURL = event.event_url;
      return <PlaylistSong artist={trackArtist} index={index} key={index} previewURL={trackPreviewURL} ticket={ticketURL} title={trackTitle}/>
    }))

    return (
      <div className="container is-paddingless">
        <div className="box" id="playlist">
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