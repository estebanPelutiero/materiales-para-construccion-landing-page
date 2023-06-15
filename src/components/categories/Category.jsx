import React, { useState } from "react";
import Modal from "../products/Modal";
import ProductsContainer from "../products/ProductsContainer";

const Category = (props) => {

    const [open, setOpen] = useState(false);

    return (

      <div className='group flex flex-col justify-center items-center lg:h-[350px] lg:w-[380px] h-[300px] w-[340px] p-2 shadow-lg rounded bg-gray-500'>
  
        <div onClick={() => setOpen(true)} className='flex justify-center items-center h-[80%] w-full mb-1 overflow-hidden rounded cursor-pointer'>
          <img className='relative z-10 group group-hover:scale-[104%] group-hover:blur-[2px] duration-[400ms] h-full w-full' src={props.img} alt={props.name} />
          <p className="absolute group-hover:z-30 text-center font-cabin text-base bg-slate-200/80 px-4 rounded">Ver Detalle</p>
        </div>
  
        <div onClick={() => setOpen(true)} className='h-[20%] w-[100%] cursor-pointer'>
          <h1 className='flex justify-center items-center font-cabin h-full w-full text-2xl bg-orange-400 px-2 py-1 rounded'>{props.name}</h1>
        </div>

        <Modal open={open} onClose={() => setOpen()} >

         {/*  la prop comparative es para comparar el nombre del padre (category) con la categoria del hijo (product).
          De esta manera cuando hago click en una categoria, solo me trae del array de productos aquellos que 
          coinciden con esa categoria. */}

          <ProductsContainer comparative={props.name} /> 

        </Modal>
  
      </div>
    )
  
  }

  export default Category;