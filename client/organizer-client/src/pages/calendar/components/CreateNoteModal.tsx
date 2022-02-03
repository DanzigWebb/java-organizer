import { DiaryItemsType } from '../models/diary.type';
import { SubmitHandler, UnpackNestedValue, useForm } from 'react-hook-form';
import { FormField } from '../../../components/form/FormField';
import { FormError } from '../../../components/form/FormError';
import React, { useContext } from 'react';
import { ModalContext } from '../../../components/modal';
import { DayModel } from '../../../components/date/models/day.model';
import { createDiary, DiaryDto } from '../../../services/api/requests/apiDiary';

type Inputs = DiaryItemsType;

type CreateNoteModalType = {
    onCreateSubmit: (data: UnpackNestedValue<Inputs>) => void;
    day: DayModel;
}

export const CreateNoteModal = (props: CreateNoteModalType) => {

    const {onCreateSubmit, day} = props;

    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>();
    const context = useContext(ModalContext);

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const dto: DiaryDto = {day: day.date.toDate(), ...data};
        const response = await createDiary(dto);
        onCreateSubmit(response.data);
        context.onClose();
    };

    return (
        <div className="min-w-full w-96">
            <form className="modal-box w-full" onSubmit={handleSubmit(onSubmit)}>
                <h3 className="text-xl pb-4 font-medium flex flex-col items-center">
                    <span>Создать заметку</span>
                    <span className="text-xs">{day.date.format('DD MMMM')}</span>
                </h3>

                <FormField>
                    <label className="pb-1 font-sm">Ситуация</label>

                    <input
                        placeholder="Опишите ситуацию, с которой вы столкнулись"
                        className="input"
                        autoComplete="off"
                        {...register('situation', {required: true})}
                    />

                    <FormError isShow={!!errors.situation}>Обязательное поле</FormError>
                </FormField>

                <FormField>
                    <label className="pb-1 font-sm">Мысли</label>

                    <input
                        placeholder="Опишите ваши мысли"
                        className="input"
                        autoComplete="off"
                        {...register('think', {required: true})}
                    />

                    <FormError isShow={!!errors.think}>Обязательное поле</FormError>
                </FormField>

                <FormField>
                    <label className="pb-1 font-sm">Эмоции</label>

                    <input
                        placeholder="Опишите ваши эмоции"
                        className="input"
                        autoComplete="off"
                        {...register('emotions', {required: true})}
                    />

                    <FormError isShow={!!errors.emotions}>Обязательное поле</FormError>
                </FormField>

                <FormField>
                    <label className="pb-1 font-sm">Реакция</label>

                    <input
                        placeholder="Опишите свою реакцию"
                        className="input"
                        autoComplete="off"
                        {...register('reaction', {required: true})}
                    />

                    <FormError isShow={!!errors.reaction}>Обязательное поле</FormError>
                </FormField>

                <FormField>
                    <label className="pb-1 font-sm">Ощущение в теле</label>
                    <input
                        placeholder="Опишите ощущения, которые появились в теле"
                        className="input"
                        autoComplete="off"
                        {...register('bodySensation', {required: true})}
                    />

                    <FormError isShow={!!errors.bodySensation}>Обязательное поле</FormError>
                </FormField>

                <br/>

                <button className="btn" type="submit">Создать</button>
            </form>
        </div>
    );
};