import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { About, Home, QueryString } from './routes';
import { Navbar, Nav } from 'react-bootstrap';

const App = () => {
  return (
    <Router>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand>
          <Link to="/">Chao's React Palyground</Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
      </Navbar>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/#userName=chao&start=2020-02-16T21:29:13.186Z&end=2020-02-15T21:29:13.186Z">
              QueryString
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/#queryString" children={<QueryString />} />
        <Route path="/about" children={<About />} />
        <Route path="*" children={<Home />} />
      </Switch>
    </Router>
  );
};

export default App;
