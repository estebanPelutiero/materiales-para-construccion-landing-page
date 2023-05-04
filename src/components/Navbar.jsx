import React, { useState } from 'react';
import Logo from '../assets/logoHjr.png';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

  return (
    <div className='fixed w-full h-auto bg-primaryBg'>

        {/* desktop navbar */}

        <div className='flex justify-between items-center md:flex md:justify-between md:items-center w-[80vw] m-auto py-2'>
            <div>
                <a title='Home' href="#">
                    <img className='rounded' src={Logo} alt="/" />
                </a>
            </div>
            <nav className='flex flex-row'>
                <ul className='hidden md:flex'>
                    <li className='px-4 py-2 mx-4 rounded uppercase font-cabin font-medium text-sm text-fontColor hover:bg-orange-400 ease-in-out duration-200'> <a title='Home' href="#">Home</a></li>
                    <li className='px-4 py-2 mx-4 rounded uppercase font-cabin font-medium text-sm text-fontColor hover:bg-orange-400 ease-in-out duration-200'> <a title='Productos' href="#">Productos</a></li>
                    <li className='px-4 py-2 mx-4 rounded uppercase font-cabin font-medium text-sm text-fontColor hover:bg-orange-400 ease-in-out duration-200'> <a title='Nosotros' href="#">Nosotros</a> </li>
                    <li className='px-4 py-2 mx-4 rounded uppercase font-cabin font-medium text-sm text-fontColor hover:bg-orange-400 ease-in-out duration-200'> <a title='Contacto' href="#">Contacto</a></li>
                </ul>
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20} color={'white'} /> : <AiOutlineMenu size={20} color={'white'} />}
                </div>
            </nav>    
        </div>

        {/* mobile navbar */}

        <div className={nav ? 'fixed left-0 top-auto w-[40%] h-screen ease-in-out duration-500 bg-primaryBg' : 'fixed left-[-100%] h-screen ease-linear duration-500 bg-primaryBg'}>

            <nav>
                <ul className='flex flex-col'>
                    <li className='px-8 py-4 border-b border-gray-400 border-t uppercase font-cabin font-medium text-fontColor hover:bg-orange-400 ease-in-out duration-200'>
                         <a title='Home' href="#">Home</a>
                    </li>

                    <li className='px-8 py-4 border-b border-gray-400 uppercase font-cabin font-medium text-fontColor hover:bg-orange-400 ease-in-out duration-200'>
                         <a title='Productos' href="#">Productos</a>
                    </li>

                    <li className='px-8 py-4 border-b border-gray-400 uppercase font-cabin font-medium text-fontColor hover:bg-orange-400 ease-in-out duration-200'>
                         <a title='Nosotros' href="#">Nosotros</a>
                     </li>

                    <li className='px-8 py-4 border-b border-gray-400 uppercase font-cabin font-medium text-fontColor hover:bg-orange-400 ease-in-out duration-200'>
                         <a title='Contacto' href="#">Contacto</a>
                    </li>
                </ul>
            </nav>

        </div>

    </div>
  )
}

export default Navbar