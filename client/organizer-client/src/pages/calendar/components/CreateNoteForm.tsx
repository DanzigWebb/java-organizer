import { FormField } from '../../../components/form/FormField';
import { FormError } from '../../../components/form/FormError';
import { CSSProperties } from 'react';
import { SubmitHandler, UnpackNestedValue, useForm } from 'react-hook-form';
import { DiaryItemsType } from '../models/diary.type';
import { Textarea } from '../../../components/form/Textarea';

type Inputs = DiaryItemsType;

type CreateNoteFormProps = {
    onSubmit: (data: UnpackNestedValue<Inputs>) => void;
    input?: Inputs;
    isEdit?: boolean;
}

const textareaStyle: CSSProperties = {
    resize: 'none',
    boxSizing: 'border-box',
    overflow: 'hidden',
};

export const CreateNoteForm = (props: CreateNoteFormProps) => {

    const {handleSubmit, control, formState: {errors}} = useForm<Inputs>();

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

    return (
        <form className="w-full" onSubmit={handleSubmit(onSubmitForm)}>

            <FormField>
                <label className="pb-1 font-sm">Ситуация</label>

                <Textarea
                    style={textareaStyle}
                    placeholder="Опишите ситуацию, с которой вы столкнулись"
                    defaultValue={input.situation}
                    control={control}
                    name="situation"
                    rules={{required: true}}
                />

                <FormError isShow={!!errors.situation}>Обязательное поле</FormError>
            </FormField>

            <FormField>
                <label className="pb-1 font-sm">Мысли</label>

                <Textarea
                    style={textareaStyle}
                    placeholder="Опишите ваши мысли"
                    defaultValue={input.think}
                    control={control}
                    name="think"
                    rules={{required: true}}
                />

                <FormError isShow={!!errors.think}>Обязательное поле</FormError>
            </FormField>

            <FormField>
                <label className="pb-1 font-sm">Эмоции</label>

                <Textarea
                    style={textareaStyle}
                    placeholder="Опишите ваши эмоции"
                    defaultValue={input.emotions}
                    control={control}
                    name="emotions"
                    rules={{required: true}}
                />

                <FormError isShow={!!errors.emotions}>Обязательное поле</FormError>
            </FormField>

            <FormField>
                <label className="pb-1 font-sm">Реакция</label>

                <Textarea
                    style={textareaStyle}
                    placeholder="Опишите свою реакцию"
                    defaultValue={input.reaction}
                    control={control}
                    name="reaction"
                    rules={{required: true}}
                />

                <FormError isShow={!!errors.reaction}>Обязательное поле</FormError>
            </FormField>

            <FormField>
                <label className="pb-1 font-sm">Ощущение в теле</label>

                <Textarea
                    style={textareaStyle}
                    placeholder="Опишите ощущения, которые появились в теле"
                    defaultValue={input.bodySensation}
                    control={control}
                    name="bodySensation"
                    rules={{required: true}}
                />

                <FormError isShow={!!errors.bodySensation}>Обязательное поле</FormError>
            </FormField>

            <br/>

            <button className="btn" type="submit">Сохранить</button>
        </form>
    );
};