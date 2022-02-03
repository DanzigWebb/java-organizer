import dayjs from 'dayjs';
import { Calendar } from '../../components/date/Calendar';
import { DayModel } from '../../components/date/models/day.model';
import { Modal } from '../../components/modal';
import { CreateNoteModal } from './components/CreateNoteModal';
import { UnpackNestedValue } from 'react-hook-form';
import { DiaryItemsType } from './models/diary.type';

export const CalendarPage = () => {

    const defaultMonth = dayjs();

    function onSelectDay(day: DayModel) {
        new Modal(<CreateNoteModal day={day} onCreateSubmit={onCreateNote}/>).show();
    }

    function onCreateNote(data: UnpackNestedValue<DiaryItemsType>) {
        console.log('create note', data);
    }

    return (
        <div className="page">
            <div className="container h-full">
                <div className="calendar-wrapper h-full flex flex-col">
                    <Calendar
                        month={defaultMonth}
                        onSelectDay={onSelectDay}
                    />
                </div>
            </div>
        </div>
    );
};