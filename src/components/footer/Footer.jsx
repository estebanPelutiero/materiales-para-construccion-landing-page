import React from 'react'
import Logo from '../../assets/logos/logoHjr.png'
import { AiFillFacebook } from 'react-icons/ai'
import { Link } from 'react-scroll'

const Footer = () => {

  return (

    <div className='w-full h-auto bg-black'>

        <div className='flex flex-col lg:flex-row lg:justify-between items-center md:flex md:justify-between md:items-center w-[80vw] m-auto py-2'>

            <div className='flex justify-center py-2'>
                <Link title='Home' className='cursor-pointer' to='home' smooth={true} spy={true}>
                    <img className='rounded bg-orange-600 lg:w-full w-[80%] ' src={Logo} alt="/" />
                </Link>
            </div>

            <div className=' py-2'>
                <a title="Visitanos en Facebook!" href="https://www.facebook.com/hjrotondo/?locale=es_LA" target='_blank' rel='noopener noreferrer'><AiFillFacebook className='hover:fill-orange-500 ease-in-out duration-300' size={40} color='white' /></a>  
            </div>

            <div className='lg:pr-14 py-2'>
                <ul className='flex flex-col lg:items-start items-center'>
                    <li className='py-1'><Link className='px-2 cursor-pointer text-white font-cabin hover:text-orange-600 ease-in-out duration-200' title='Home' smooth={true} spy={true} to='home' >Home</Link></li>
                    <li className='py-1'><Link className='px-2 cursor-pointer text-white font-cabin hover:text-orange-600 ease-in-out duration-200' title='Productos' smooth={true} spy={true} to='productos' >Productos</Link></li>
                    <li className='py-1'><Link className='px-2 cursor-pointer text-white font-cabin hover:text-orange-600 ease-in-out duration-200' title='Sucursales' smooth={true} spy={true} to='sucursales' >Sucursales</Link></li>
                    <li className='py-1'><Link className='px-2 cursor-pointer text-white font-cabin hover:text-orange-600 ease-in-out duration-200' title='Contacto' smooth={true} spy={true} to='contacto' >Contacto</Link></li>
                </ul>
            </div>

        </div>

    </div>

  )

}

export default Footer