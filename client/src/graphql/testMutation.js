import gql from 'graphql-tag';

export default gql`
    mutation setTest($isTrue: Boolean!) {
        setTest(isTrue: $isTrue) @client{
            test
        }
    }
`;