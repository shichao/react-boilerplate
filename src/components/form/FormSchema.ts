interface FormFieldSchema {
  title: string;
  name: string;
}

interface FormRowSchema {
  title?: string;
  fields: FormFieldSchema[];
}

interface FormSectionSchema {
  title: string;
  rows: FormRowSchema[];
  isOpen?: boolean;
}

interface FormSchema {
  entitySchema: object;
  sections: FormSectionSchema[];
}

export { FormFieldSchema, FormRowSchema, FormSectionSchema, FormSchema };
