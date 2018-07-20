import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Results from './components/Results';

import './styles/css/App.css';
import 'react-dates/initialize';

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

class App extends Component {
  state = {
    submittedCities: [],
    submittedGenres: '',
    toResults: false
  }

  handleFormSubmit = (cities, genres) => {    
    this.setState({ 
      submittedCities: cities,
      submittedGenres: genres,
      toResults: true
    });
  };

  render() {
    return (
      <BrowserRouter>
        <ApolloProvider client={client}>
          <div style={{position: 'relative'}}>
            <Navbar />
            <Switch>
              <Route exact path='/' component={() => <Home handleFormSubmit={this.handleFormSubmit} toResults={this.state.toResults}/>}/>
              <Route path='/results' component={() => <Results cities={this.state.submittedCities} genres={this.state.submittedGenres}/>}/>
              <Redirect from='*' to='/' />
            </Switch>
            <Footer />
          </div>
        </ApolloProvider>
      </BrowserRouter>
    );
  }
}

export default App;
