import React from 'react'
import { styles } from '../styles'
import { projects } from '../constants'


const Works = () => {
  return (
    <>
    <section className='flex fllex-col justify-center items-center h-60 about'>
        
  
    </section>
    <div className='flex flex-col justify-center items-center mt-10'>
            <h1 className={`${styles.sectionHeadText}`}>Explore <span className='text-[#915eff]'>Our Works</span></h1>
            <p className='font-semibold md:text-xl text-gray-400'>Recent Innovations in Sustainable Furniture Design</p>
        

        <div className='w-full md:grid grid-cols-4 px-10 gap-y-12 sm:px-0'>
            {
                projects.map((item)=>(
                    <div className='flex flex-col justify-center items-center p-6 m-6 border black-gradient rounded-3xl shadow-[#915eff] shadow-xl z-10'>
                        <img className='w-1/2 md:w-2/3 rounded-xl' src={item.image} alt="" />
                        <p className='font-semibold orange-text-gradient'>{item.name}</p>
                        <p className='text-xs green-text-gradient'>{item.description}</p>
                    </div>
                ))
            }
        </div>
            </div>
    
    </>
  )
}

export default Works