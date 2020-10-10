import {
  FieldType,
  FormMode,
  FormSchema,
} from '@src/components/forms/FormSchema';
import * as yup from 'yup';

//schema
const GeotechnicalInspectionSchema = yup.object().shape({
  //   name: yup.string().required(),
  //   age: yup
  //     .number()
  //     .required()
  //     .positive('age must be a positive number')
  //     .integer('age must be a positive number'),
  //   email: yup.string().email(),
  //   website: yup.string().url(),
  //   createdOn: yup.date().default(function () {
  //     return new Date();
  //   }),
  //   description: yup.string(),
});

//entity type
type GeotechnicalInspection = yup.InferType<
  typeof GeotechnicalInspectionSchema
>;

//form schema/ui structure
const GeotechnicalInspectionFormSchema: FormSchema = {
  sections: [
    {
      title: 'User Summary',
      rows: [
        {
          title: 'Basic Infomation',
          fields: [
            { title: 'Name', entityPropertyName: 'name' },
            {
              title: 'Age',
              entityPropertyName: 'age',
              type: FieldType.Number,
            },
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
      hideMode: FormMode.View,
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

export {
  GeotechnicalInspection,
  GeotechnicalInspectionSchema,
  GeotechnicalInspectionFormSchema,
};
