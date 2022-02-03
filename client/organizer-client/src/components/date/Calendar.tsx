import dayjs, { Dayjs } from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/ru';
import { Month } from './Month';
import { CalendarNav } from './CalendarNav';
import { useState } from 'react';
import { DayModel } from './models/day.model';

dayjs.extend(isoWeek);
dayjs.extend(localizedFormat);
dayjs.locale('ru');

type CalendarProps = {
    month?: Dayjs;
    onNextMonthSelect?: () => void;
    onPrevMonthSelect?: () => void;
    onSelectDay?: (day: DayModel) => void;
}

export const Calendar = (props: CalendarProps) => {

    const {
        month = dayjs(),
        onNextMonthSelect = () => {},
        onPrevMonthSelect = () => {},
        onSelectDay = () => {},
    } = props;

    const [currentMonth, setMonth] = useState(month);

    function nextMonth() {
        setMonth(currentMonth.add(1, 'month'));
        onNextMonthSelect();
    }

    function prevMonth() {
        setMonth(currentMonth.subtract(1, 'month'));
        onPrevMonthSelect();
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
            />
        </div>
    );
};