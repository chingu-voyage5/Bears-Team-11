import React from 'react';
import github from '../assets/github.png';
import chingu from '../assets/chingu.png';

const footer = () => {
  let height = `${window.innerHeight / 4+25}px`;
  
  return (
    <footer className="footer" style={{
      paddingBottom: '40px',
      marginTop: height
    }}>
      <div className='container is-small'>
        <div className='columns'>
          <div className='column has-text-centered'>
            <a className="content" href="https://github.com/chingu-voyage5/Bears-Team-11">
                <img src={github} alt='Github Logo' width="30" height="30"/>
            </a>
          </div>
          <div className='column has-text-centered'>
            <p className='content'><i className="far fa-copyright"></i> Bears 11</p>
          </div>
          <div className='column has-text-centered'>
            <a className='content' href='https://medium.com/chingu'>
              <img src={chingu} alt='Chingu Project Logo' width="30" height="30"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default footer;
