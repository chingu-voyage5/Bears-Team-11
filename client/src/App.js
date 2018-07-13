import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import TripForm from './components/TripForm';
import Results from './components/Results';
import Overlay from './components/Overlay';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import './styles/css/App.css';
import 'react-dates/initialize';

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

class App extends Component {
  state = {
    submit: false,
    submittedCities: [],
    submittedGenres: [],
  }

  handleFormSubmit = (cities, genres) => {    
    this.setState({ 
      submittedCities: cities,
      submittedGenres: genres
    });
  };
  toggleOverlay(bool){
    if(bool){
      this.setState({submit: bool})
      // document.querySelector('#overlay').className = 'animated fadeIn'
    } else {
      this.setState({submit: bool})
      // document.querySelector('#overlay').className = 'animated fadeOut'
    }
  }
  render() {
    return (
      <ApolloProvider client={client}>
        <div style={{position: 'relative'}}>
          <Navbar />
          <Hero />
          <TripForm
            handleFormSubmit={this.handleFormSubmit}
            toggle={this.toggleOverlay.bind(this)}
          />
          {/* {this.state.submit && <Overlay />} */}
          <Results
            cities={this.state.submittedCities}
            genres={this.state.submittedGenres}
            toggle={this.toggleOverlay.bind(this)}
          />
          <Footer />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
