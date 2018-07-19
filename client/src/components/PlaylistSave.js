import React, { Component } from 'react';

class PlaylistSave extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlistName: '',
      status: 'Public'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    console.log(this.state)
    return (
      <div className='box is-radiusless'>
        <div className='columns has-text-centered'>
          <form onSubmit={this.handleSubmit}>
            <div>Playlist Name
              <input type='text' name='playlistName' value={this.state.playlistName} onChange={this.handleChange}/>
            </div>
            <div>Status
              <div className='control'>
                <label className='radio'>
                  <input
                    type='radio'
                    name='status'
                    value='Public'
                    checked={this.state.status === 'Public'}
                    onChange={this.handleChange}
                  />
                  Public
                </label>
                <label className='radio'>
                  <input 
                  type='radio'
                  name='status'
                  value='Private'
                  checked={this.state.status === 'Private'}
                  onChange={this.handleChange}
                  />
                  Private
                </label>
              </div>
            </div>
          </form>
          <div className='column'>
            <button type='submit' >Save on Spotify</button>
            <div className='is-size-7 has-text-centered has-text-grey-light'>
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
