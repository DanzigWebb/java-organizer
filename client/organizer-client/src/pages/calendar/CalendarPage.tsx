import dayjs, { Dayjs } from 'dayjs';
import { Calendar } from '../../components/date/Calendar';
import { DayModel } from '../../components/date/models/day.model';
import { Modal } from '../../components/modal';
import { CreateNoteModal } from './components/CreateNoteModal';
import { UnpackNestedValue } from 'react-hook-form';
import { DiaryItemsType } from './models/diary.type';
import { useLayoutEffect, useState } from 'react';
import { getDiaryByRange } from '../../services/api/requests/apiDiary';

export const CalendarPage = () => {

    const [month, setMonth] = useState(dayjs());

    useLayoutEffect(() => {
        getDiaries(month);
    }, [])



    async function getDiaries(month: Dayjs) {
        const from = month.startOf('month').toDate();
        const to = month.endOf('month').toDate();
        const response = await getDiaryByRange(from, to);
        console.log(response.data);
    }

    function updateMonth(m: Dayjs) {
        setMonth(m);
        getDiaries(m);
    }

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
                        month={month}
                        onSelectDay={onSelectDay}
                        onPrevMonthSelect={updateMonth}
                        onNextMonthSelect={updateMonth}
                    />
                </div>
            </div>
        </div>
    );
};