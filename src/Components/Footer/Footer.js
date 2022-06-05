import { DeviceMobileIcon, MailIcon } from '@heroicons/react/solid';
import React from 'react';
import logo from '../../Images/icons8-smartphone-tablet-80.png'
const Footer = () => {
    return (
        <div className='p-10 bg-zinc-800 mt-10 text-white'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 container mx-auto mb-5'>
                <div className='lg:col-span-2 flex items-center justify-center md:justify-start'>
                    <div className='w-72'>
                        <img src={logo} className='h-10 mx-auto' alt="" />
                        <div className='pt-1 text-center'>
                            <h4 className='text-xl font-semibold text-red-400'>NASAH Mobile Mania</h4>
                        </div>
                    </div>
                </div>

                <div className='mt-8'>
                    <p className="my-1 cursor-pointer">
                        Know About Our Products
                    </p>
                    <p className="my-1 cursor-pointer">
                        Know About Us
                    </p>
                    <p className="my-1 cursor-pointer">Terms & Conditions</p>
                    <p className="my-1 cursor-pointer">Privacy</p>

                </div>
                <div>
                    <h5 className='text-xl'>Contact Me</h5>
                    <p className='my-1 flex'>
                        <MailIcon className='w-6 h-6 mr-1'></MailIcon>bhamithasan@gmail.com
                    </p>

                    <p className='my-1 flex'>
                        <MailIcon className='w-6 h-6 mr-1'></MailIcon>bhamithasan@yahoo.com
                    </p>

                    <p className="my-1 flex">
                        <DeviceMobileIcon className='w-6 h-6'></DeviceMobileIcon> +8801521332099</p>

                    <p className='my-1 flex'>
                        <img className='h-6 w-6 mr-1' src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" alt='whats app' />+01521332099
                    </p>

                    <p className='mt-2 flex'>
                        <a target='_blank' href="https://www.facebook.com/amit.hasan.58152/">
                            <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt='Facebook' />
                        </a>
                        <a target='_blank' href="https://www.linkedin.com/in/muhammad-amit-hasan-98743777/">
                            <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt='Linkedin' />
                        </a>

                        <a target='_blank' href="https://github.com/MohammadAmitHasan">
                            <img src="https://img.icons8.com/fluency/48/000000/github.png" alt='Github' />
                        </a>
                    </p>
                </div>
            </div>
            <hr />
            <p className='text-center mt-5'>
                <small>Copyright &copy; {new Date().getFullYear()}, NASAH Mobile Mania, All rights reserved</small>
            </p>
        </div>

    );
};

export default Footer;