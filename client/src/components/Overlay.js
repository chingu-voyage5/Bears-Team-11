import React, {Component} from 'react';
import '../styles/css/Overlay.css';
import spinner from '../assets/spinner.gif'

class Overlay extends Component {
  render(){
    return(
        <div id="overlay">
            <div id="overlay-content">
              <img src={spinner}></img>
              <p>Please wait while we compile your data</p>
            </div>
        </div>
    )
  }
}

export default Overlay