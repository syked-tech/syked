/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { FormSpy } from 'react-final-form';
import { updateFormState } from './finalFormDuck';

// eslint-disable-next-line no-shadow
const FormStateToRedux = ({ form, updateFormState }) => (
  <FormSpy onChange={(state) => updateFormState(form, state)} />
);

export default connect(undefined, { updateFormState })(FormStateToRedux);
