const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `
  type Query {
    city (location: String!, genre: String!, start_date: String!, end_date: String!): CityType
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
    venue_address: String!
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

const example = { 
  "city": {
    "location": "New York",
    "totalEvents": 144,
    "events": [
      {
        "city": "New York",
        "date": "2018-06-22 22:00:00",
        "event_url":"http://newyorkcity.eventful.com/events/pride-horse-meat-disco-dj-holographic-and-disco-/E0-001-114199350-4?utm_source=apis&utm_medium=apim&utm_campaign=apic",
        "performer": "Horse Meat Disco",
        "performer_pic":"http://d1marr3m5x4iac.cloudfront.net/images/medium/I0-001/039/152/383-7.jpeg_/horse-meat-disco-83.jpeg",
        "performer_url":"http://concerts.eventful.com/performers/horse-meat-disco-/P0-001-014210923-7?utm_source=apis&utm_medium=apim&utm_campaign=apic",
        "title":"Pride - Horse Meat Disco/ DJ Holographic and Discodromo in The Panther Room",
        "spotify": {
          "id": "5MnToV7aAt2Zy9ag3DAsna",
          "tracks": [
            {
              "name": "Candidate for Love - Joey Negro Disco Blend",
              "preview_url": "https://p.scdn.co/mp3-preview/33a76cc7fa3cb59aafa62f39635f809b83f78877?cid=774b29d4f13844c495f206cafdad9c86",
              "track_id": "4XDi9whuZZ6cMh3nP8EIlI"
            },
            {
              "name": "Dancing Into The Stars",
              "preview_url": "https://p.scdn.co/mp3-preview/8f5ff73165cd45cbbe760f5d48de35c3757a463e?cid=774b29d4f13844c495f206cafdad9c86",
              "track_id": "4zpq2oZyvrB0IC3MsL2Fzn"
            },
            {
              "name": "Candidate For Love (Horse Meat Disco mix) - Horse Meat Disco Mix",
              "preview_url": "https://p.scdn.co/mp3-preview/da3cc20ce89536080b77ff99bfd23c53bf1e6729?cid=774b29d4f13844c495f206cafdad9c86",
              "id": "3LEfkBAnHKdRhCq7BwPIh0"
            }
          ]
        },
        "venue_address":"74 Wythe Ave, Brooklyn",
        "venue_name":"Output",
        "venue_url":"http://newyorkcity.eventful.com/venues/output-/V0-001-010729177-7?utm_source=apis&utm_medium=apim&utm_campaign=apic"
      }
    ]
  }
}