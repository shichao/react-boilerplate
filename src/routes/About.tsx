import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from 'react-router-dom';

const About = () => {
  let { id } = useParams();

  return (
    <div>
      <h3>About, {id}</h3>
    </div>
  );
};

export default About;
