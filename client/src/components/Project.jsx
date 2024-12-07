import React, { useState } from 'react'
import { projects } from '../constants'
import { styles } from '../styles';
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion'


const MyProject = () => {


const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            navigate("/works")
           window.scrollTo(0,0)
        }, 2000);
      };

  return (
    <section className='mt-10'>
        <div className='flex flex-col justify-center items-center'>
            <h1 className={`${styles.sectionHeadText}`}>Latest <span className='text-[#915eff]'>Works</span></h1>
            <p className='font-semibold md:text-xl text-gray-400'>Recent Innovations in Sustainable Furniture Design</p>
        

        <div className='w-full md:grid grid-cols-4 px-10 gap-y-12 sm:px-0'>
            {
                projects.slice(0,10).map((item)=>(
                  <motion.div
                  initial={{ opacity: 0, x: 50}}
                  whileInView={{ opacity: 1, x: 0,
                    scale: 1.1,
                   transition:{duration: 2} }}
                   className='my-20'
                  >


                    <div className='flex flex-col justify-center items-center p-6 m-6 border black-gradient rounded-3xl shadow-[#915eff] shadow-xl z-10'>
                        <img className='w-1/2 md:w-2/3 rounded-xl' src={item.image} alt="" />
                        <p className='font-semibold orange-text-gradient'>{item.name}</p>
                        <p className='text-xs green-text-gradient'>{item.description}</p>
                    </div>
              
                  </motion.div>
                ))
            }
        </div>

        <button className='bg-orange-800 text-white px-12 py-2 rounded-full my-10 lg:mb-40 mt-20 hover:scale-x-105 transition-all duration-1000 ease-in-out border-none outline-none' onClick={handleClick}>
      {isLoading ? (
        <div className="flex items-center">
          <div className="spinner-border animate-spin inline-block w-5 h-5 border-2 rounded-full text-indigo-500" role="status">
            {/* <span className="sr-only">Loading...</span> */}
          </div>
          <span className="ml-2">Loading...</span>
        </div>
      ) : (
        <span>Load More</span>
      )}
    </button>
        </div>
    </section>
  )
}

export default MyProject