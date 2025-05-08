import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex gap-4 bg-base-200 p-4'>
            <p className='bg-secondary text-white px-5 py-2 font-medium text-xl'>Latest</p>
            <Marquee className='felx gap-5' pauseOnHover speed={70}>
                <p className='font-semibold text-lg p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit similique porro a iste totam voluptate praesentium debitis ab blanditiis illo.</p>
                <p className='font-semibold text-lg p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit similique porro a iste totam voluptate praesentium debitis ab blanditiis illo.</p>
                <p className='font-semibold text-lg p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit similique porro a iste totam voluptate praesentium debitis ab blanditiis illo.</p>
            </Marquee>
            
        </div>
    );
};

export default LatestNews;