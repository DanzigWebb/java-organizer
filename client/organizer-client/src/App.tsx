import React from 'react';
import './App.css';
import { signin } from './services/api/requests/apiAuthRequest';
import { LoginForm } from './pages/auth/login/LoginForm';

function App() {
    async function login() {
        const login = 'alex@mail.com';
        const password = '123456';

        const response = await signin({login, password});
        console.log(response);
    }

    return (
        <div className="App">
            <LoginForm />
        </div>
    );
}

export default App;
