import * as React from 'react';
import * as yup from 'yup';
import {
  GeotechnicalInspection,
  GeotechnicalInspectionSchema,
  GeotechnicalInspectionFormSchema,
} from './GeotechnicalInspection';
import * as CambioForm from '@src/components/forms';

import { Formik, FormikProps } from 'formik';
import { Button, Form } from 'react-bootstrap';
import { FormSchema, FormSection } from '@src/components/forms';

const GeotechnicalInspectionForm = (props: {
  inspection: GeotechnicalInspection;
}) => {
  //state hooks
  const [inspection, setInspection] = React.useState(props.inspection ?? {});
  const [formMode, setFormMode] = React.useState(FormSchema.FormMode.View);
  //methods
  const submit = async (_inspection) => {
    await new Promise((r) => setTimeout(r, 500));
    alert(JSON.stringify(_inspection, null, 2));
  };

  return (
    <Formik
      validationSchema={GeotechnicalInspectionSchema}
      initialValues={inspection}
      onSubmit={submit}
    >
      {(formikProps: FormikProps<GeotechnicalInspection>) => (
        <Form noValidate onSubmit={formikProps.handleSubmit}>
          {GeotechnicalInspectionFormSchema?.sections?.length > 0 &&
            GeotechnicalInspectionFormSchema.sections.map(
              (sectionSchema, idx) => {
                return (
                  <FormSection
                    key={`section_${idx}`}
                    schema={sectionSchema}
                    formikProps={formikProps}
                    formMode={formMode}
                  />
                );
              }
            )}
          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
  );
};

export default GeotechnicalInspectionForm;
