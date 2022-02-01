import { ReactNode } from 'react';
import './AuthFormWrapper.css';

type AuthFormWrapperProps = {
    children: ReactNode;
}

export const AuthFormWrapper = (props: AuthFormWrapperProps) => {

    const {children} = props;

    return (
        <div className="auth-form-wrapper">
            <div className="max-w-md w-full p-4 py-8 shadow-lg rounded flex flex-col">
                {children}
            </div>
        </div>
    );
};