import * as React from 'react';
import { Collapse } from 'react-collapse';
import { FormSectionSchema } from './FormSchema';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import Card from 'react-bootstrap/Card';

const FormSection = (props: { schema: FormSectionSchema }) => {
  const [isOpened, setIsOpened] = React.useState(
    props.schema.isOpen ? true : false
  );
  const eventKey = Date.now().toString();

  return (
    <>
      <Card.Header
        onClick={() => {
          setIsOpened(!isOpened);
        }}
      >
        <span
          href="#"
          className={isOpened ? 'esri-icon-up' : 'esri-icon-down'}
        ></span>
      </Card.Header>
      <Card.Body>
        <Collapse isOpened={isOpened}>test</Collapse>
      </Card.Body>
    </>
  );
};

export default FormSection;
