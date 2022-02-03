import { Calendar } from '../../components/date/Calendar';

export const CalendarPage = () => {
    return (
        <div className="page">
            <div className="container h-full">
                <div className="calendar-wrapper h-full flex flex-col">
                    <Calendar />
                </div>
            </div>
        </div>
    )
}