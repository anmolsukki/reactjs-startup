import React from 'react';
import { Link } from 'react-router-dom';
import { Slug } from '../../Configurations/Slug';

const AboutPage = () => {
  return (
    <div>
      <p>AboutPage</p>
      <Link to={Slug.home}>Got to HomePage</Link>
    </div>
  );
};

export default AboutPage;
