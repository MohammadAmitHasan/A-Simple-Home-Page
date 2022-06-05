import React from 'react';

const Product = ({ product }) => {
    const { brand, img, name, price } = product;
    return (
        <div className='p-2 shadow-lg rounded-lg'>
            <div className='flex justify-center'>
                <div>
                    <img src={img} alt="Mobile" />
                </div>
            </div>
            <div className='p-4'>
                <h3 className='text-2xl font-semibold text-purple-900'>{name}</h3>
                <h4 className='text-lg my-2'><span className='font-semibold'>Brand: </span>{brand}</h4>
                <h3 className='text-xl font-semibold'>Price: <span className='text-orange-600'>{price} <small>tk</small></span></h3>
            </div>

            <div className='text-center pb-3'>
                <button className='w-3/4 p-3 bg-purple-900 rounded-full text-white hover:bg-purple-700'>Order Now</button>
            </div>

        </div>
    );
};

export default Product;