import React, { Component } from 'react';

class PlaylistSave extends Component {
  render() {
    return (
      <div className='box is-radiusless'>
        <div className='columns has-text-centered'>
          <div className='column'>Playlist Name
            <div className='column'>Input form</div>
          </div>
          <div className='column'>Status
            <div className='column'>Select form</div>
          </div>
          <div className='column'>
            <button>Save on Spotify</button>
            <div className='column is-size-7 has-text-centered has-text-grey-light'>
              You will connect with you Spotify account to save your playlist. 
              The playlist will be reproduced on Spotify. We are not a streaming service.
            </div>
          </div>
        </div>
      </div>
        
    )
  }
};

export default PlaylistSave;
