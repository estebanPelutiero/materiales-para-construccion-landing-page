import React from 'react'

const Modal = ({ open, onClose, children }) => {

  return (

    <div 
    onClick={onClose}
    className={`fixed inset-1 mt-[120px] flex justify-center items-center rounded z-30 transition-colors ${open ? 'visible bg-black/70' : 'hidden'}`}
    >
        {children}
    </div>

  )

}

export default Modal