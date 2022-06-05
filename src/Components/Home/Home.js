import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Products from '../Products/Products';
import Slider from '../Slider/Slider';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Slider></Slider>
            <Products></Products>
            <WhyUs></WhyUs>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;