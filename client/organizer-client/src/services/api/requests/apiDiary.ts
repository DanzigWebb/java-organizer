import httpClient from '../httpClient';
import { ApiUrlsEnum } from '../apiUrls';

export interface DiaryDto {
    id?: string;
    day: Date;
    situation: string;
    think: string;
    emotions: string;
    reaction: string;
    bodySensation: string;
}

export const createDiary = (dto: DiaryDto) => {
    return httpClient.post<DiaryDto>(ApiUrlsEnum.DIARY, dto);
}

export const getDiaryByRange = (from: Date, to: Date) => {
    return httpClient.get<DiaryDto>(ApiUrlsEnum.DIARY, {params: {from: +from, to: +to}});
}