import * as React from 'react';
import { FormSchema } from './FormSchema';
import FormSection from './FormSection';

const CambioForm = (props: { schema: FormSchema }) => {
  return (
    <div>
      {props.schema?.sections?.length > 0 &&
        props.schema.sections.map((sectionSchema, idx) => {
          return <FormSection key={`section_${idx}`} schema={sectionSchema} />;
        })}
    </div>
  );
};

export default CambioForm;
