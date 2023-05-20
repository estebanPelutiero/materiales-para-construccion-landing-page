import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Logo from '../../assets/logos/logoHjr.png';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

  return (
    <div className='fixed w-full h-auto z-50 bg-white shadow-lg'>

        {/* desktop navbar */}

        <div className='flex justify-between items-center md:flex md:justify-between md:items-center w-[80vw] m-auto py-2'>
            <div className='w-auto'>
                <a title='Home' href="#">
                    <img className='rounded' src={Logo} alt="/" />
                </a>
            </div>
            <nav className='flex flex-row'>
                <ul className='hidden md:flex'>
                    <li className='px-4 py-2 mx-4 rounded uppercase font-cabin font-medium text-sm text-fontColor bg-slate-400 hover:bg-orange-400 ease-in-out duration-200'> <Link className='cursor-pointer' title='Home' to='home' smooth={true} spy={true} >Home</Link></li>
                    <li className='px-4 py-2 mx-4 rounded uppercase font-cabin font-medium text-sm text-fontColor bg-slate-400 hover:bg-orange-400 ease-in-out duration-200'> <Link className='cursor-pointer' title='Productos' to='productos' smooth={true} spy={true} >Productos</Link></li>
                    <li className='px-4 py-2 mx-4 rounded uppercase font-cabin font-medium text-sm text-fontColor bg-slate-400 hover:bg-orange-400 ease-in-out duration-200'> <Link className='cursor-pointer' title='Sucursales' to='sucursales' smooth={true} spy={true} >Sucursales</Link> </li>
                    <li className='px-4 py-2 mx-4 rounded uppercase font-cabin font-medium text-sm text-fontColor bg-slate-400 hover:bg-orange-400 ease-in-out duration-200'> <Link className='cursor-pointer' title='Contacto' to='contacto' smooth={true} spy={true} >Contacto</Link></li>
                </ul>
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20} color={'black'} /> : <AiOutlineMenu size={20} color={'black'} />}
                </div>
            </nav>    
        </div>

        {/* mobile navbar */}

        <div className={nav ? 'fixed left-0 top-0 w-[40%] h-screen ease-in-out duration-500 bg-primaryBg' : 'fixed left-[-100%] h-screen bg-primaryBg'}>

            <nav>
                <ul className='flex flex-col'>

                    <li className='px-8 py-2'>
                        <img className='rounded' src={Logo} alt="/" />
                    </li>

                    <li className='px-8 py-4 border-b border-gray-400 border-t uppercase font-cabin font-medium text-fontColor hover:bg-orange-400 ease-in-out duration-200'>
                        <Link className='cursor-pointer' title='Home' to='home' smooth={true} spy={true} >Home</Link>
                    </li>

                    <li className='px-8 py-4 border-b border-gray-400 uppercase font-cabin font-medium text-fontColor hover:bg-orange-400 ease-in-out duration-200'>
                        <Link className='cursor-pointer' title='Productos' to='productos' smooth={true} spy={true} >Productos</Link>
                    </li>

                    <li className='px-8 py-4 border-b border-gray-400 uppercase font-cabin font-medium text-fontColor hover:bg-orange-400 ease-in-out duration-200'>
                        <Link className='cursor-pointer' title='Sucursales' to='sucursales' smooth={true} spy={true} >Sucursales</Link>
                    </li>

                    <li className='px-8 py-4 border-b border-gray-400 uppercase font-cabin font-medium text-fontColor hover:bg-orange-400 ease-in-out duration-200'>
                        <Link className='cursor-pointer' title='Contacto' to='contacto' smooth={true} spy={true} >Contacto</Link>
                    </li>
                </ul>
            </nav>

        </div>

    </div>
  )
}

export default Navbar