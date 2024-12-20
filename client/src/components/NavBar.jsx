import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { styles } from '../styles'
import { FaBars, FaX } from 'react-icons/fa6'
import logo from '../assets/onyeze-logo.jpg'

const NavBar = () => {

    const navigate = useNavigate();
    const Token = localStorage.getItem('token');
  const [showMenu,setShowMenu] = useState(false)
  return (
    <>
    <header className={`${styles.paddingX} flex justify-between items-center fixed top-0 right-0 left-0 h py-2 z-50 violet-gradient backdrop-blur-lg text-white rounded-b-xl`}>
        <div className='flex justify-center items-center'>
    {
        !Token ? ( <span className='flex justify-center items-center'> <img onClick={()=>{navigate("/"); scrollTo(0,0)}} className='w-12 rounded-t-full h-11' src={logo} alt="Onyeze logo" />  <h1 className='text-xs mx-1 font-medium font-mono'>
            OnyEze
     <span className='text-orange-600'>Furniture</span>   
        </h1> </span>)
        : <p className='text-center font-medium'>Welcome! <span className='text-orange-600'>OnyEze</span></p>
        
    }
        
        </div>
<nav className='-translate-x-1/2 -translate-y-1/2'>

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
        

<FaBars onClick={()=>setShowMenu(true)} className=' cursor-pointer text-white size-6 md:hidden'/>
    </header>

    <div className={`${showMenu ? 'fixed opacity-100 w-72 h-1/2' : 'opacity-0 h-0 w-0 translate-y-80'} md:hidden right-0 top-10 bottom-0 z-20 green-pink-gradient rounded-2xl text-white transition-all duration-1000 ease-in-out`}>
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