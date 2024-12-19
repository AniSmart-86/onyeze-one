import React, { useEffect, useState } from 'react'
import { styles } from '../styles'
import { projects } from '../constants'
import { motion } from 'framer-motion'
import { getProducts } from '../admin/AdimAPI'


const Works = () => {
  const [works, setWorks] = useState([]);

  useEffect(()=>{
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        // console.log(data.Allworks)
        setWorks(data.Allworks);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
  fetchProducts();
  },[])
  
      const combinedWorks = works.concat(projects);
  return (
    <>
    <section className='flex flex-col justify-center items-center h-60 about'>
        
  
    </section>
    <div className='flex flex-col justify-center items-center mt-10'>
            <h1 className={`${styles.sectionHeadText}`}>Explore <span className='text-[#915eff]'>Our Works</span></h1>
            <p className='text-center md:text-xl text-gray-400'>Recent Innovations in Sustainable <br /> Furniture Design</p>
        

        <div className='w-full md:grid grid-cols-4 px-0 gap-y-12 sm:px-0'>
            {
                combinedWorks.map((item)=>(
                    
                    <div className='py-3 m-6 border black-gradient rounded-3xl shadow-[#915eff] shadow-xl z-10'>
                        <motion.div
                        initial={{ opacity: 0, x: 50}}
                        whileInView={{ opacity: 1, x: 0,
                          scale: 1.1,
                         transition:{duration: 2} }}
                         key={item.id}
                         className='flex flex-col justify-center items-center p-6'
                        >
                        <img className='w-full md:w-2/3 rounded-xl' src={item.image} alt="" />
                        <img className='w-full md:w-2/3 rounded-xl' src={`http://localhost:3000/${item.image}`} alt="" />
                        <p className='font-semibold orange-text-gradient'>{item.title}</p>
                        <p className='text-xs green-text-gradient'>{item.description}</p>
                    </motion.div>
                    </div>
                ))
            }
        </div>
            </div>
    
    </>
  )
}

export default Works