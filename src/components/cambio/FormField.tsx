import { Field } from 'formik';
import * as React from 'react';
import { Col, Form, FormText } from 'react-bootstrap';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import { FieldType, FormFieldSchema } from './FormSchema';

const FormField = (props: { schema: FormFieldSchema; values: any }) => {
  const renderField = () => {
    switch (props.schema.type) {
      case FieldType.Number:
        return (
          <Form.Control
            type="number"
            name={props.schema.name}
            value={props.values[props.schema.name]}
          />
        );
      case FieldType.Textarea:
        return (
          <Form.Control
            as="textarea"
            name={props.schema.name}
            value={props.values[props.schema.name]}
          />
        );
      case FieldType.Unknown:
      case FieldType.Text:
      default:
        return (
          <Form.Control
            type="text"
            name={props.schema.name}
            value={props.values[props.schema.name]}
          />
        );
    }
  };

  return (
    <Form.Group as={Col}>
      <Form.Label>{props.schema.title}</Form.Label>
      {renderField()}
    </Form.Group>
  );
};

export default FormField;
