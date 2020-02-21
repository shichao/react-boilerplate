import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { About, Home, QueryString } from '@src/components';

const App = () => {
  return (
    <Router>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>Chao's React Palyground</Navbar.Brand>
        <Nav>
          <IndexLinkContainer to="/" activeClassName="active">
            <Nav.Link>Home</Nav.Link>
          </IndexLinkContainer>
          <IndexLinkContainer
            to="/queryString?userName=chao"
            activeClassName="active"
          >
            <Nav.Link>QueryString</Nav.Link>
          </IndexLinkContainer>
          <IndexLinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </IndexLinkContainer>
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
