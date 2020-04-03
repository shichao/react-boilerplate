import * as React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { FormGroup, FormLabel, FormControl } from 'react-bootstrap';

const FormExample = () => {
  const [isSubmitting, setSubmitting] = React.useState(false);

  return (
    <div>
      <h1>Anywhere in your app!</h1>
      <Formik
        initialValues={{
          author: '',
          comment: null,
          confidence: SiteGaugeAlertConfidence.Unknown,
          alertIds: [1, 2, 3],
        }}
        validate={values => {}}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel>Confidence</FormLabel>
              <FormControl
                name="confidence"
                as="select"
                defaultValue={SiteGaugeAlertConfidence.Unknown}
                onBlur={handleBlur}
                onChange={handleChange}
                isInvalid={!!errors.confidence}
              >
                <option value={-1}>False</option>
                <option value={0}>Unknown</option>
                <option value={1}>Low</option>
                <option value={2}>Medium</option>
                <option value={3}>High</option>
              </FormControl>
              <FormControl.Feedback type="invalid">
                {errors.confidence}
              </FormControl.Feedback>
            </FormGroup>
            <FormGroup>
              <FormLabel>Author</FormLabel>
              <FormControl
                name="author"
                type="text"
                value={values.author}
                onBlur={handleBlur}
                onChange={handleChange}
                isInvalid={!!errors.author}
              />
              <FormControl.Feedback type="invalid">
                {errors.author}
              </FormControl.Feedback>
            </FormGroup>
            <FormGroup>
              <FormLabel>Comment</FormLabel>
              <FormControl
                name="comment"
                type="text"
                value={values.comment}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </FormGroup>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default FormExample;

enum SiteGaugeAlertConfidence {
  //confirmed false alert
  False = -1,
  //default
  Unknown = 0,
  //likely false peak
  Low = 1,
  //uncertain
  Medium = 2,
  //likely true peak
  High = 3,
}

const SiteGaugeAlertValidationSchema = yup.object({
  author: yup.string().required(),
  comment: yup.string().nullable(),
  confidence: yup
    .mixed<
      | SiteGaugeAlertConfidence.False
      | SiteGaugeAlertConfidence.High
      | SiteGaugeAlertConfidence.Low
      | SiteGaugeAlertConfidence.Medium
    >()
    .oneOf([
      SiteGaugeAlertConfidence.False |
        SiteGaugeAlertConfidence.High |
        SiteGaugeAlertConfidence.Low |
        SiteGaugeAlertConfidence.Medium,
    ]),
  alertIds: yup.array<number>().required(),
});

type SiteGaugeAlertValidation = yup.InferType<
  typeof SiteGaugeAlertValidationSchema
>;
