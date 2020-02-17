import * as React from 'react';
import { useHistory } from 'react-router-dom';

const About = () => {
  const history = useHistory();
  const goto = () => {
    history.push('/queryString?userName=frontAbout');
  };
  return (
    <div>
      <h3>About</h3>
      <button onClick={goto}>Goto QueryString</button>
    </div>
  );
};

export default About;
