import { Field, FormikProps } from 'formik';
import * as React from 'react';
import { Col, Form } from 'react-bootstrap';
import { FieldType, FormFieldSchema } from './FormSchema';

const FormField = (props: {
  schema: FormFieldSchema;
  formikProps: FormikProps<any>;
}) => {
  //short cuts
  const fieldType = props.schema.type;
  const entityPropertyName = props.schema.entityPropertyName;
  const value = props.formikProps.values[entityPropertyName];
  const error = props.formikProps.errors[entityPropertyName];

  const renderField = () => {
    switch (fieldType) {
      case FieldType.Textarea:
        return (
          <Form.Control
            as="textarea"
            name={entityPropertyName}
            value={value}
            onChange={props.formikProps.handleChange}
            isInvalid={!!error}
          />
        );
      case FieldType.Text:
      case FieldType.Number:
      default:
        return (
          <Form.Control
            type={fieldType}
            name={entityPropertyName}
            value={value ?? ''}
            onChange={props.formikProps.handleChange}
            isInvalid={!!error}
          />
        );
    }
  };

  return (
    <Form.Group as={Col}>
      <Form.Label>{props.schema.title}</Form.Label>
      {renderField()}
      <Form.Control.Feedback type="invalid">
        {props.formikProps.errors[entityPropertyName]}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default FormField;
