import * as React from 'react';
import { FormSchema } from './FormSchema';
import * as yup from 'yup';
import FormSection from './FormSection';

const MyForm = (props: { schema: FormSchema }) => {
  return (
    <div>
      {props.schema?.sections?.length > 0 &&
        props.schema.sections.map((sectionSchema, idx) => {
          return (
            <FormSection key={`section_${idx}`} schema={sectionSchema}>
              {sectionSchema.title}
            </FormSection>
          );
        })}
    </div>
  );
};

export default MyForm;
