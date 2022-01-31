import axios  from 'axios';
import { CONFIG } from '../../config/config';

const httpClient = axios.create({
    baseURL: CONFIG.HOST,
});

httpClient.interceptors.request.use((config) => {
    return config;
});

export default httpClient;