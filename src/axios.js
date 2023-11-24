import axios from 'axios'
import {baseUrl} from './Constants/Constats'
const instance = axios.create({
    baseURL: baseUrl,
  });
  
export default instance