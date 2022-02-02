import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import Home from './pages/home/Home';
import { AuthFormWrapper } from './pages/auth/AuthFormWrapper';
import { Login } from './pages/auth/login/Login';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route index element={<Home/>}/>
                <Route path="auth" element={<AuthFormWrapper/>}>
                    <Route path="login" element={<Login/>}/>
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
