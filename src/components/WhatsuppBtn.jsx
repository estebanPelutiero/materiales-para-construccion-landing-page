import React from 'react'
import Whatsapp from '../assets/logos/whatsapp.png'

const WhatsuppBtn = () => {
  return (
    <div className='absolute bottom-6 right-6'>
        <a href="#" title='Ir al chat'>
            <img className='w-[60px]' src={Whatsapp} alt="/" />   
        </a>
    </div>
  )
}

export default WhatsuppBtn