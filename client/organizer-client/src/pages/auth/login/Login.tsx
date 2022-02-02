import { FormField } from '../../../components/form/FormField';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Form } from '../../../components/form/Form';
import { FormError } from '../../../components/form/FormError';
import { SubmitHandler, useForm } from 'react-hook-form';
import { signin } from '../../../services/api/requests/apiAuthRequest';

type Inputs = {
    login: string;
    password: string;
};

export const Login = () => {

    const [state, setState] = useState({
        submitSuccess: false,
    });

    const {register, handleSubmit, formState: {errors, isValid}} = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const {login, password} = data;
        try {
            await signin({login, password});
            setState({submitSuccess: isValid});
        } catch (e) {
            alert(e);
        }
    };

    if (state.submitSuccess) {
        return <Navigate to="/"/>;
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="text-2xl pb-4 font-medium">Авторизация</h3>

            <FormField>
                <input
                    placeholder="Логин"
                    className="input"
                    autoComplete="off"
                    {...register('login', {required: true})}
                />

                {errors.login && <FormError>Required</FormError>}
            </FormField>

            <FormField>
                <input
                    placeholder="Пароль"
                    className="input"
                    autoComplete="off"
                    {...register('password', {required: true})}
                />

                {errors.password && <FormError>Required</FormError>}
            </FormField>

            <br/>

            <button className="btn" type="submit">Подтвердить</button>
        </Form>
    );
};