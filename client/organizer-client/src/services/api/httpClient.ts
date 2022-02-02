import axios, { AxiosRequestConfig } from 'axios';
import { CONFIG } from '../../config/config';
import { SigninDataResponse } from './requests/apiAuthRequest';

const httpClient = axios.create({
    baseURL: CONFIG.HOST,
});

httpClient.interceptors.request.use((config) => {
    const user = localStorage.getItem('user');
    if (user) {
        const data: SigninDataResponse = JSON.parse(user);
        const token = data.token;
        setAuthHeader(token, config);
    }

    return config;
});

function setAuthHeader(token: string, config: AxiosRequestConfig) {
    if (config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
    } else {
        config.headers = {
            Authorization: `Bearer ${token}`
        };
    }
}

export default httpClient;