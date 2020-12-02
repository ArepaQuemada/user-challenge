import axios from 'axios';
export const uris = {
  jsonPlaceholder: 'https://jsonplaceholder.typicode.com/users',
};

export const get = async (url) => {
  try {
  return await axios.get(url);
  } catch (error) {
    console.log(error);
  }
};
