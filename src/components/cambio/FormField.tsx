import { Field, FormikProps } from 'formik';
import * as React from 'react';
import { Col, Form, FormText } from 'react-bootstrap';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import { FieldType, FormFieldSchema } from './FormSchema';

const FormField = (props: {
  schema: FormFieldSchema;
  formikProps: FormikProps<any>;
}) => {
  const renderField = () => {
    switch (props.schema.type) {
      case FieldType.Number:
        return (
          <Form.Control
            type="number"
            name={props.schema.name}
            value={props.formikProps.values[props.schema.name] ?? 0}
            onChange={props.formikProps.handleChange}
          />
        );
      case FieldType.Textarea:
        return (
          <Form.Control
            as="textarea"
            name={props.schema.name}
            value={props.formikProps.values[props.schema.name]}
            onChange={props.formikProps.handleChange}
          />
        );
      case FieldType.Unknown:
      case FieldType.Text:
      default:
        return (
          <Form.Control
            type="text"
            name={props.schema.name}
            value={props.formikProps.values[props.schema.name]}
            onChange={props.formikProps.handleChange}
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
