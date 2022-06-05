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

import "./Feature.css";

// import required modules
import { Pagination, EffectCoverflow } from "swiper";


const Slider = () => {
    return (
        <div className='container mx-auto'>
            <h1 className='text-center mb-8 text-3xl md:text-4xl font-semibold text-purple-900'>Get From Us</h1>
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
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}

                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={mobile} alt="feature1" />
                        <p className='text-2xl font-semibold text-center text-purple-900'>
                            Mobile Devices
                        </p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={acc} alt="feature2" />
                        <p className='text-2xl font-semibold text-center text-purple-900'>
                            Mobile Accessories
                        </p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={smartDevice} alt="feature3" />
                        <p className='text-2xl font-semibold text-center text-purple-900'>
                            Smart Gadgets
                        </p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={parts} alt="feature4" />
                        <p className='text-2xl font-semibold text-center text-purple-900'>
                            Mobile Parts
                        </p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={repair} alt="feature4" />
                        <p className='text-2xl font-semibold text-center text-purple-900'>
                            Mobile Services
                        </p>
                    </SwiperSlide>
                </Swiper>

            </div>
        </div>

    );
};

export default Slider;