import * as React from 'react';
import { FormSchema } from './FormSchema';
import * as yup from 'yup';

const MyForm = (props: { schema: FormSchema }) => {
  return (
    <div>
      {props.schema?.formSections?.length > 0 &&
        props.schema.formSections.map((section, idx) => {
          return <div key={`section_${idx}`}>{section.title}</div>;
        })}
    </div>
  );
};

export default MyForm;
