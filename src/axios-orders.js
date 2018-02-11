import axios from 'axios';
import { baseURL } from './config/firebase';

const instance = axios.create({ baseURL });

export default instance;