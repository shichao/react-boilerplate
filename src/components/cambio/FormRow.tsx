import { FormikProps } from 'formik';
import * as React from 'react';
import { Form } from 'react-bootstrap';
import FormField from './FormField';
import { FormRowSchema } from './FormSchema';

const FormRow = (props: {
  schema: FormRowSchema;
  formikProps: FormikProps<any>;
}) => {
  return (
    <>
      {props.schema.title && (
        <Form.Row className="border-bottom text-secondary">
          {props.schema.title}
        </Form.Row>
      )}
      <Form.Row>
        {props.schema?.fields?.length > 0 &&
          props.schema.fields.map((fieldSchema, idx) => {
            return (
              <FormField
                key={`field_${idx}`}
                schema={fieldSchema}
                formikProps={props.formikProps}
              />
            );
          })}
      </Form.Row>
    </>
  );
};

export default FormRow;
