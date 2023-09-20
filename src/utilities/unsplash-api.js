import axios from 'axios';

const UNSPLASH_API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;
const UNSPLASH_API_URL = 'https://api.unsplash.com';

const unsplash = axios.create({
  baseURL: UNSPLASH_API_URL,
  headers: {
    Authorization: `Client-ID ${UNSPLASH_API_KEY}`,
  },
});

export function searchPhotos(query) {
  return unsplash.get(`/search/photos?query=${query}`);
}