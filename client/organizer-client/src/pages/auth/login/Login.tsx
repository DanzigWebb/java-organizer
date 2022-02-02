import { FormField } from '../../../components/form/FormField';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Form } from '../../../components/form/Form';
import { FormError } from '../../../components/form/FormError';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
    name: string;
    email: string;
    password: string;
};

export const Login = () => {

    const [state, setState] = useState({
        submitSuccess: false,
    });

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();


    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);


    if (state.submitSuccess) {
        return <Navigate to="/"/>;
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="text-2xl pb-4 font-medium">Авторизация</h3>

            <FormField>
                <input
                    placeholder="Имя"
                    className="input"
                    {...register("name", {required: true})}
                />

                <FormError>Required</FormError>
            </FormField>

            <FormField>
                <input
                    placeholder="Email"
                    className="input"
                    {...register("email", {required: true})}
                />
            </FormField>

            <FormField>
                <input
                    placeholder="Пароль"
                    className="input"
                    {...register("password", {required: true})}
                />
            </FormField>

            <br/>

            <button className="btn" type="submit">Подтвердить</button>
        </Form>
    );
};