import React from 'react'

const Product = (props) => {

  return (
    <div className='group flex flex-col items-center h-[400px] w-[380px] p-2 border shadow-lg rounded cursor-pointer bg-slate-100/50'>

      <div className='flex justify-center items-center h-[60%] w-[70%] my-2 border-b border-b-gray-300'>
        <img className='group-hover:scale-[105%] ease-in-out duration-300 h-[80%]' src={props.img} alt={props.title} />
      </div>

      <div className='flex flex-col items-center justify-evenly h-[40%] w-[100%] font-cabin'>
        <h1 className='w-[60%] font-bold text-lg text-center bg-orange-400 px-2 py-1 rounded'>{props.title}</h1>
        <h3 className='w-[60%] font-semibold italic text-center bg-orange-300 px-2 py-1 rounded'>{props.description}</h3>
        <p className='w-[60%] font-bold text-xl text-center bg-slate-200 px-2 py-1 rounded'>$ {props.price}</p>
      </div>

    </div>
  )

}

export default Product