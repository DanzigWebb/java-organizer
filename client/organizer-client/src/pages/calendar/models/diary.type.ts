export interface DiaryItemsType {
    situation: string;
    think: string;
    emotions: string;
    reaction: string;
    bodySensation: string;
}

export interface DiaryType extends DiaryItemsType {
    day: Date;
}