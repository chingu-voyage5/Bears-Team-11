import { gql } from 'apollo-boost';

const getCityQuery = gql`
  query($location: String!, $genre: String!, $start_date: String!, $end_date: String!) {
    city(location: $location, genre: $genre, start_date: $start_date, end_date: $end_date) {
      totalEvents
      events {
        city
        date
        event_url
        performer {
          performer_name
          performer_url
          spotify {
            id
            tracks {
              name
              preview_url
              track_id
            }
          }
        }
        title
        venue_address
        venue_name
        venue_url
      }
    }
  }
`;

export {
  getCityQuery
}