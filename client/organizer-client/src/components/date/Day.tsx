import { DayModel } from './models/day.model';
import './Day.css';

type DayProps = {
    day: DayModel;
    onSelect: () => void;
}

function getKeys<T>(obj: T): Array<keyof T> {
    return Object.keys(obj) as Array<keyof T>;
}

export const Day = (props: DayProps) => {

    const {day, onSelect} = props;

    const label = day.date.format('D');

    const classes = {
        'disabled': !day.fromCurrentMonth,
        'bg-error': day.isWeekend,
        'bg-base-200': !day.isWeekend,
        'bg-primary': day.isToday
    };

    const classNames = getKeys(classes)
        .filter(key => classes[key])
        .join(' ');

    return (
        <div className="day-wrapper" onClick={onSelect}>
            <div className={`day ${classNames}`}>
                {label}
            </div>
        </div>
    );
};