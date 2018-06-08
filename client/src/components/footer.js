import React from 'react';

const footer = () => {
  return (
    <footer className="footer">
      <div className='container is-small'>
        <div className='columns'>
          <div className='column has-text-centered'>
            <a className='content' href='https://github.com/chingu-voyage5/Bears-Team-11'>Github</a>
          </div>
          <div className='column has-text-centered'>
            <p className='content'><i class="far fa-copyright"></i> Bears 11</p>
          </div>
          <div className='column has-text-centered'>
            <a className='content' href='https://medium.com/chingu'>The Chingu Project</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default footer;
