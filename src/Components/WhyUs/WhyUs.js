import React from 'react';
import box from '../../Images/box.png'
import house from '../../Images/house.png'
import question from '../../Images/question.png'
import whyus from '../../Images/whyUs.webp'

const WhyUs = () => {
    return (
        <div>
            <section class="container mt-10 mx-auto p-5">
                <h1 className='text-center mb-8 text-3xl md:text-4xl font-semibold text-purple-900'>Why Us</h1>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">

                    <div className='flex justify-center items-center'>
                        <div>
                            <img src={whyus} alt="why us" className='max-w-sm' />
                        </div>
                    </div>
                    <div>
                        <div class="flex items-center shadow-xl p-7 rounded-3xl">
                            <img class="w-20 h-20 mr-3" src={box} alt="" />
                            <div>
                                <h5 class="text-2xl mb-3">Find the Perfect Phone</h5>
                                <p>Everybody is different, This is why we
                                    offer various phones for every body.</p>
                            </div>
                        </div>

                        <div class="row-span-3 order-first lg:order-none mb-12 lg:mb-0 flex items-center">
                            <div>
                                <img src="./images/shopping.png" alt="" />
                            </div>
                        </div>

                        <div class="flex items-center  shadow-xl p-7 rounded-3xl">
                            <img class="w-20 h-20 mr-3" src={house} alt="" />
                            <div>
                                <h5 class="text-2xl mb-3">Free Exchange</h5>
                                <p>One of the many reasons you can shop
                                    with peace of mind. If you face any problem we have exchange policy</p>
                            </div>
                        </div>

                        <div class="flex items-center  shadow-xl p-7 rounded-3xl">
                            <img class="w-20 h-20 mr-3" src={question} alt="" />
                            <div>
                                <h5 class="text-2xl mb-3">Contact Our Seller</h5>
                                <p>They are here to help you. You can query your confusions to get help</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section >
        </div >
    );
};

export default WhyUs;