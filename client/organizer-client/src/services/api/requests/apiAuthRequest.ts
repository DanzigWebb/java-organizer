import { ApiUrlsEnum } from '../apiUrls';
import httpClient from '../httpClient';

interface SigninData {
    login: string;
    password: string;
}

interface SigninDataResponse {
    token: string;
    user: {
        email: string;
        id: string;
        name: string;
    };
}

export const signin = async (login: SigninData) => {
    const {data} = await httpClient.post<SigninDataResponse>(ApiUrlsEnum.SIGNIN, login);
    localStorage.setItem('user', JSON.stringify(data));
    return data;
};

interface SignupData {
    name: string;
    email: string;
    password: string;
}

export const signup = async (registration: SignupData) => {
    return httpClient.post(ApiUrlsEnum.SIGNUP, registration);
};