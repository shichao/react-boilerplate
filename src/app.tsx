import * as React from 'react';
import * as yup from 'yup';
import { FormSchema } from './components/form/FormSchema';
import MyForm from './components/form/MyForm';

const entitySchema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().required().positive().integer(),
  email: yup.string().email(),
  website: yup.string().url(),
  createdOn: yup.date().default(function () {
    return new Date();
  }),
});

const formSchema: FormSchema = {
  entitySchema,
  sections: [
    {
      title: 'Section A',
      rows: [
        {
          fields: [{ title: 'Name', name: 'name' }],
        },
      ],
      isOpen: true,
    },
  ],
};

const App = () => {
  return <MyForm schema={formSchema} />;
};

export default App;
