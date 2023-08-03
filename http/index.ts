import axios from 'axios';

export const API_URl = 'http://localhost:3000/api';

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URl,
  headers: {},
});

export default $api;
