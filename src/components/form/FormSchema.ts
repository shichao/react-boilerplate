interface FormField {
  title: string;
  name: string;
}

interface FormRow {
  fields: FormField[];
}

interface FormSection {
  title: string;
  rows: FormRow[];
}

interface FormSchema {
  entitySchema: object;
  formSections: FormSection[];
}

export { FormField, FormRow, FormSchema };
