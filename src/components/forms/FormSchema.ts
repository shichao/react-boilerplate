enum FieldType {
  Text = 'text',
  Textarea = 'textarea',
  Number = 'number',
  Email = 'email',
}
//flag mode
enum FormMode {
  Unknown = 0,
  New = 1,
  Edit = 1 << 1,
  View = 1 << 2,
}

interface FormFieldSchema {
  title: string;
  entityPropertyName: string;
  type?: FieldType;
  readonly?: boolean;
}

interface FormRowSchema {
  title?: string;
  fields: FormFieldSchema[];
  hideMode?: FormMode;
}

interface FormSectionSchema {
  title: string;
  rows: FormRowSchema[];
  isOpen?: boolean;
  hideMode?: FormMode;
}

interface FormSchema {
  sections: FormSectionSchema[];
}

export {
  FieldType,
  FormMode,
  FormFieldSchema,
  FormRowSchema,
  FormSectionSchema,
  FormSchema,
};
