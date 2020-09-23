import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { IndexLinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
import {
  About,
  Container,
  Home,
  QueryString,
  FormExample,
} from '@src/components';
import ModalGalleryExample from './components/Gallery';

const App = () => {
  return <ModalGalleryExample />;
  // return (
  //   <BrowserRouter>
  //     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  //       <Navbar.Brand>Chao's React Palyground</Navbar.Brand>
  //       <Nav>
  //         <IndexLinkContainer to="/">
  //           <a className="nav-link">Home</a>
  //         </IndexLinkContainer>
  //         <IndexLinkContainer to="/queryString">
  //           <a className="nav-link">QueryString</a>
  //         </IndexLinkContainer>
  //         <IndexLinkContainer to="/about">
  //           <a className="nav-link">About</a>
  //         </IndexLinkContainer>
  //         <IndexLinkContainer to="/container">
  //           <a className="nav-link">Container</a>
  //         </IndexLinkContainer>
  //         <IndexLinkContainer to="/form">
  //           <a className="nav-link">Form</a>
  //         </IndexLinkContainer>
  //       </Nav>
  //     </Navbar>
  //     <Switch>
  //       <Route path="/queryString" component={QueryString} />
  //       <Route path="/about" component={About} />
  //       <Route path="/container" component={Container} />
  //       <Route path="/form" component={FormExample} />
  //       <Route path="/" component={Home} />
  //     </Switch>
  //   </BrowserRouter>
  // );
};

export default App;
