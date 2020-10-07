import * as React from 'react';
import * as yup from 'yup';
import { FieldType, FormSchema } from './components/cambio/FormSchema';
import Form from './components/cambio/Form';

const personSchema = yup.object().shape({
  name: yup.string().required(),
  age: yup
    .number()
    .required()
    .positive('age must be a positive number')
    .integer('age must be a positive number'),
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
      title: 'User Summary',
      rows: [
        {
          title: 'Basic Infomation',
          fields: [
            { title: 'Name', entityPropertyName: 'name' },
            { title: 'Age', entityPropertyName: 'age', type: FieldType.Number },
          ],
        },
        {
          fields: [
            {
              title: 'Email',
              entityPropertyName: 'email',
              type: FieldType.Email,
            },
          ],
        },
        {
          fields: [
            {
              title: 'Website',
              entityPropertyName: 'website',
              type: FieldType.Text,
            },
          ],
        },
      ],
      isOpen: true,
    },
    {
      title: 'Other',
      rows: [
        {
          fields: [
            {
              title: 'Description',
              entityPropertyName: 'description',
              type: FieldType.Textarea,
            },
          ],
        },
      ],
      isOpen: false,
    },
  ],
};

const values: Person = {};

const App = () => {
  return <Form schema={formSchema} values={values} />;
};

export default App;
