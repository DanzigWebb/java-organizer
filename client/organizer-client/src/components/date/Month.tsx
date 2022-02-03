import dayjs, { Dayjs } from 'dayjs';
import { DayModel } from './models/day.model';
import { Day } from './Day';

type MonthProps = {
    month: Dayjs;
    onSelectDay: (day: DayModel) => void;
}

export const Month = (props: MonthProps) => {

    const {month, onSelectDay} = props;

    const days = getMonthDays(month);

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

function getMonthDays(month: Dayjs) {
    const clone = month.clone();
    const monthDays = getDaysOfMonth(clone);
    const daysBefore = getDaysBefore(monthDays[0].date);
    const daysAfter = getDaysAfter(monthDays[monthDays.length - 1].date);

    return [...daysBefore, ...monthDays, ...daysAfter];
}

function getDaysOfMonth(currentMonth: Dayjs) {
    const output: DayModel[] = [];
    const allDays = currentMonth.daysInMonth();

    let count = 1;
    while (count <= allDays) {
        const date = dayjs(new Date(currentMonth.year(), currentMonth.month(), count));
        const isToday = date.toISOString() === dayjs().startOf('day').toISOString();
        const day = new DayModel(date, true, isToday);
        output.push(day);
        count++;
    }

    return output;
}

function getDaysBefore(firstDay: Dayjs) {
    const output: DayModel[] = [];
    const dayOfWeek = firstDay.isoWeekday();

    let count = 1;
    while (dayOfWeek !== count) {
        const date = firstDay.subtract(dayOfWeek - count, 'day');
        const day = new DayModel(date, false, false);
        output.push(day);
        count++;
    }

    return output;
}

function getDaysAfter(lastDay: Dayjs) {
    const output: DayModel[] = [];
    let dayOfWeek = lastDay.isoWeekday();

    let dayIncrement = 1;
    let count = 7;
    while (dayOfWeek !== count) {
        const date = lastDay.add(dayIncrement++, 'day');
        const day = new DayModel(date, false, false);
        output.push(day);
        dayOfWeek++;
    }

    return output;
}