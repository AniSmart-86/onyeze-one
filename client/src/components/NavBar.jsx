import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { styles } from '../styles'
import { FaBars, FaX } from 'react-icons/fa6'
import logo from '../assets/onyeze-logo.jpg'

const NavBar = () => {

  const [showMenu,setShowMenu] = useState(false)
  return (
    <>
    <header className={`${styles.paddingX} flex justify-between items-center border-b-2 fixed top-0 right-0 left-0 h-auto py-2 z-50 black-gradient text-white`}>
        <img className='w-14 rounded-full' src={logo} alt="Onyeze logo" />
        
<nav className=''>

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
        
       
</nav>
        

<FaBars onClick={()=>setShowMenu(true)} className=' cursor-pointer text-white size-8 md:hidden'/>
    </header>

    <div className={`${showMenu ? 'fixed opacity-100 w-72 h-1/2' : 'opacity-0 h-0 w-0 translate-y-80'} md:hidden right-0 top-10 bottom-0 z-20 bg-[#662be7] rounded-2xl text-white transition-all duration-1000 ease-in-out`}>
        <div className=' flex items-center justify-between px-5 py-6 mt-8'>
                <img  className='w-8 cursor-pointer' src='' alt="" />
                    <FaX onClick={()=>setShowMenu(false)}
                    
                    className='size-10 w-5 cursor-pointer'/>
            </div>
          
        <ul className='flex flex-col justify-center items-start gap-4 text-md px-8'>
            <NavLink onClick={()=>{setShowMenu(false); scrollTo(0,0)}} className={`hover:text-orange-400 transition-all duration-700`} to="/">
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
    
    </>
  )
}

export default NavBar