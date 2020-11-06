import axios from 'axios';
import { BASE_URL } from '../constants/JsonApiScreen';

export default axios.create({
  baseURL: BASE_URL
});