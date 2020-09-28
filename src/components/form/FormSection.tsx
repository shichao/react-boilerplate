import * as React from 'react';
import { Collapse } from 'react-collapse';
import { FormSectionSchema } from './FormSchema';

//Styles
import styles from './FormSection.module.scss';

const FormSection = (props: { schema: FormSectionSchema; children?: any }) => {
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
      <Collapse isOpened={isOpened}>{props.children}</Collapse>
    </div>
  );
};

export default FormSection;
