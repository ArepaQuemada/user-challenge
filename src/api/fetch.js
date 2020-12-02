import axios from 'axios';
export const uris = {
  jsonPlaceholder: 'https://jsonplaceholder.typicode.com/users',
};

/**
 * Function to make api calls using get method and axios Api
 * @param {String} url 
 */
export const get = async (url) => {
  try {
  return await axios.get(url);
  } catch (error) {
    console.log(error);
  }
};
