import React from 'react'
import './about.css'
import aboutimg from '../assets/img1 (35).jpg'
import { styles } from '../styles'

const About = () => {
  return (
    <>
    <section className='flex fllex-col justify-center items-center h-60 about'>
        <h1 className={`${styles.heroHeadText}`}>About <span className='text-[#915eff]'>Us</span></h1>
     
    </section>


    <div className='flex flex-wrap justify-between items-center'>
      <div>
        <img className='w-full rounded-md' src={aboutimg} alt="" />
      </div>
      <div className='w-full md:w-1/2 flex flex-col gap-6 p-8'>
        <h3 className='text-2xl font-bold text-orange-700'>What Set Us <span className='text-white'>Apart</span></h3>
        <p>At OnyEze One, we're passionate about czrafting exceptional furniture pieces that bring people together. Our journey began with a simple yet ambitious goal: to create furniture that not only beautifies spaces but also tells a story.
        </p>
        <b>Our Aim:</b>
        <p>To design and build furniture that exceeds our customers' expectations in terms of quality, functionality, and aesthetic appeal. We strive to push the boundaries of innovation, sustainability, and craftsmanship in every piece we create.
        </p>
        <b>Our Vision:</b>
        <p>To become the go-to destination for discerning individuals and businesses seeking unique, handcrafted furniture that reflects their personality and style. We envision a future where our furniture pieces are not just mere objects, but rather catalysts for connection, conversation, and community.
        </p>
        <b>Our Values:  </b>
        <p>- Quality: We're committed to using only the finest materials and techniques to ensure our furniture stands the test of time.
- Sustainability: We believe in responsible forestry practices and strive to minimize our environmental footprint.
- Craftsmanship: We take pride in our attention to detail and dedication to traditional craftsmanship.
- Customer Delight: We're passionate about delivering exceptional customer experiences that exceed expectations.
<br />
<br />
Join us on our journey as we strive to create furniture that inspires connection, sparks conversation, and brings people together."</p>
      </div>
      </div>
    </>
    
  )
}

export default About