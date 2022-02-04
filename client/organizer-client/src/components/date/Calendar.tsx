import dayjs, { Dayjs } from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/ru';
import { Month } from './Month';
import { CalendarNav } from './CalendarNav';
import { useState } from 'react';
import { DayModel } from './models/day.model';
import { DiaryDto } from '../../services/api/requests/apiDiary';

dayjs.extend(isoWeek);
dayjs.extend(localizedFormat);
dayjs.locale('ru');

type CalendarProps = {
    month?: Dayjs;
    onNextMonthSelect?: (month: Dayjs) => void;
    onPrevMonthSelect?: (month: Dayjs) => void;
    onSelectDay?: (day: DayModel) => void;
    notes?: Map<number, DiaryDto[]>;
}

export const Calendar = (props: CalendarProps) => {

    const {
        month = dayjs(),
        onNextMonthSelect = () => {},
        onPrevMonthSelect = () => {},
        onSelectDay = () => {},
        notes = new Map()
    } = props;

    const [currentMonth, setMonth] = useState(month);

    function nextMonth() {
        const prevMonth = currentMonth.add(1, 'month');
        setMonth(prevMonth);
        onNextMonthSelect(prevMonth);
    }

    function prevMonth() {
        const nextMonth = currentMonth.subtract(1, 'month');
        setMonth(nextMonth);
        onPrevMonthSelect(nextMonth);
    }

    function daySelect(day: DayModel) {
        onSelectDay(day);
    }

    return (
        <div className="calendar flex flex-col h-full">
            <CalendarNav
                month={currentMonth}
                onNext={nextMonth}
                onPrev={prevMonth}
            />

            <Month
                month={currentMonth}
                onSelectDay={daySelect}
                notes={notes}
            />
        </div>
    );
};