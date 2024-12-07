import React from 'react'
import { FaEnvelopeOpen, FaFacebook, FaInstagram, FaMapLocation, FaPhone, FaWhatsapp } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   <footer>
     <div className='md:flex flex-wrap justify-around items-center px-2'>
        <div className='flex flex-col gap-2 mb-4'>
            <h3 className='font-bold text-md text-orange-700'>OnyEze <span className='text-white-100'>One</span></h3>
            <p className='text-xs'>Your input is important to us, <br /> and we’re committed <br />
            to providing you with the support you need. <br />Connect with us on social media's.</p>
            <div className='flex gap-3 text-xl'>
            <a href="https://www.instagram.com/oyenzeonefurniture/profilecard/?igsh=ejIyaGhmOHJiampt">
            
            <FaInstagram/>
            </a>
            <a href="https://www.facebook.com/share/1AtfY1XCng/">
            <FaFacebook/>
            </a>
            <a href="https://wa.me/2349072788526">
            <FaWhatsapp/>
            </a>
            </div>
        </div>
        <div className='flex flex-col gap-2 mb-3'>
            <h5 className='font-medium text-md green-text-gradient'>Useful Links</h5>
            <Link className='text-sm hover:text-orange-600 transition-all duration-1000'>About Us</Link>
            <Link className='text-sm hover:text-orange-600 transition-all duration-1000'>CAC Certificate</Link>
            <Link className='text-sm hover:text-orange-600 transition-all duration-1000'>Legal Notice</Link>
        </div>
        <div className='flex flex-col gap-2 mb-3'>
            <h5 className='green-text-gradient text-md font-bold'>Support</h5>
            <Link className='text-sm hover:text-orange-600 transition-all duration-1000'>Help Center</Link>
            <Link className='text-sm hover:text-orange-600 transition-all duration-1000'>Contact Us</Link>
            <Link className='text-sm hover:text-orange-600 transition-all duration-1000'>FAQ</Link>
        </div>

        <div className='flex flex-col gap-4'>
            <h5 className='green-text-gradient text-md font-bold'>Contact Info</h5>
        <p className='text-xs text-gray-400'>Feel free to contact & reach us!! </p>
      
      <div className='flex justify-start items-center gap-3 '>
        <FaMapLocation className='bg-orange-700 rounded-full w-8 h-8 p-2 border-none' />
        <div>
        <p className='text-xs text-gray-200 md:text-md mb-1'>No 4 Tomato Market, Opposite First Bank, Dei-Dei.</p>
        <p className='text-xs text-gray-200 md:text-md'>Abuja, FCT, Nigeria.</p>
        </div>
      </div>
      <div className='flex justify-start items-center gap-3 '>
        <FaPhone className='bg-orange-700 rounded-full w-8 h-8 p-2 border-none' />
        <div>
        <p className='text-xs md:text-md mb-1'>(+234) 9072788526</p>
        <p className='text-xs md:text-md'>(+234) 8132678680</p>
  
  </div>  
    </div>
      <div className='flex justify-start items-center gap-3 '>
        <FaEnvelopeOpen className='bg-orange-700 rounded-3xl w-8 h-8 p-2 border-none' />
        <div>
        <p className='text-xs md:text-md text-gray-200 mb-1'>oyenzefurniture@gmail.com</p>
        <p className='text-xs md:text-md text-gray-200'>egbenga636@gmail.com</p>
        </div>
      </div>
      </div>
     </div>

     <p className='text-xs text-gray-400 text-center py-4'>&copy; copyright OnyEze One  {new Date().getFullYear()} | All rights reserved</p>
   </footer>
  )
}

export default Footer