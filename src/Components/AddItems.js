import React, { useEffect, useState } from 'react';
import { ProductDetails } from '../utils/constants';
import { CheckIcon } from '@heroicons/react/outline';
import { useSelector, useDispatch } from 'react-redux';
import { actionApproval, actionMissing } from '../actions/index';



const AddItems = () => {
 const [search, setSearch] = useState()

 const myState = useSelector((state) => state.messageStatus)
 const dispatch = useDispatch()
 console.log(myState.APPROVAL == 'APPROVAL' ? console.log("app") : console.log("no"));

 const handleSearch =
  Object.values(ProductDetails).filter((item) => item.description && item.description.toLowerCase().includes(search))

 function productData(item) {

  return item.map((item) => (
   <div className='divide-y divide-gray-400'>
    <div
     key={item.id}
     rel="noreferrer noopener"
     className="flex items-center -mx-2 pt-3 text-xs font-normal ga-external-link hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-zee-link-1 to-zee-link-2 w-fit lg:text-sm sm:text-sm lg:text-md "
    >
     {item.img && <img className='w-7 h-7 rounded-2xl' src={item.img} alt='' />}
     <span className='px-3'>{item.description}</span>

    </div>
   </div>

  ));
 }



 function Popup(props) {
  const { buttonTxt } = props
  return (
   <>
    {buttonTxt == "Edit" ? <button className="bg-transparent  font-semibold px-6 mx-3" onClick={() => document.getElementById('my_modal_4').showModal()}>{buttonTxt}</button> : <button className="bg-transparent hover:bg-green-500  text-green-700 font-semibold hover:text-white px-6 mx-3 border border-green-500 hover:border-transparent rounded-full" onClick={() => document.getElementById('my_modal_4').showModal()}>{buttonTxt}</button>}
    <dialog id="my_modal_4" className="modal w-96">
     <div className="p-10">
      <h3 className="font-bold text-lg">{buttonTxt}</h3>
      <input className='w-full' placeholder='Add/Edit' />
      <div className="modal-action">
       <form method="dialog">
        <button className="flex justify-end">X</button>
       </form>
      </div>
     </div>
    </dialog>
   </>
  )
 }


 return (
  <div className='bg-gray-100 mx-auto border-gray-500 border rounded-sm text-gray-700 mb-0.5 h-80'>
   <div className='flex justify-between p-4'>
    <input className=' w-4/12 h-8 p-2 rounded-lg' placeholder='search...' value={search} onChange={(e) => setSearch(e.target.value)} />
    <div>
     {<Popup buttonTxt="Add Item" />}
    </div>
   </div>
   <div className='grid grid-cols-6 '>

    {!search ?
     Object.keys(ProductDetails).map((item, index) => {
      return (
       <div className="grid-flow-row lg:ml-10 " key={item}>
        <div className='border '>
         <p>{item}</p>
         {item == 'Status' &&
          <div className='flex justify-evenly'>
           {myState.MISSING ? <div className=' bg-red-500 text-xs rounded-xl p-1'>{myState.MISSING}</div> : <div className=' bg-green-500 text-xs rounded-xl p-1'>{myState.APPROVAL}</div>}
           {<button onClick={() => dispatch(actionApproval("APPROVAL"))}><CheckIcon className='w-5 h-5' /></button>}
           {<button onClick={() => dispatch(actionMissing("MISSING"))}>X
           </button>}
           <button><Popup buttonTxt="Edit" /></button>
          </div>
         }
        </div>

        {productData(Object.values(ProductDetails)[index])}
       </div>

      );
     })
     : handleSearch.map((item) => {
      return (
       <div className=' grid grid-flow-row divide-y divide-gray-400'>
        <h1>{item}</h1>

       </div>
      )
     })
    }

   </div>
  </div >
 );
}

export default AddItems;
