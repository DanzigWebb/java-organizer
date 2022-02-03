import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <main className="main">
            <Outlet/>
        </main>
    );
}


export default App;
