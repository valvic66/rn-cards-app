import axios from 'axios';
import { BASE_URL } from '../constants/JsonServerApi';

export default axios.create({
  baseURL: BASE_URL
});