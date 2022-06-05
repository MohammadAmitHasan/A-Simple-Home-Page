import React, { useState } from 'react';
import logo from '../../Images/icons8-smartphone-tablet-80.png'
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className='py-2 bg-zinc-800 flex items-center mx-auto fixed top-0 z-50 w-full px-10'>
            <div className='flex w-[120px]'>
                <img src={logo} className='h-10 ml-2 sm:ml-0' alt="" />
                <span className='flex items-center text-2xl ml-1 text-red-400 font-semibold'>NMM</span>
            </div>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden ml-auto mr-4'>
                {open ? <XIcon className='text-white'></XIcon> : <MenuIcon className='text-white'></MenuIcon>}
            </div>
            <ul className={`bg-zinc-800 py-1 md:flex justify-end text-center left-0 w-full absolute md:static duration-300 ease-in ${open ? 'top-14' : 'top-[-240px]'}`}>
                <div className='menuItems'><Link to={'/'}>HOME</Link></div>
                <div className='menuItems'><Link to={'/'}>MOBILES</Link></div>
                <div className='menuItems'><Link to={'/'}>CART</Link></div>
                <div className='menuItems'><Link to={'/'}>LOGOUT</Link></div>
            </ul>
        </nav>

    );
};

export default Navbar;
