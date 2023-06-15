import React from 'react'
import {AiFillCloseCircle} from 'react-icons/ai'; 

const Modal = ({ open, onClose, children }) => {

  return (

    <div 
    onClick={onClose}
    className={`fixed inset-1 mt-[96px] flex justify-center items-center rounded z-30 transition-colors ${open ? 'visible bg-black/90 overflow-scroll' : 'hidden'}`}
    >
          {children}
      <button className='absolute p-3 top-0 right-0' onClick={onClose}><AiFillCloseCircle color='white' size={40} /></button>
    </div>

  )

}

export default Modal