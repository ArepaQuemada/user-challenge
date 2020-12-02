export const isPrime = (n, divCount = 0, i = 0) => {
  if (n % i === 0) {
    divCount++;
  }
  return i > n ? divCount === 2 : isPrime(n, divCount, i + 1);
};

export const includesString = (str1, str2) =>
  str1.toLowerCase().includes(str2.toLowerCase());

export const isEmpty = (str) => str === '';

export const checkFilters = (filters, users) => {
  if (
    isEmpty(filters.name) &&
    isEmpty(filters.email) &&
    filters.cities.length === 0
  ) {
    return users;
  }

  return checkCities(filters, users)
    .filter((u) => includesString(u.name, filters.name))
    .filter((u) => includesString(u.email, filters.email));
};

const checkCities = (filters, users) => filters.cities.length > 0 ? users.filter(u => filters.cities.find(c => c === u.address.city)) : users;
