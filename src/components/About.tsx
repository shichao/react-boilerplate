import * as React from 'react';
import { IndexLinkContainer } from 'react-router-bootstrap';

const About = () => {
  return (
    <div>
      <h3>About</h3>
      <p>
        <IndexLinkContainer to="/queryString">
          <button>Goto QueryString (Alternative)</button>
        </IndexLinkContainer>
      </p>
    </div>
  );
};

export default About;
