import axios from 'axios';
const BASE_URL = '/api/v1/';

const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});

export default instance;
