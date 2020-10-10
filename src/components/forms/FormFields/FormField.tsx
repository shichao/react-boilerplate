import { FormikProps } from 'formik';
import * as React from 'react';
import { Col, Form } from 'react-bootstrap';
import { FieldType, FormFieldSchema, FormMode } from '../FormSchema';

const FormField = (props: {
  schema: FormFieldSchema;
  formikProps: FormikProps<any>;
  formMode?: FormMode;
}) => {
  //short cuts
  const fieldType = props.schema.type;
  const entityPropertyName = props.schema.entityPropertyName;
  const value = props.formikProps.values[entityPropertyName];
  const error = props.formikProps.errors[entityPropertyName];

  const isReadOnly = () => {
    let result = false;
    if (props.schema.readonly || props.formMode === FormMode.View) {
      result = true;
    }
    return result;
  };

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
            readOnly={isReadOnly()}
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
            readOnly={isReadOnly()}
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
