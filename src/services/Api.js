import axios from 'axios';

export default () => {
  return axios.create({
    baseURL: 'http://localhost:3000/api/',
    timeout: 1000,
    headers: {"Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
              "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"}
  });
};