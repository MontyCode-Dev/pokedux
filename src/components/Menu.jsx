import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '.';
import { BsHeartFill } from 'react-icons/bs';
import { IoMdMenu, IoMdClose } from 'react-icons/io';

const Menu = () => {
  const [ isOpen, setIsOpen ] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div class="w-full mx-auto bg-white shadow-sm border-b border-gray-300 px-5 sm:px-10">
        <div class="container justify-between h-16 flex items-center lg:items-stretch mx-auto">
            <div class="h-full flex items-center">
                <div class="mr-10 flex items-center">
                  <Logo className="w-32" />
                </div>
                <ul class="lg:flex items-center h-full hidden">
                    <li class="cursor-pointer h-full flex items-center text-sm text-violet-400 tracking-normal border-b-2 border-violet-400">
                        <Link to='/'>Home</Link>
                    </li>
                    <li class="cursor-pointer h-full flex items-center text-sm text-gray-800 mx-10 tracking-normal">
                        <Link to='/'>Abilities</Link>
                    </li>
                </ul>
            </div>
            <div class="h-full lg:flex  items-center justify-end hidden">
                <div class="w-full h-full flex items-center">
                    <div class="w-full h-full flex">
                        <div class="w-full flex items-center justify-end relative cursor-pointer">
                            <BsHeartFill className='cursor-pointer text-violet-400 w-4 h-4' />
                            <p class="text-gray-800 text-sm ml-2">Favorites</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile Nav  */}
            <div class="lg:hidden cursor-pointer text-gray-700 hover:text-gray-700 focus:outline-none transition duration-150 ease-in-out">
                <ul class={'top-0 z-40 p-2 border-r bg-white absolute rounded left-0 right-0 shadow mt-16 md:mt-16 ' + (isOpen ? 'block' : 'hidden')}>
                    <li class="flex lg:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                        <div class="flex items-center">
                            <span class="ml-2"><Link to='/'>Home</Link></span>
                        </div>
                    </li>
                    <li class="ml-2 cursor-pointer text-gray-600 text-base leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                        <div class="flex items-center">
                            <BsHeartFill className='cursor-pointer text-violet-400 w-4 h-4' />
                            <span class="leading-6 ml-2">Favorites</span>
                        </div>
                    </li>
                </ul>
                <div>
                    <div class={'show-m-menu lg:hidden ' + (isOpen ? 'hidden' : 'block')} onClick={handleMenu}>
                        <IoMdMenu />
                    </div>
                    <div onClick={handleMenu} class={'close-m-menu ' + (isOpen ? 'block' : 'hidden')}>
                        <IoMdClose />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Menu;