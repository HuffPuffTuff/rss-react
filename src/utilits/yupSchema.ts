import * as Yup from 'yup';

export const schema = Yup.object().shape({
  name: Yup.string().required('Required field!').min(5, 'Minimum 5 words!'),
  date: Yup.string()
    .required('Required field!')
    .test('Check date', 'Date cannot be in the past, min tomorrow', (value) => {
      if (new Date(value) < new Date()) {
        return false;
      }
      return true;
    }),
  currency: Yup.string().required('Required field!'),
  price: Yup.number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .nullable()
    .required('Required field!'),
  terms: Yup.boolean().oneOf([true], 'You must agree to the terms and conditions').required(),
  files: Yup.mixed<File[]>().test('Required', 'Required field!', (value) => {
    if (value && value.length > 0) {
      return true;
    }
    return false;
  }),
  delivery: Yup.string(),
});

export type schemaType = Yup.InferType<typeof schema>;
