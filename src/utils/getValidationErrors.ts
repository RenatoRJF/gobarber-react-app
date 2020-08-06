import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(error: ValidationError): Errors {
  return error.inner.reduce((acc, cur) => {
    return { ...acc, [cur.path]: cur.message };
  }, {});
}
