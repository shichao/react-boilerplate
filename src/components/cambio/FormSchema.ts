enum FieldType {
  Text = 'text',
  Textarea = 'textarea',
  Number = 'number',
  Email = 'email',
}
interface FormFieldSchema {
  title: string;
  entityPropertyName: string;
  type?: FieldType;
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

export {
  FieldType,
  FormFieldSchema,
  FormRowSchema,
  FormSectionSchema,
  FormSchema,
};
