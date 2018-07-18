import React, { Component } from 'react';
import Sound from 'react-sound';
import '../styles/css/Song.css'

class PlaylistSong extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playStatus: Sound.status.STOPPED
    }
  };

  playSong() {
    const status = this.state.playStatus;
    if (status !== Sound.status.PLAYING) {
      this.setState({ playStatus: Sound.status.PLAYING });
    } else {
      this.setState({ playStatus: Sound.status.PAUSED });
    }
  };

  stopSong() {
    this.setState({ playStatus: Sound.status.STOPPED });
  };

  render() {
    const { artist, index, previewURL, ticketUrl, title } = this.props;
    let sound;

    let player = <div className='is-size-7 has-text-danger'>Sorry, No Preview</div>

    if (previewURL) {
      sound = (
        <Sound
          url={previewURL}
          playStatus={this.state.playStatus}
        />
      );
      player = (
        <div>
          <button onClick={() => this.playSong()}>
            <i className='far fa-play-circle icon'></i>
          </button>
          <button onClick={() => this.stopSong()}>
            <i className='far fa-stop-circle icon'></i>
          </button>
        </div>
      )
    }

    return (
      <div className="box is-marginless" id="song">
        {sound}
        <div className='columns'>
          <div className='column has-text-centered is-1'>{index + 1}</div>
          <div className='column is-4'>{artist}</div>
          <div className='column is-4'>{title}</div>
          <div className='column is-2 has-text-centered'>{player}</div>
          <div className='column is-size-7 ticket'>
            <a href={ticketUrl} target='_blank'>Tickets</a>
          </div>
        </div>
      </div>
    )
  }
}

export default PlaylistSong;
