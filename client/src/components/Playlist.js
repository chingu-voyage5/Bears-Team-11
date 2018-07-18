import React, { Component } from 'react';
import PlaylistSong from './PlaylistSong';
import { OAuthLogin } from '../utils/Oauth';
import '../styles/css/Playlist.css'

class Playlist extends Component {

  render() {
    const displayPlaylistSongs = () => {
      return this.props.events.map(((event, index) => {
        const { performer: { spotify, performer_name: artist }, eventUrl } = event
  
        const selectedTrack = spotify.tracks[0];
        const { name: title, preview_url: previewUrl } = selectedTrack;
  
        return <PlaylistSong key={index} index={index} artist={artist}  previewURL={previewUrl} eventUrl={eventUrl} title={title}/>
      }));
    }

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
          {displayPlaylistSongs()}
        </div>
      </div>
    )
  }
}

export default Playlist;