
export function Popup() {
 return (
  <>
   <button className="bg-transparent hover:bg-green-500  text-green-700 font-semibold hover:text-white px-6 mx-3 border border-green-500 hover:border-transparent rounded-full" onClick={() => document.getElementById('my_modal_4').showModal()}>Add Item</button>
   <dialog id="my_modal_4" className="modal">
    <div className="p-10">
     <h3 className="font-bold text-lg">Hello!</h3>
     <p className="py-4">Click the button below to close</p>
     <div className="modal-action">
      <form method="dialog">
       <button className="btn">Close</button>
      </form>
     </div>
    </div>
   </dialog>
  </>
 )
}

