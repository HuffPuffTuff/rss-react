import { comicsListDataMock } from './../mocks/mockData';
import { filterComics, validate } from './helpers';
import { formDataMock } from './../mocks/mockData';

describe('Test helpers functions', () => {
  test('Test filterArr', () => {
    const searchKey = 'hello';

    const filteredArr = filterComics(comicsListDataMock, searchKey);

    expect(filteredArr[0]).toBe(comicsListDataMock[0]);
  });

  test('Test validate func with good data', () => {
    const errors = validate(formDataMock[0]);

    expect(Object.values(errors).every((val) => val === null)).toBe(true);
  });

  test('Test validate func with null data', () => {
    const failData = {
      name: '',
      date: '',
      currency: '',
      price: '',
      fee: 'standart',
      visible: true,
      image: '',
    };

    const errors = validate(failData);

    expect(errors.nameErr).toBe('Required field!');
    expect(errors.dateErr).toBe('Required field!');
    expect(errors.currencyErr).toBe('Required field!');
    expect(errors.priceErr).toBe('Required field!');
    expect(errors.imageErr).toBe('Required field!');
  });

  test('Test validate func with not full data', () => {
    const failData = {
      name: 'name',
      date: '2023-03-29',
      currency: '',
      price: '0',
      fee: 'standart',
      visible: true,
      image: '',
    };

    const errors = validate(failData);

    expect(errors.nameErr).toBe('Short name, min 5 words!');
    expect(errors.dateErr).toBe('Invalid date, minimum tomorrow!');
    expect(errors.priceErr).toBe('The price must be greater than 0!');
  });
});
