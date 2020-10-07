import * as React from 'react';
import * as yup from 'yup';
import { FieldType, FormSchema } from './components/cambio/FormSchema';
import Form from './components/cambio/Form';

const personSchema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().required().positive().integer(),
  email: yup.string().email(),
  website: yup.string().url(),
  createdOn: yup.date().default(function () {
    return new Date();
  }),
  description: yup.string(),
});

type Person = yup.InferType<typeof personSchema>;

const formSchema: FormSchema = {
  entitySchema: personSchema,
  sections: [
    {
      title: 'Section A',
      rows: [
        {
          fields: [{ title: 'Name', name: 'name' }],
        },
        {
          title: 'row with title',
          fields: [
            { title: 'Name', name: 'name' },
            { title: 'Age', name: 'age', type: FieldType.Number },
            {
              title: 'Description',
              name: 'description',
              type: FieldType.Textarea,
            },
          ],
        },
      ],
      isOpen: true,
    },
    {
      title: 'Section A',
      rows: [
        {
          fields: [{ title: 'Name', name: 'name' }],
        },
        {
          title: 'row with title',
          fields: [],
        },
      ],
      isOpen: false,
    },
  ],
};

const values: Person = {
  name: 'Chao',
};

const App = () => {
  return <Form schema={formSchema} values={values} />;
};

export default App;
