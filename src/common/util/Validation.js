/* eslint-disable prettier/prettier */
/* eslint-disable no-restricted-globals */
export const required = (value) => (value ? undefined : 'required');
export const mustBeEmail = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'invalid'
    : undefined;
export const mustBeNumber = (value) => (isNaN(value) ? 'Must be a number' : undefined);
export const minValue = (min) => (value) =>
  isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`;
export const composeValidators =
  (...validators) =>
    (value) =>
      validators.reduce((error, validator) => error || validator(value), undefined);
