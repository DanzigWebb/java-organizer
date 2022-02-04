import { Dayjs } from 'dayjs';
import { DiaryDto } from '../../../services/api/requests/apiDiary';

export class DayModel {

    constructor(
        public date: Dayjs,
        public fromCurrentMonth: boolean,
        public isToday: boolean,
        public notes: DiaryDto[] | undefined
    ) {
    }

    get isWeekend() {
        return this.date.isoWeekday() === 7 || this.date.isoWeekday() === 6;
    }
}