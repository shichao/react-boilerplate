import { Formik } from 'formik';
import * as React from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { FormSchema } from './FormSchema';
import FormSection from './FormSection';

const CambioForm = (props: { schema: FormSchema; values: any }) => {
  return (
    <Formik
      initialValues={props.values}
      validationSchema={props.schema.entitySchema}
      onSubmit={console.log}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          {props.schema?.sections?.length > 0 &&
            props.schema.sections.map((sectionSchema, idx) => {
              return (
                <FormSection
                  key={`section_${idx}`}
                  schema={sectionSchema}
                  values={values}
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
