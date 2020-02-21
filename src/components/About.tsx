import * as React from 'react';
import { withRouter } from 'react-router-dom';

const About = (props: any) => {
  const goto = () => {
    props.history.push('/queryString');
  };
  return (
    <div>
      <h3>About</h3>
      <button onClick={goto}>Goto QueryString</button>
    </div>
  );
};

export default withRouter(About);
