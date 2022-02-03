import { ApiUrlsEnum } from '../apiUrls';
import httpClient from '../httpClient';

interface UserInterface {
    email: string;
    id: string;
    name: string;
}

interface SigninData {
    login: string;
    password: string;
}

export interface SigninDataResponse {
    token: string;
    user: UserInterface;
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

export const signup = (registration: SignupData) => {
    return httpClient.post(ApiUrlsEnum.SIGNUP, registration);
};

export const getProfile = () => {
    return httpClient.get(ApiUrlsEnum.PROFILE);
};

