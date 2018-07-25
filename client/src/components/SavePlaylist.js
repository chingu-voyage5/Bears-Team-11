import React from 'react';
import { Query } from 'react-apollo';
import { saveSpotifyPlaylist } from '../graphql/queries';

const SavePlaylist = ({ playlistName, playlistStatus, idArray }) => (
  <Query 
    query={saveSpotifyPlaylist} 
    variables={{
      playlistName,
      playlistStatus,
      idArray,
    }}
  >
  {({ loading, error, data }) => {
    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;

    return (
      <div></div>
    )
  }}
  </Query>
)

export default SavePlaylist
