import { ArrowRightIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
import Product from './Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('mobile.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='container mx-auto mb-10'>
            <h1 className='text-center mb-8 text-3xl md:text-4xl font-semibold text-purple-900'>Choice Your Mobile</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className='text-right'>
                <button className='flex ml-auto mt-5 rounded-lg hover:bg-purple-200 p-3 justify-center items-center font-semibold text-purple-900'>Explore All <ArrowRightIcon className='h-5 w-5 ml-2'></ArrowRightIcon> </button>
            </div>
        </div>
    );
};

export default Products;