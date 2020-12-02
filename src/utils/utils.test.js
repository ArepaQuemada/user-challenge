import { checkFilters, includesString, isPrime, isEmpty } from "./utils";
import { users } from "../mocks/mocks";
import expect from 'expect';

describe('isPrime()', () => {
  it('Should return true when passing a prime number', () => {
    expect(isPrime(2)).toBeTruthy();
  });
});

describe('isPrime()', () => {
  it('Should return false when passing a not prime number', () => {
    expect(isPrime(4)).toBeFalsy();
  });
});

describe('includesString()', () => {
  it('Shoudl return true when a string its contained in another string', () => {
    expect(includesString('Hola', 'hol')).toBeTruthy();
  });  
});

describe('includesString()', () => {
  it('Shoudl return false when a string its not contained in another string', () => {
    expect(includesString('Hola', 'Adios')).toBeFalsy();
  });  
});

describe('isEmpty()', () => {
  it('Should return true when a string its empty', () => {
    expect(isEmpty('')).toBeTruthy();
  });
});

describe('checkFilters()', () => {
  it('Should return users when filters are empty', () => {
    const filters = {
      name: '',
      email: '',
      cities: []
    }
    expect(checkFilters(filters, users)).toEqual(users);
  });
});

describe('checkFilters()', () => {
  it('Should return users whose name matches Juan', () => {
    const filters = {
      name: 'Juan',
      email: '',
      cities: []
    }
    const expected = [
      {
        name: 'Juan',
        email: 'juan@mail.com',
        address: {
          city: 'Buenos Aires'
        }
      }
    ]
    expect(checkFilters(filters, users)).toEqual(expected);
  });
});

describe('checkFilters()', () => {
  it('Should return users whose email matches yahoo', () => {
    const filters = {
      name: '',
      email: 'yahoo',
      cities: []
    }
    const expected = [
      {
        name: 'Pedro',
        email: 'pedro@yahoo.com',
        address: {
          city: 'Rosario'
        }
      },
      {
        name: 'Maria',
        email: 'maria@yahoo.com',
        address: {
          city: 'Cordoba'
        }
      }
    ]
    expect(checkFilters(filters, users)).toEqual(expected);
  });
});

describe('checkFilters()', () => {
  it('Should return users whose cities matches Buenos Aires', () => {
    const filters = {
      name: '',
      email: '',
      cities: ['Buenos Aires']
    }
    const expected = [
      {
        name: 'Juan',
        email: 'juan@mail.com',
        address: {
          city: 'Buenos Aires'
        }
      }
    ]
    expect(checkFilters(filters, users)).toEqual(expected);
  });
});

