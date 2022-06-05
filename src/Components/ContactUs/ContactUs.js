import React from 'react';
import contact from '../../Images/contactUs.jpg'

const ContactUs = () => {
    return (
        <div className='container mx-auto mt-10 p-5' id='contact-us'>
            <div className='text-3xl md:text-4xl font-semibold text-center'>
                <h1 className='text-center text-3xl md:text-4xl font-semibold text-purple-900'>Make Relationships</h1>
                <h3 className='text-center mb-5 text-3xl md:text-3xl font-semibold'>With Us</h3>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-5'>
                <div className='flex justify-center items-center md:justify-end'>
                    <div>
                        <img src={contact} alt="Contact Us" />
                    </div>
                </div>

                <div className='flex justify-center lg:justify-start items-center'>
                    <form>
                        <div className="grid grid-cols-1 gap-3 mt-5 form-control w-full max-w-xs">

                            <input type="text" autoComplete='off' placeholder="Your name" className="border-2 p-2 rounded-md w-full max-w-xs" />

                            <input type="email" autoComplete='off' placeholder="Your Email" className="border-2 p-2 rounded-md w-full max-w-xs" />
                            <textarea placeholder='Write your comment please' className="border-2 p-2 rounded-md w-full max-w-xs" cols="30" rows="5" />

                            <input className='w-full rounded-full bg-purple-900 text-white p-2' type="submit" value='Send to Us' />
                        </div>


                    </form>
                </div>

            </div>
        </div>
    );
};

export default ContactUs;