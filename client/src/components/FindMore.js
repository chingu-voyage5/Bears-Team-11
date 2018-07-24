import React from 'react';
import { Link } from 'react-router-dom';

const FindMore = () =>
  <section className="section has-text-centered">
    <Link to='/'>
      <span className="fas fa-music"></span>
      Find More Music
      <span className="fas fa-music"></span>
    </Link>
  </section>

export default FindMore;