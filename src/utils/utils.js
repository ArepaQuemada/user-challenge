/**
 * Check if a number it's prime, used to display blue and red color on cards since they don't have a gender prop
 * @param {Number} n 
 * @param {Number} divCount 
 * @param {Number} i 
 */
export const isPrime = (n, divCount = 0, i = 0) => {
  if (n % i === 0) {
    divCount++;
  }
  return i > n ? divCount === 2 : isPrime(n, divCount, i + 1);
};

/**
 * Checks if a string contains another string
 * @param {String} str1 
 * @param {String} str2 
 */
export const includesString = (str1, str2) => str1.toLowerCase().includes(str2.toLowerCase());

/**
 * Checks if a string it's empty
 * @param {String} str 
 */
export const isEmpty = (str) => str === '';

/**
 * Checks if there is any filter and if so filters the user array to display
 * @param {Object} filters 
 * @param {Array} users 
 */
export const checkFilters = (filters, users) => {
  if (
    isEmpty(filters.name) &&
    isEmpty(filters.email) &&
    filters.cities.length === 0
  ) {
    return users;
  }

  return checkCities(filters, users)
    .filter((user) => includesString(user.name, filters.name))
    .filter((user) => includesString(user.email, filters.email));
};

/**
 * Checks if there is any city on filters cities array
 * @param {Object} filters 
 * @param {Array} users 
 */
const checkCities = (filters, users) => {
  return filters.cities.length > 0 ? users.filter(user => filters.cities.find(city => city === user.address.city)) : users
};
