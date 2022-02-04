import dayjs, { Dayjs } from 'dayjs';
import { DayModel } from './models/day.model';
import { Day } from './Day';
import { DiaryDto } from '../../services/api/requests/apiDiary';

type MonthProps = {
    month: Dayjs;
    onSelectDay: (day: DayModel) => void;
    notes?: Map<number, DiaryDto>;
}

export const Month = (props: MonthProps) => {

    const {
        month,
        onSelectDay,
        notes = new Map()
    } = props;

    const days = getMonthDays(month, notes);

    return (
        <div className="month w-full flex flex-col flex-1">
            <header className="month-head py-1 grid grid-cols-7">
                <div className="justify-self-center self-center font-semibold text-sm">пн</div>
                <div className="justify-self-center self-center font-semibold text-sm">вт</div>
                <div className="justify-self-center self-center font-semibold text-sm">ср</div>
                <div className="justify-self-center self-center font-semibold text-sm">чт</div>
                <div className="justify-self-center self-center font-semibold text-sm">пт</div>
                <div className="justify-self-center self-center font-semibold text-sm">сб</div>
                <div className="justify-self-center self-center font-semibold text-sm">вс</div>
            </header>

            <section className="month-days flex-1 grid grid-cols-7">
                {days.map((day, i) =>
                    <Day
                        key={i}
                        day={day}
                        onSelect={() => onSelectDay(day)}
                    />
                )}
            </section>
        </div>
    );
};

function getMonthDays(month: Dayjs, notesMap = new Map<number, DiaryDto[]>()) {
    const clone = month.clone();
    const monthDays = getDaysOfMonth(clone, notesMap);
    const daysBefore = getDaysBefore(monthDays[0].date, notesMap);
    const daysAfter = getDaysAfter(monthDays[monthDays.length - 1].date, notesMap);

    return [...daysBefore, ...monthDays, ...daysAfter];
}

function getDaysOfMonth(currentMonth: Dayjs, notesMap = new Map<number, DiaryDto[]>()) {
    const output: DayModel[] = [];
    const allDays = currentMonth.daysInMonth();

    let count = 1;
    while (count <= allDays) {
        const date = dayjs(new Date(currentMonth.year(), currentMonth.month(), count));
        const isToday = date.toISOString() === dayjs().startOf('day').toISOString();
        const notes = notesMap.get(+date.toDate())
        const day = new DayModel(date, true, isToday, notes);
        output.push(day);
        count++;
    }

    return output;
}

function getDaysBefore(firstDay: Dayjs, notesMap = new Map<number, DiaryDto[]>()) {
    const output: DayModel[] = [];
    const dayOfWeek = firstDay.isoWeekday();

    let count = 1;
    while (dayOfWeek !== count) {
        const date = firstDay.subtract(dayOfWeek - count, 'day');
        const notes = notesMap.get(+date.toDate())
        const day = new DayModel(date, false, false, notes);
        output.push(day);
        count++;
    }

    return output;
}

function getDaysAfter(lastDay: Dayjs, notesMap = new Map<number, DiaryDto[]>()) {
    const output: DayModel[] = [];
    let dayOfWeek = lastDay.isoWeekday();

    let dayIncrement = 1;
    let count = 7;
    while (dayOfWeek !== count) {
        const date = lastDay.add(dayIncrement++, 'day');
        const notes = notesMap.get(+date.toDate())
        const day = new DayModel(date, false, false, notes);
        output.push(day);
        dayOfWeek++;
    }

    return output;
}