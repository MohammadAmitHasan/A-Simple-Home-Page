import React from 'react';
import mobile from '../../Images/mobile.webp'
import acc from '../../Images/acc.webp'
import smartDevice from '../../Images/smartDevice.webp'
import parts from '../../Images/parts.webp'
import repair from '../../Images/servicing.webp'


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";

// import required modules
import { Pagination, EffectCoverflow } from "swiper";


const Slider = () => {
    return (
        <div className='container mx-auto'>
            <h1 className='text-center mb-5 text-3xl md:text-4xl font-semibold text-purple-900'>Get From Us</h1>
            <div className='max-w-4xl mx-auto p-5'>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}

                    modules={[EffectCoverflow]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={mobile} alt="feature1" />
                        <div className='bg-zinc-800 p-2 rounded-b-lg'>
                            <h2 className='text-2xl font-semibold text-white'>Mobile Devices</h2>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={acc} alt="feature2" />
                        <div className='bg-zinc-800 p-2 rounded-b-lg'>
                            <h2 className='text-2xl font-semibold text-white'>Mobile Accessories</h2>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={smartDevice} alt="feature3" />
                        <div className='bg-zinc-800 p-2 rounded-b-lg'>
                            <h2 className='text-2xl font-semibold text-white'>Smart Gadgets</h2>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={parts} alt="feature4" />
                        <div className='bg-zinc-800 p-2 rounded-b-lg'>
                            <h2 className='text-2xl font-semibold text-white'>Mobile Parts</h2>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={repair} alt="feature4" />
                        <div className='bg-zinc-800 p-2 rounded-b-lg'>
                            <h2 className='text-2xl font-semibold text-white'>Mobile Services</h2>
                        </div>

                    </SwiperSlide>
                </Swiper>

            </div>
        </div>

    );
};

export default Slider;