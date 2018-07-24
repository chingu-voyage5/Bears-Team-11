import React from 'react';
import { Query } from 'react-apollo';
import { saveSpotifyPlaylist } from '../graphql/queries';

const SavePlaylist = ({playlist: {playlistName, playlistStatus, idArray, token}}) => (<Query query={saveSpotifyPlaylist} variables={{
  playlistName,
  playlistStatus,
  idArray,
  token
}}>
  {({ loading, error, data }) => {
    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;

    return (
      <div></div>
    )
  }}
</Query>)

export default SavePlaylist