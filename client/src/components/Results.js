import React, {Component} from 'react';

import CityBox from './CityBox';
import "../styles/css/Results.css";
// import Mock from '../lib/resultMock.js';

class Results extends Component {
  constructor(){
    super()
    this.state = {
      count: 0,
      show: false
    }
  }
  incrementCount(){
    // if(this.state.count !== this.props.cities.length){
    //   let temp = this.state.count;
    //   temp++;
    //   this.setState({count: temp})
    // } else 
    {
      setTimeout(()=>{
        this.props.toggle(false)
        this.setState({show: true})
      }, 1000)
    }
  }
  render(){
    let count = 0
    return(
      <div>
      {<section>
    {this.props.cities.length !== 0 && <div>{this.props.cities.length == this.state.count && <div className="hero is-small is-light is-bold">
      <div className='hero-body'>
        <h2 className="title has-text-centered"> Your Trip </h2>
      </div>
    </div>}
    <div className='container' id="city-container">
      {this.props.cities.map((city, index)=> 
        <CityBox key={city.id} city={city} genre={this.props.genres} inc={(index == this.props.cities.length-1)?this.incrementCount.bind(this):null}/>
      )}
    </div></div>}
  </section>}
  </div>
    )
  }
}
    

export default Results;