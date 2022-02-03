import { Dayjs } from 'dayjs';

type CalendarNavProps = {
    month: Dayjs;
    onPrev: () => void;
    onNext: () => void;
}

export const CalendarNav = (props: CalendarNavProps) => {
    const {month, onPrev, onNext} = props;

    return (
        <nav className="flex justify-center items-center py-2">
            <button className="btn btn-sm btn-ghost btn-circle" onClick={onPrev}>
                <i className="fas fa-angle-left text-lg"/>
            </button>
            <div className="text-lg font-semibold px-1 flex flex-col w-28 items-center">
                <span>{month.format('MMMM')}</span>
                <span className="text-xs font-normal">{month.format('YYYY')}</span>
            </div>
            <button className="btn btn-sm btn-ghost btn-circle" onClick={onNext}>
                <i className="fas fa-angle-right text-lg"/>
            </button>
        </nav>
    );
};