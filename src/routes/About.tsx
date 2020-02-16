import * as React from 'react';
import { useParams } from 'react-router-dom';

const About = () => {
  let { id } = useParams();

  return (
    <div>
      <h3>About, {id}</h3>
    </div>
  );
};

export default About;
