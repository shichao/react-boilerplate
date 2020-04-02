import * as React from 'react';
import {
  HashRouter,
  Link,
  Switch,
  Route,
  useHistory,
  Redirect,
} from 'react-router-dom';
import About from './About';
import { Modal, Button } from 'react-bootstrap';

const Container = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const history = useHistory();

  const testClick = () => {
    history.push('#/about');
  };

  return (
    <>
      <HashRouter>
        <Link to="/about">Link to about</Link>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
        </Switch>

        <Button onClick={testClick}>Programmatically Go To About</Button>
      </HashRouter>
    </>
  );
};

export default Container;

const MyVerticallyCenteredModal = props => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
