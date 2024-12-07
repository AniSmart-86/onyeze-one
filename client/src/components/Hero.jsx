import React from 'react'
import { styles } from '../styles'
import './Hero.css'


const Hero = () => {
  return (
   <section className="relative w-full h-screen mx-auto mt-20 hero-section">
    <div className={`${styles.paddingX} inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
<div className="flex flex-col justify-center items-center mt-5 ">
  <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
  <div className='w-1 sm:h-80 h-40 violet-gradient'/>
</div>
<div>
  <h1 className={`${styles.heroHeadText} text-white `}>Welcome! to <span className='text-[#915eff]'>OnyeEze One Furniture & Interrior Decorator</span></h1>
<p className={`${styles.heroSubText} my-4 text-white-100`}> We especialize on modern furniture and combines traditional craftsmanship with cutting-edge technology to create unique, functional, and sustainable pieces that elevate any space.</p>
<div className='flex flex-wrap justify-center items-center'>
<a className='bg-[#915eff] py-3 px-10 rounded-full m-4 text-sm' href="">VIEW CERTIFICATE</a>
<a className='bg-white-100 text-black-200 py-3 px-12 rounded-full text-sm' href="mailto:oyenzefurniture@gmail.com">HIRE US NOW</a>
</div>
</div>
    </div>
   </section>
  )
}

export default Hero