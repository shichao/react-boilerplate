import * as React from 'react';
import { Collapse } from 'react-collapse';
import { FormSectionSchema } from './FormSchema';
import Card from 'react-bootstrap/Card';
import FormRow from './FormRow';

const FormSection = (props: { schema: FormSectionSchema; values: any }) => {
  const [isOpened, setIsOpened] = React.useState(
    props.schema.isOpen ? true : false
  );

  return (
    <>
      <Card.Header
        className="clearfix"
        onClick={() => {
          setIsOpened(!isOpened);
        }}
      >
        <span className="d-inline float-left">{props.schema.title}</span>
        <span
          className={
            'd-inline float-right text-secondary text-decoration-none ' +
            (isOpened ? 'esri-icon-up' : 'esri-icon-down')
          }
        ></span>
      </Card.Header>
      <Collapse isOpened={isOpened}>
        <Card.Body>
          {props.schema?.rows?.length > 0 &&
            props.schema.rows.map((rowSchema, idx) => {
              return (
                <FormRow
                  key={`row_${idx}`}
                  schema={rowSchema}
                  values={props.values}
                />
              );
            })}
        </Card.Body>
      </Collapse>
    </>
  );
};

export default FormSection;
