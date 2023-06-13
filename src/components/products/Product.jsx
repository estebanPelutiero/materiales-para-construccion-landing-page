import React from 'react'

const Product = (props) => {

  return (
    <div className='group flex flex-col items-center h-[300px] w-[250px] p-2 border shadow-lg rounded bg-slate-100/50'>

      <div className='flex justify-center items-center h-[60%] w-[70%] my-2 border-b border-b-gray-300'>
        <img className='w-[120px]' src={props.img} alt={props.title} />
      </div>

      <div className='flex flex-col items-center justify-evenly h-[40%] w-[100%] font-cabin'>
        <h1 className='w-[60%] font-bold text-center bg-orange-400 px-2 py-1 rounded'>{props.title}</h1>
        <h3 className='w-[60%] font-semibold italic text-center bg-orange-300 px-2 py-1 rounded'>{props.description}</h3>
      </div>

    </div>
  )

}

export default Product