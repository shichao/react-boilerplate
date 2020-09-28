import * as React from 'react';
import { Collapse } from 'react-collapse';
import { FormSectionSchema } from './FormSchema';

const FormSection = (props: { schema: FormSectionSchema; children?: any }) => {
  const [isOpened, setIsOpened] = React.useState(
    props.schema.isOpen ? true : false
  );

  return <Collapse isOpened={isOpened}>{props.children}</Collapse>;
};

export default FormSection;
