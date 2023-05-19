import React from "react";

const Category = (props) => {

    return (
      <div className='group flex flex-col justify-center items-center h-[350px] w-[380px] p-2 border shadow-lg rounded cursor-pointer bg-slate-100/50'>
  
        <div className='flex justify-center items-center h-[80%] w-full mb-1 overflow-hidden rounded'>
          <img className='group-hover:scale-[104%] group-hover:blur-[0.4px] duration-700 h-full w-full bg-center' src={props.img} alt={props.name} />
        </div>
  
        <div className='h-[20%] w-[100%]'>
          <h1 className='flex justify-center items-center font-cabin h-full w-full text-2xl bg-orange-400 px-2 py-1 rounded'>{props.name}</h1>
        </div>
  
      </div>
    )
  
  }

  export default Category;