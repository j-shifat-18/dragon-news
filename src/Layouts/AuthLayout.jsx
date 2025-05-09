import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Loading from '../components/Loading';

const AuthLayout = () => {

    const {state} = useNavigation();
    // console.log(state)
    return (
        <div className='bg-base-200 min-h-screen'>
            <header className='w-11/12 mx-auto pt-4 pb-6'>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto'>
             {state=="loading" ? <Loading></Loading> :<Outlet></Outlet> }   
            </main>
        </div>
    );
};

export default AuthLayout;