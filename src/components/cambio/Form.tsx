import { Formik, FormikProps } from 'formik';
import * as React from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { FormSchema } from './FormSchema';
import FormSection from './FormSection';

const CambioForm = (props: { schema: FormSchema; values: any }) => {
  return (
    <Formik
      initialValues={props.values}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {(formikProps: FormikProps<any>) => (
        <Form noValidate onSubmit={formikProps.handleSubmit}>
          {props.schema?.sections?.length > 0 &&
            props.schema.sections.map((sectionSchema, idx) => {
              return (
                <FormSection
                  key={`section_${idx}`}
                  schema={sectionSchema}
                  formikProps={formikProps}
                />
              );
            })}
          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
  );
};

export default CambioForm;
