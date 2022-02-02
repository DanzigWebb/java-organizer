import { Outlet } from 'react-router-dom';
import './AuthFormWrapper.css';

type AuthFormWrapperProps = {}

export const AuthFormWrapper = () => {
    return (
        <div className="auth-form-wrapper">
            <div className="max-w-md w-full p-4 py-8 shadow-lg rounded flex flex-col">
                <Outlet/>
            </div>
        </div>
    );
};