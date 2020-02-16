import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { About, Home, QueryString } from './routes';

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="queryString/?userName=chao&start=2020-02-16T21:29:13.186Z">
              QueryString
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/queryString" children={<QueryString />} />
        <Route path="/about" children={<About />} />
        <Route path="*" children={<Home />} />
      </Switch>
    </Router>
  );
};

export default App;
