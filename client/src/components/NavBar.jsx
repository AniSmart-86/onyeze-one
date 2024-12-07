import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { styles } from '../styles'
import { FaBars, FaX } from 'react-icons/fa6'

// import { logo, menu, close } from '../assets'

const NavBar = () => {

  const [showMenu,setShowMenu] = useState(false)
  return (
    <>
    <header className={`${styles.paddingX} flex justify-between items-center fixed top-0 right-0 left-0 h-auto z-50 py-6 bg-white opacity-45 text-gray-900`}>
        <h1 className='text-xl font-semibold text-green-400'>Gbenga</h1>
        
<nav>

        <ul className='md:flex flex-row gap-4 hidden md:text-xl'>
            <NavLink className={`relative hover:text-orange-400 transition-all duration-700`} to="/">
            HOME
<hr className='border-none outline-none h-0.5 bg-orange-400 w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink className={`hover:text-orange-400 transition-all duration-700`} to="/about">ABOUT
<hr className='border-none outline-none h-0.5 bg-orange-400 w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink className={`hover:text-orange-400 transition-all duration-700`} to="/works">WORKS
<hr className='border-none outline-none h-0.5 bg-orange-400 w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink className={`hover:text-orange-400 transition-all duration-700`} to="/contact">CONTACT
<hr className='border-none outline-none h-0.5 bg-orange-400 w-3/5 m-auto hidden' />
            </NavLink>

               
   
        </ul>

        
        <FaBars onClick={()=>setShowMenu(true)} className='text-xl cursor-pointer md:hidden'/>
        <div className={` ${showMenu ? 'fixed w-72 h-1/2 transition-all duration-1000 ease-linear' : 'h-0 w-0 transition-all duration-1000 ease-linear'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-[#662be7] rounded-2xl text-white transition-all`}>
        <div className=' flex items-center justify-between px-5 py-6'>
                <img  className='w-8 cursor-pointer' src='' alt="" />
                    <FaX onClick={()=>setShowMenu(false)} className='size-7 w-3 cursor-pointer'/>
            </div>
          
        <ul className='flex flex-col justify-center items-start gap-4 text-md px-8'>
            <NavLink onClick={()=>{setShowMenu(false); scrollTo(0,0)}} className={`relative hover:text-orange-400 transition-all duration-700`} to="/">
            HOME
<hr className='border-none outline-none h-0.5 bg-orange-400 w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink onClick={()=>{setShowMenu(false); scrollTo(0,0)}} className={`hover:text-orange-400 transition-all duration-700`} to="/about">ABOUT
<hr className='border-none outline-none h-0.5 bg-orange-400 w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink onClick={()=>{setShowMenu(false); scrollTo(0,0)}} className={`hover:text-orange-400 transition-all duration-700`} to="/works">WORKS
<hr className='border-none outline-none h-0.5 bg-orange-400 w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink onClick={()=>{setShowMenu(false); scrollTo(0,0)}} className={`hover:text-orange-400 transition-all duration-700`} to="/contact">CONTACT
<hr className='border-none outline-none h-0.5 bg-orange-400 w-3/5 m-auto hidden' />
            </NavLink>

               
   
        </ul>
        </div>
</nav>
    </header>


    
    </>
  )
}

export default NavBar