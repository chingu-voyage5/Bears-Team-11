import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './styles/css/index.css';
import ApolloClient from "apollo-boost";
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';
import { ApolloLink } from 'apollo-link';
import { ApolloProvider } from "react-apollo";
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';

const cache = new InMemoryCache()
const defaults = {
  rootState: {
    __typename: 'rootState',
    locations: [{
      __typename: 'locations',
      city: '',
      start_date: '',
      end_date: '',
    }],
    genres: [],
    test: false
  }
}

const stateLink = withClientState({
  cache,
  resolvers: {
    Mutation: {
      setTest: (_, { isTrue }, { cache }) => {
        const query = gql`
          query {
              rootState @client {
                  test
              }
          }
        `
        const previous = cache.readQuery({query});
        console.log(previous)
        const data = {
          test: isTrue
        }
        cache.writeData({ data });
        return null
      }
    }
  },
  defaults: defaults,
})

const client = new ApolloClient({
  link: ApolloLink.from([
    stateLink,
    new HttpLink({
      uri: "http://localhost:5000/graphql"
    })
  ]),
  cache
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
  , document.getElementById('root'));
registerServiceWorker();