import React from 'react';
import { Details } from '../utils/constants';

const StatusDetails = () => {
 return (
  <div className='lg:grid lg:grid-cols-6 text-[6px] lg:text-sm grid grid-cols-2 shadow-xl mb-10 h-20 items-center'>
   {
    Details.map((details) => {
     return (
      <div className='border-r-4 px-10 pt-2 border h-28 border-gray-200 '>
       <h6 className=' font-light text-[8px] lg:text-sm flex  justify-center'>{details.label}</h6>
       <h1 className='font-bold'>{details.text}</h1>
      </div>
     )
    }
    )
   }
  </div>
 );
}

export default StatusDetails;
