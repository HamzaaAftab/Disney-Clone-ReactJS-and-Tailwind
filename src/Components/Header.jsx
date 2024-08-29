import React, { useState } from 'react';
import logo from './../assets/Images/logo.png';
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem';

function Header() {
    const [toggle, setToggle] = useState(false);
    const menu = [
        {
            name: 'HOME',
            icon: HiHome
        },
        {
            name: 'SEARCH',
            icon: HiMagnifyingGlass
        },
        {
            name: 'WATCH LIST',
            icon: HiPlus
        },
        {
            name: 'ORIGINALS',
            icon: HiStar
        },
        {
            name: 'MOVIES',
            icon: HiPlayCircle
        },
        {
            name: 'SERIES',
            icon: HiTv
        }
    ];

    return (
        <div className='flex items-center justify-between p-5 bg-black'>
            <div className='flex gap-4 items-center'>
                <img src={logo} className='w-[90px] md:w-[130px] object-cover' alt="Logo" />
                <div className='hidden md:flex gap-6'>
                    {menu.map((item) => (
                        <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
                    ))}
                </div>
                <div className='flex md:hidden gap-5'>
                    {menu.slice(0, 3).map((item) => (
                        <HeaderItem key={item.name} name={''} Icon={item.icon} />
                    ))}
                    <div className='relative'>
                        <div onClick={() => setToggle(!toggle)}>
                            <HeaderItem name={''} Icon={HiDotsVertical} />
                        </div>
                        {toggle && (
                            <div className='absolute right-0 mt-3 bg-[#121212] border border-gray-700 p-3 px-5 py-4'>
                                {menu.slice(3).map((item) => (
                                    <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                className='w-[30px] md:w-[40px] rounded-full' alt="User Avatar" />
        </div>
    );
}

export default Header;
