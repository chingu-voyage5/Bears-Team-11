import React, {Component} from 'react';

import CityBox from './CityBox';
import "../styles/css/Results.css";
// import Mock from '../lib/resultMock.js';

class Results extends Component {
  constructor(){
    super()
    this.state = {
      count: 0
    }
  }
  incrementCount(){
    if(this.state.count !== this.props.cities.length){
      let temp = this.state.count;
      temp++;
      this.setState({count: temp})
    } else {
      alert(this.state.count)
      setTimeout(()=>{
        this.props.toggle(false)
      }, 100)
    }
  }
  render(){
    return(
      <section>
    {this.props.cities.length !== 0 && <div>{this.props.cities.length == this.state.count && <div className="hero is-small is-light is-bold">
      <div className='hero-body'>
        <h2 className="title has-text-centered"> Your Trip </h2>
      </div>
    </div>}
    <div className='container'>
      {this.props.cities.map(city => 
        <CityBox key={city.id} city={city} genre={this.props.genres} inc={this.incrementCount.bind(this)}/>
      )}
    </div></div>}
  </section>
    )
  }
}
    

export default Results;