import axios from 'axios';

const api_url = process.env.REACT_API_URL || 'http://192.168.0.10:3001/api';
// baseURL: `${api_url}`,
const api = axios.create({
  baseURL: `${api_url}`,
});

export default api;
