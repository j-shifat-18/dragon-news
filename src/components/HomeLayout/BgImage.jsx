import React from 'react';
import bgImg from '../../assets/bg.png'

const BgImage = () => {
    return (
        <div className='mt-4'>
            <img className='w-full object-cover' src={bgImg} alt="" />
        </div>
    );
};

export default BgImage;