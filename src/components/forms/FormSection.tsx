import * as React from 'react';
import { Collapse } from 'react-collapse';
import { FormMode, FormSectionSchema } from './FormSchema';
import Card from 'react-bootstrap/Card';
import FormRow from './FormRow';
import { FormikProps } from 'formik';

const FormSection = (props: {
  schema: FormSectionSchema;
  formikProps: FormikProps<any>;
  formMode?: FormMode;
}) => {
  const [isOpened, setIsOpened] = React.useState(
    props.schema.isOpen ? true : false
  );

  const isHide = (): boolean => {
    let result = false;
    if (props.formMode && props.schema.hideMode) {
      result = (props.formMode & props.schema.hideMode) === props.formMode;
    }
    return result;
  };

  return (
    <>
      {!isHide() && (
        <>
          <Card.Header
            className="clearfix"
            onClick={() => {
              setIsOpened(!isOpened);
            }}
          >
            <span className="d-inline float-left">{props.schema.title}</span>
            <span
              className={
                'd-inline float-right text-secondary text-decoration-none ' +
                (isOpened ? 'esri-icon-up' : 'esri-icon-down')
              }
            ></span>
          </Card.Header>
          <Collapse isOpened={isOpened}>
            <Card.Body>
              {props.schema?.rows?.length > 0 &&
                props.schema.rows.map((rowSchema, idx) => {
                  return (
                    <FormRow
                      key={`row_${idx}`}
                      schema={rowSchema}
                      formikProps={props.formikProps}
                      formMode={props.formMode}
                    />
                  );
                })}
            </Card.Body>
          </Collapse>
        </>
      )}
    </>
  );
};

export default FormSection;
