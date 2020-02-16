import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { About } from './routes';

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/1">About</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/about/:id" children={<About />} />
        <Route path="*" children={<About />} />
      </Switch>
    </Router>
  );
};

export default App;
