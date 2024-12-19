import React, { useEffect, useState } from 'react'
import { projects } from '../constants'
import { styles } from '../styles';
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion'
import { getProducts } from '../admin/AdimAPI';


const MyProject = () => {


const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
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
// console.log(combinedWorks)

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
        <div className='w-full flex flex-col justify-center items-center'>
            <h1 className={`${styles.sectionHeadText}`}>Latest <span className='text-[#915eff]'>Works</span></h1>
            <p className='text-sm md:text-xl text-gray-400 text-center'>Recent Innovations in Sustainable <br /> Furniture Design</p>
        

        <div className='w-full lg:grid grid-cols-4 px-0 gap-y-12'>
            {
                combinedWorks.slice(0,10).map((item)=>(
                  
                  
                  <div className='p-6 py-8 m-6 border black-gradient rounded-3xl shadow-[#915eff] shadow-xl z-10'  key={item.id}>
                      <motion.div
                      initial={{ opacity: 0, x: 50}}
                      whileInView={{ opacity: 1, x: 0,
                        scale: 1.1,
                       transition:{duration: 2} }}
                       className='flex flex-col md:py-8 justify-center items-center'
                      >
                        <img className='w-full md:w-2/3 rounded-xl' src={item.image} alt="" />
                        <img className='w-full md:w-2/3 rounded-xl' src={`https://onyeze-one-api.onrender.com/${item.image}`} alt="" />
                        <p className='font-semibold orange-text-gradient'>{item.title}</p>
                        <p className='text-xs md:px-4 green-text-gradient text-center'>{item.description}</p>
                  </motion.div>
                    </div>
              
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