import dayjs, { Dayjs } from 'dayjs';
import { Calendar } from '../../components/date/Calendar';
import { DayModel } from '../../components/date/models/day.model';
import { Modal } from '../../components/modal';
import { CreateNoteModal } from './components/CreateNoteModal';
import { UnpackNestedValue } from 'react-hook-form';
import { DiaryItemsType } from './models/diary.type';
import { useLayoutEffect, useState } from 'react';
import { DiaryDto, getDiaryByRange } from '../../services/api/requests/apiDiary';

export const CalendarPage = () => {

    const [month, setMonth] = useState(dayjs());
    const [diaryMap, setDiaryMap] = useState(new Map());

    useLayoutEffect(() => {
        getDiaries(month);
    }, []);


    async function getDiaries(month: Dayjs) {
        const from = month.startOf('month').toDate();
        const to = month.endOf('month').toDate();
        const response = await getDiaryByRange(from, to);

        const map = parseDiaries(response.data);
        setDiaryMap(map);
    }

    function parseDiaries(diaries: DiaryDto[]): Map<number, DiaryDto[]> {
        const map = new Map<number, DiaryDto[]>();
        diaries.forEach((note) => {
            const date = +new Date(note.day);
            const mapDiaries = map.get(date);
            if (mapDiaries) {
                mapDiaries.push(note);
            } else {
                map.set(date, [note]);
            }
        });

        return map;
    }

    function updateMonth(m: Dayjs) {
        setMonth(m);
        getDiaries(m);
    }

    function onSelectDay(day: DayModel) {
        const modalComp = <CreateNoteModal day={day} onCreateSubmit={onCreateNote}/>;
        const classes = 'w-11/12 md:w-9/12 lg:7/12';

        new Modal(modalComp, classes, 'slider').show();
    }

    async function onCreateNote() {
        await getDiaries(month);
    }

    return (
        <div className="page">
            <div className="container h-full">
                <div className="calendar-wrapper h-full flex flex-col">
                    <Calendar
                        month={month}
                        notes={diaryMap}
                        onSelectDay={onSelectDay}
                        onPrevMonthSelect={updateMonth}
                        onNextMonthSelect={updateMonth}
                    />
                </div>
            </div>
        </div>
    );
};