enum FieldType {
  Unknown = 0,
  Text = 1,
  Textarea = 2,
  Number = 3,
}
interface FormFieldSchema {
  title: string;
  name: string;
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
