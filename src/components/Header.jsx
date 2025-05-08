import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex flex-col items-center mt-5'>
            <img src={logo} alt="" />
            <p className='mt-5 mb-3 text-accent'>Journalism Without Fear or Favour</p>
            <p className='font-medium text-accent'>{ format(new Date() , "EEEE, MMMM dd, yyyy") }</p>
        </div>
    );
};

export default Header;