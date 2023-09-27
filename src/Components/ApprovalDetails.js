import { ArrowSmRightIcon, ChevronRightIcon } from '@heroicons/react/outline';
import React from 'react';

const Aproval = () => {
 return (
  <div className=' lg:text-sm text-[6px] shadow-xl  h-20 p-4'>
   <div className='flex'>
    <p>orders</p>
    <ChevronRightIcon className='lg:w-4 lg:h-4 w-2 h-2' />
    <p>Order number 32BAC</p>

   </div>
   <h2>Order number 32BAC</h2>
   <div className=' flex justify-end -mt-5'>
    <button className='bg-transparent hover:bg-green-500  text-green-700 font-semibold hover:text-white px-6 mx-3 border border-green-500 hover:border-transparent rounded-full'>Back</button>
    <button className='bg-green-500 hover:bg-green-800 text-green-700 font-semibold hover:text-white px-6 py-1 rounded-full'>Approve Order</button>

   </div>


  </div>
 );
}

export default Aproval;
