import gql from 'graphql-tag';

export default gql`
    query {
        testState @client {
            test
        }
    }
`