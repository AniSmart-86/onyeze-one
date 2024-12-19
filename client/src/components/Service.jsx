import React from 'react'
import { services } from '../constants'
import { styles } from '../styles'
import img1 from '../assets/El rehab extention.jpg'
import {FaPhone } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'


const Service = () => {
    
    const navigate = useNavigate();

  return (
  <section className='m-10'>
    <div className='lg:flex '>
        {/* left side */}
        
        <div className="lg:w-2/3 md:px-14">
            <h1 className={`${styles.sectionHeadText}`}>Services <span className='text-orange-800'>we Can Help You with!</span> </h1>
            <p className={`${styles.sectionSubText} my-3 text-xs md:text-md`}>Top-notch designs, and dedication to user experience set us apart. With OnyEze One, your home is in experts hands </p>
       
       <div className='flex items-center justify-center'>
        <img className='w-full rounded' src={img1} alt="" />
       
        {/* <div className="flex flex-col justify-center items-center mt-5 ">
  <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
  <div className='w-40 sm:h-80 h-1 violet-gradient'/>
</div> */}

       </div>
        </div>

        {/* RIGHT SIDE */}
        <div className='lg:w-2/3 lg:grid grid-cols-2 rounded-2xl black-gradient py-3 px-2 place-items-center'>
            {
                services.slice(0,6).map((item, index)=>(
                    <div className='' key={index}>

                    <div className='flex flex-col justify-center items-center border rounded-2xl p-8 m-4'>
                        <img className='w-12 h-1/2 bg-white-100 rounded-md' src={item.icon} alt="" />
                        <p className='text-sm orange-text-gradient leading-4 mt-4'>{item.title}</p>
                        <p className='text-xs text-gray-200 leading-4 mt-4'>{item.desc}</p>
                    </div>
                    </div>
                ))
            }
        <div className='my-8'>
            <button className='bg-orange-700 py-3 px-8 text-sm rounded-full'>MORE SERVICES</button>
        </div>
        </div>
    </div>
    <div className='flex flex-wrap justify-between items-center violet-gradient p-10 gap-8 rounded-md mt-10' >
<div>
    <h6 className='text-xs'>GET A FREE CONSULTATION</h6>
    <div className='flex flex-row items-center gap-2 '>
        <FaPhone className='bg-orange-700 rounded-full w-8 h-8 p-2 border-none' />
        <a className='text-xs' href="">(+234) 9072788526</a>
    </div>
</div>
<div className='hidden lg:block w-1 mx-1 h-24 bg-orange-700'  />
<p className="text-md">We Are Available 24/7 <br /> Get In Touch With Us Today</p>
<div className='hidden lg:block w-1 mx-1 h-24 bg-orange-700'  />

<button className='green-pink-gradient py-3 px-8 rounded-full text-xs md:text-sm' onClick={()=>{navigate('/contact'); scrollTo(0,0)}}>BOOK APPOINTMENT</button>
    </div>
  </section>
  )
}

export default Service