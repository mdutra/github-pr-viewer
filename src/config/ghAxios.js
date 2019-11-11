import axios from 'axios';

// Axios intance to access GitHub API v3
const ghAxios = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    // Set version
    Accept: 'application/vnd.github.v3+json',
  },
});

export default ghAxios;
