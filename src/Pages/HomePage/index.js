import React from 'react';
import { Link } from 'react-router-dom';
import { Slug } from '../../Configurations/Slug';

const HomePage = () => {
  return (
    <div>
      <p>HomePage</p>
      <Link to={Slug.about}>Got to AboutPage</Link>
    </div>
  );
};

export default HomePage;
