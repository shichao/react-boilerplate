import * as React from 'react';
import { FormRowSchema } from './FormSchema';

const CambioFormRow = (props: { schema: FormRowSchema }) => {
  return (
    <>{props.schema.title && <div className="row">{props.schema.title}</div>}</>
  );
};

export default CambioFormRow;
