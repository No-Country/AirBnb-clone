import axios from "axios";
import env from './config.js';

const api = axios.create({
  baseURL: env.api_url,
  withCredentials:true,
});


export default api;