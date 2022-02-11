import { DiaryItemsType } from '../models/diary.type';
import { SubmitHandler, UnpackNestedValue } from 'react-hook-form';
import React, { useContext } from 'react';
import { ModalContext } from '../../../components/modal';
import { DayModel } from '../../../components/date/models/day.model';
import { createDiary, DiaryDto } from '../../../services/api/requests/apiDiary';
import { CreateNoteForm } from './CreateNoteForm';
import { Tab, TabGroup } from '../../../components/tabs';

type Inputs = DiaryItemsType;

type CreateNoteModalType = {
    onCreateSubmit: (data: UnpackNestedValue<Inputs>) => void;
    day: DayModel;
}

export const CreateNoteModal = (props: CreateNoteModalType) => {

    const {onCreateSubmit, day} = props;

    const context = useContext(ModalContext);

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const dto: DiaryDto = {day: day.date.toDate(), ...data};
        const response = await createDiary(dto);
        onCreateSubmit(response.data);
        context.onClose();
    };

    return (
        <div className="w-full">

            <div className="modal-box bg-base-200 max-w-full">
                <h3 className="text-xl pb-4 font-medium flex flex-col items-center">
                    <span>Создать заметку</span>
                    <span className="text-xs">{day.date.format('DD MMMM')}</span>
                </h3>

                <TabGroup>
                    <Tab label="Новая заметка" index={0}>
                        <CreateNoteForm
                            onSubmit={onSubmit}
                        />
                    </Tab>
                    {(day.notes || []).map((note, i) => (
                        <Tab key={i + 1} index={i + 1} label={sliceText(note.situation)}>
                            <CreateNoteForm
                                key={i + 1}
                                onSubmit={onSubmit}
                                input={note}
                            />
                        </Tab>
                    ))}
                </TabGroup>
            </div>
        </div>
    );
};

function sliceText(text = '', length = 12) {
    return text.length > length
        ? text.slice(0, length - 3).trim() + '...'
        : text;
}