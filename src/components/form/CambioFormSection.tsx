import * as React from 'react';
import { Collapse } from 'react-collapse';
import FormRow from './CambioFormRow';
import { FormSectionSchema } from './FormSchema';

//Styles
import styles from './CambioFormSection.module.scss';

const CambioFormSection = (props: { schema: FormSectionSchema }) => {
  const [isOpened, setIsOpened] = React.useState(
    props.schema.isOpen ? true : false
  );

  return (
    <div className={styles.collapsibleSection}>
      <div className={styles.header} onClick={() => setIsOpened(!isOpened)}>
        {props.schema.title}
        <span
          className={`${styles.headerIcon} ${
            isOpened ? 'esri-icon-up' : 'esri-icon-down'
          }`}
        ></span>
      </div>
      <Collapse isOpened={isOpened}>
        {props.schema?.rows?.length > 0 &&
          props.schema.rows.map((rowSchema, idx) => {
            return <FormRow key={`row_${idx}`} schema={rowSchema} />;
          })}
      </Collapse>
    </div>
  );
};

export default CambioFormSection;
