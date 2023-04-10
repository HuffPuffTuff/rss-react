import * as Yup from 'yup';

export const schema = Yup.object().shape({
  username: Yup.string().required('Required field!').min(5, 'Minimum 5 words!'),
  name: Yup.string().required('Required field!').min(5, 'Minimum 5 words!'),
  date: Yup.string()
    .required('Required field!')
    .test('Check date', 'Date cannot be in the future', (value) => {
      if (new Date(value) > new Date()) {
        return false;
      }
      return true;
    }),
  location: Yup.string(),
  terms: Yup.boolean().oneOf([true], 'You must agree to the terms and conditions').required(),
  files: Yup.mixed<File[]>().test('Required', 'Required field!', (value) => {
    if (value && value.length > 0) {
      return true;
    }
    return false;
  }),
  privacy: Yup.string(),
  twitter: Yup.string(),
  instagram: Yup.string(),
  bio: Yup.string().max(60, 'Max length 60!'),
});

export type schemaType = Yup.InferType<typeof schema>;
