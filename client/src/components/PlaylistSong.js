import React, { Component } from 'react';
import Sound from 'react-sound';

class PlaylistSong extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playStatus: Sound.status.STOPPED
    }
  };

  playButton() {
    const status = this.playStatus;
    if (status != Sound.status.PLAYING) {
      this.setState({ playStatus: Sound.status.PLAYING });
    } else {
      this.setState({ playStatus: Sound.status.PAUSED });
    };
  };

  stopButton() {
    this.setState({ playStatus: Sound.status.STOPPED });
  };

  render() {
    const { artist } = this.props;
    const { index } = this.props;
    const { previewURL } = this.props;
    const { ticket } = this.props;
    const { title } = this.props;
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
          <i 
            className='far fa-play-circle'
            aria-hidden='true'
            onClick={this.playButton}
          ></i>
          <i 
            className='far fa-stop-circle'
            onClick={this.stopButton}
          ></i>
        </div>
      )
    }

    return (
      <div className="box is-marginless is-radiusless">
        {sound}
        <div className='columns'>
          <div className='column has-text-centered is-1'>{index + 1}</div>
          <div className='column is-4'>{artist}</div>
          <div className='column is-4'>{title}</div>
          <div className='column is-2 has-text-centered'>{player}</div>
          <div className='column is-size-7'>
            <a href={ticket} target='_blank'>Tickets</a>
          </div>
        </div>
      </div>
    )
  }
}

export default PlaylistSong;
