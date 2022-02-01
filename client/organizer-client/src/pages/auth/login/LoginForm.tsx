import { AuthFormWrapper } from '../AuthFormWrapper';
import { FormField } from '../../../components/form/FormField';
import { Input } from '../../../components/form/Input';
import React, { useState } from 'react';

export const LoginForm = () => {

    const [state, setState] = useState({
        name: '',
        email: '',
        password: '',
    });

    return (
        <AuthFormWrapper>
            <FormField>
                <Input
                    placeholder="Имя"
                    value={state.name}
                    onInput={name => setState({...state, name})}
                />
            </FormField>

            <FormField>
                <Input
                    placeholder="Email"
                    value={state.email}
                    onInput={email => setState({...state, email})}
                />
            </FormField>

            <FormField>
                <Input
                    placeholder="Пароль"
                    value={state.password}
                    onInput={password => setState({...state, password})}
                />
            </FormField>

            <br/>

            <button className="btn">Подтвердить</button>
        </AuthFormWrapper>
    );
};