const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `
  type Query {
    city (location: String!, genre: String, start_date: String!, end_date: String!): CityType
  }

  type CityType {
    location: String!
    totalEvents: String!
    events: [EventType]
  }

  type EventType {
    city: String!
    date: String!
    event_url: String!
    performer: ArtistType
    title: String!
    venue_address: String
    venue_name: String!
    venue_url: String!
  }
  
  type ArtistType {
    performer_name: String
    performer_url: String
    spotify: SpotifyType
  }

  type SpotifyType {
    id: String
    tracks: [TrackType]
  }

  type TrackType {
    name: String
    preview_url: String
    track_id: String
  }
`;

module.exports = makeExecutableSchema({ typeDefs, resolvers });