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
    return (
      <div className='container box is-radiusless'>
        <div className='has-text-centered'>
          <form className='columns' onSubmit={this.handleSubmit}>
            <div className='column'> Playlist Name
              <div className='field columns'>
                <div className='control column is-6 is-offset-3'>
                  <input className='input is-rounded is-small is-success has-text-centered has-margin-top-lg' type='text' name='playlistName' value={this.state.playlistName} onChange={this.handleChange}/>
                </div>
              </div>
            </div>
            <div className='column'> Status
              <div className='control columns is-centered'>
                <div className='column is-3'>
                  <label className='radio column has-text-centered'>
                    <input
                      className='has-margin-bottom-md tab-responsive'
                      type='radio'
                      name='status'
                      value='Public'
                      checked={this.state.status === 'Public'}
                      onChange={this.handleChange}
                    />
                    Public
                  </label>
                </div>
                <div className='column is-3 is-offset-1'>
                  <label className='radio column has-text-centered'>
                    <input
                    className='has-margin-bottom-md'
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
            </div>
            <div className='column'>
              <button type='submit' className='has-margin-bottom-md'>Save on Spotify</button>
                <div className='is-size-7 has-text-centered has-text-grey-light'>
                  You will connect with you Spotify account to save your playlist. 
                  The playlist will be reproduced on Spotify. We are not a streaming service.
                </div>
            </div>
          </form>
        </div>
      </div>
        
    )
  }
};

export default PlaylistSave;
