import React from 'react';
import bannerImg from '../../Images/P6YSG40.png'

const Banner = () => {
    return (
        <div className='container mx-auto mt-10 mb-5 md:mb-0 min-h-[95vh] grid grid-cols-1 sm:grid-cols-2 p-5'>
            <div className='flex justify-center items-center h-full'>
                <div><img className='max-w-xs' src={bannerImg} alt="Mobile" /></div>
            </div>
            <div className='flex justify-center items-center'>
                <div>
                    <h1 className='text-3xl md:text-4xl font-semibold text-purple-900'>Open The World Of Possibility</h1>
                    <h3 className='mt-3 text-2xl md:text-3xl font-semibold'>With a Powerhouse</h3>

                    <p className='text-gray-700 leading-7 border-l-2 border-purple-900 pl-4 my-6 w-3/5'>Get the best mobiles from Nasah Mobile Mania according to your budget and liking with best price. No compromise with quality. Simply the best pricing</p>

                    <button className='btn bg-purple-900 hover:bg-purple-700 text-white px-3 py-2 rounded-xl'>EXPLORE</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;