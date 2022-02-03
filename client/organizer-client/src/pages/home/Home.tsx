import { Outlet } from "react-router-dom"
import React, { useEffect } from 'react';
import { getProfile } from '../../services/api/requests/apiAuthRequest';
import Header from '../../components/template/Header';

export default () => {

    useEffect(() => {
        getProfile().then(data => {
            // console.log(data);
        })
    }, [])

    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}