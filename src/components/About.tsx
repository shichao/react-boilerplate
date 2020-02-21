import * as React from 'react';
import { withRouter } from 'react-router-dom';

import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

const About = (props: any) => {
  const goto = () => {
    props.history.push('/queryString?userName=chao');
  };
  return (
    <div>
      <h3>About</h3>
      <p>
        <button onClick={goto}>Goto QueryString</button>
      </p>
      <p>
        <IndexLinkContainer to="/queryString?userName=test">
          <button>Goto QueryString (Alternative)</button>
        </IndexLinkContainer>
      </p>
    </div>
  );
};

export default withRouter(About);
