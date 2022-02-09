import { FormField } from '../../../components/form/FormField';
import { FormError } from '../../../components/form/FormError';
import React, { SyntheticEvent } from 'react';
import { SubmitHandler, UnpackNestedValue, useForm } from 'react-hook-form';
import { DiaryItemsType } from '../models/diary.type';

type Inputs = DiaryItemsType;

type CreateNoteFormProps = {
    onSubmit: (data: UnpackNestedValue<Inputs>) => void;
    input?: Inputs;
    isEdit?: boolean;
}

const textareaStyle:  React.CSSProperties = {
    resize: 'none',
    boxSizing: 'border-box',
    overflow: 'hidden',
};

export const CreateNoteForm = (props: CreateNoteFormProps) => {

    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>();

    const {
        onSubmit,
        input = {
            situation: '',
            think: '',
            emotions: '',
            reaction: '',
            bodySensation: '',
        },
        isEdit = false,
    } = props;

    const onSubmitForm: SubmitHandler<Inputs> = (data) => {
        onSubmit(data);
    };

    function autoSizeTextarea(e: SyntheticEvent) {
        const target = e.target as HTMLTextAreaElement;
        target.style.height = '30px';
        target.style.height = `${target.scrollHeight}px`;
    }

    return (
        <form className="w-full" onSubmit={handleSubmit(onSubmitForm)}>

            <FormField>
                <label className="pb-1 font-sm">Ситуация</label>

                <textarea
                    style={textareaStyle}
                    rows={1}
                    placeholder="Опишите ситуацию, с которой вы столкнулись"
                    className="input"
                    autoComplete="off"
                    defaultValue={input.situation}
                    {...register('situation', {required: true})}
                    onInput={autoSizeTextarea}
                    onFocus={autoSizeTextarea}
                />

                <FormError isShow={!!errors.situation}>Обязательное поле</FormError>
            </FormField>

            <FormField>
                <label className="pb-1 font-sm">Мысли</label>

                <textarea
                    style={textareaStyle}
                    rows={1}
                    placeholder="Опишите ваши мысли"
                    className="input"
                    autoComplete="off"
                    defaultValue={input.think}
                    {...register('think', {required: true})}
                    onInput={autoSizeTextarea}
                    onFocus={autoSizeTextarea}
                />

                <FormError isShow={!!errors.think}>Обязательное поле</FormError>
            </FormField>

            <FormField>
                <label className="pb-1 font-sm">Эмоции</label>

                <textarea
                    style={textareaStyle}
                    rows={1}
                    placeholder="Опишите ваши эмоции"
                    className="input"
                    autoComplete="off"
                    defaultValue={input.emotions}
                    {...register('emotions', {required: true})}
                    onInput={autoSizeTextarea}
                    onFocus={autoSizeTextarea}
                />

                <FormError isShow={!!errors.emotions}>Обязательное поле</FormError>
            </FormField>

            <FormField>
                <label className="pb-1 font-sm">Реакция</label>

                <textarea
                    style={textareaStyle}
                    rows={1}
                    placeholder="Опишите свою реакцию"
                    className="input"
                    autoComplete="off"
                    defaultValue={input.reaction}
                    {...register('reaction', {required: true})}
                    onInput={autoSizeTextarea}
                    onFocus={autoSizeTextarea}
                />

                <FormError isShow={!!errors.reaction}>Обязательное поле</FormError>
            </FormField>

            <FormField>
                <label className="pb-1 font-sm">Ощущение в теле</label>

                <textarea
                    style={textareaStyle}
                    rows={1}
                    placeholder="Опишите ощущения, которые появились в теле"
                    className="input"
                    autoComplete="off"
                    defaultValue={input.bodySensation}
                    {...register('bodySensation', {required: true})}
                    onInput={autoSizeTextarea}
                    onFocus={autoSizeTextarea}
                />

                <FormError isShow={!!errors.bodySensation}>Обязательное поле</FormError>
            </FormField>

            <br/>

            <button className="btn" type="submit">Сохранить</button>
        </form>
    );
};