import axios from 'axios';

export const unsplash = axios.create({
  //create an instance of an axios client
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID JAJNLiC6qI3v8XCOk1DuKZX3TrAP68Htxoc93Y6ACNY',
  },
});
