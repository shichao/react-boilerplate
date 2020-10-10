import * as React from 'react';
import * as yup from 'yup';
import GeotechnicalInspectionForm from './containers/GeotechnicalForm';

const App = () => {
  const inspection = {};
  return (
    <GeotechnicalInspectionForm
      inspection={inspection}
    ></GeotechnicalInspectionForm>
  );
};

export default App;
