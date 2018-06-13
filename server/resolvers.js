require('dotenv').config();
const fetch = require('node-fetch');

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
        // location: data => data.location,
        totalEvents: data => data.total_items,
        events: data => data.events.event
    },

    EventType: {
        // spotify: (event) => {
        //fetch(...artist)
        city: event => event.city_name,
        date: event => event.start_time,
        event_url: event => event.url,
        performer: event => (!event.performers)?null:event.performers.performer,
        title: event => event.title,
        venue_address: event => event.venue_address,
        venue_name: event => event.venue_name,
        venue_url: event => event.venue_url
    },

    ArtistType: {
        performer_name: artist => (artist.length > 1) ? artist[0].name : artist.name,
        performer_url: artist => (artist.length > 1) ? artist[0].url : artist.url,
    },

    SpotifyType: {
        // use spotify fetch
    },

    TrackType: {},


};

module.exports = resolvers;