require('dotenv').config();
const fetch = require('node-fetch');
const SpotifyWebApi = require('spotify-web-api-node');
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET
});
spotifyApi.clientCredentialsGrant().then((data) => {
  // Save the access token so that it's used in future calls
  spotifyApi.setAccessToken(data.body['access_token']);
});

const resolvers = {
  Query: {
    city: (root, args) => {
      // for genre - gotta map over all genres and add 'music_' to each
      // date format (20180616)
      return fetch(`http://api.eventful.com/json/events/search?app_key=${process.env.EVENTFUL_KEY}&categories=${args.genre}&location=${args.location}&date=${args.start_date}00-${args.end_date}00&page_size=25`)
        .then(res => res.json())
        .then(data => Object.assign({}, data, { location: args.location }))
    }
  },

  CityType: {
    location: data => data.location,
    totalEvents: data => data.total_items,
    events: data => data.events.event
  },

  EventType: {
    city: event => event.city_name,
    date: event => event.start_time,
    event_url: event => event.url,
    performer: event => (!event.performers) ? null : event.performers.performer,
    title: event => event.title,
    venue_address: event => event.venue_address,
    venue_name: event => event.venue_name,
    venue_url: event => event.venue_url
  },

  ArtistType: {
    performer_name: artist => (artist.length > 1) ? artist[0].name : artist.name,
    performer_url: artist => (artist.length > 1) ? artist[0].url : artist.url,
    spotify: artist => spotifyApi.searchArtists((artist.length > 1) ? artist[0].name : artist.name).then(data => data.body.artists.items[0])
  },

  SpotifyType: {
    id: spotify => spotify.id,
    tracks: spotify => spotifyApi.getArtistTopTracks(spotify.id, 'US').then(data => data.body.tracks)
  },

  TrackType: {
    name: tracks => tracks.name,
    preview_url: tracks => tracks.preview_url,
    track_id: tracks => tracks.id
  },


};

module.exports = resolvers;