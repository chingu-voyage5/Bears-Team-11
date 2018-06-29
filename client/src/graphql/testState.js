import gql from 'graphql-tag';

export default gql`
    query {
        rootState @client {
            locations
            genres
        }
    }
`