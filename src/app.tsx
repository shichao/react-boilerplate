import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
import { About, Home, QueryString } from '@src/components';

const App = () => {
  return (
    <Router>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>Chao's React Palyground</Navbar.Brand>
        <Nav className="mr-auto">
          <LinkContainer to="">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/queryString?userName=chao">
            <Nav.Link>QueryString</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar>
      <Switch>
        <Route path="/queryString" children={<QueryString />} />
        <Route path="/about" children={<About />} />
        <Route path="*" children={<Home />} />
      </Switch>
    </Router>
  );
};

export default App;
