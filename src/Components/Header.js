import React from 'react';
import { HeaderElement } from '../utils/constants';
import { ChevronDownIcon, ShoppingCartIcon } from "@heroicons/react/outline";


const Header = () => {
 return (
  <div className='flex justify-evenly lg:text-lg text-[8px]  bg-green-800 p-3'>
   <h1 className='text-white'>Reeco</h1>
   {HeaderElement.map((items) => {
    return (
     <h5 className='text-gray-400 hover:text-slate-200'>{items.label}</h5>
    )
   })}
   <ShoppingCartIcon className='w-5 h-5 text-white' />
   <span className='flex hover:text-white'><h2>Hello,James</h2><ChevronDownIcon className='w-5 h-5 mt-1' /></span>


  </div>
 );
}

export default Header;
