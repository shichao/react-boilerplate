import { FormikProps } from 'formik';
import * as React from 'react';
import { Form } from 'react-bootstrap';
import { isSchema } from 'yup';
import FormField from './FormFields/FormField';
import { FormMode, FormRowSchema } from './FormSchema';

const FormRow = (props: {
  schema: FormRowSchema;
  formikProps: FormikProps<any>;
  formMode?: FormMode;
}) => {
  const isHide = (): boolean => {
    let result = false;
    if (props.formMode && props.schema.hideMode) {
      result = (props.formMode & props.schema.hideMode) === props.formMode;
    }
    return result;
  };

  return (
    <>
      {!isHide() && (
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
                    formMode={props.formMode}
                  />
                );
              })}
          </Form.Row>
        </>
      )}
    </>
  );
};

export default FormRow;
