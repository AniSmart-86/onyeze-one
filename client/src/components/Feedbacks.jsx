import React from 'react'
import { testimonials } from '../constants'
import { styles } from '../styles'


const Feedbacks = () => {


  return (
 <section>
  <div className="flex flex-col justify-center items-center">
    <h1 className={`${styles.sectionHeadText}`}>Customer's <span className='text-[#915eff]'>Review</span> </h1>
    <div className='w-3/5 flex flex-row justify-center items-center overflow-hidden mt-14'>
      {
        testimonials.map((item)=>(
          <div className='flex flex-col justify-center p-6 items-center black-gradient mx-8 border w-1/2 rounded-2xl'>
            <img className='w-1/3 rounded-full' src={item.image} alt="" />
            <p className='font-semibold text-md green-text-gradient'>{item.name}</p>
            <p className='text-xs leading-5'>{item.testimonial}</p>
            
          </div>
        ))
      }
    </div>
  </div>
 </section>
  )
}

export default Feedbacks