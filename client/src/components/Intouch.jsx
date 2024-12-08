import React, { useRef } from 'react'
import { FaEnvelopeOpen, FaMapLocation, FaPhone } from 'react-icons/fa6'
import img2 from '../assets/image.png'
import {styles} from '../styles'
import emailjs from 'emailjs-com'
import { useState } from 'react'

const Intouch = () => {



  const form = useRef();

  const [name, setName]= useState('');
  const [email, setEmail]= useState('');
  const [message, setMessage]= useState('');
  const [loading, setLoading] = useState(false);





const sendEmail = (e) => {
  e.preventDefault();
  setLoading(true);


  const serviceId = 'service_89jc2h2';
  const templateId = 'template_pt9jrp8';
  const publicKey = '_InuqoJJjOH4v0m39';

  emailjs
    .sendForm(
      serviceId,
      templateId,
      form.current,
      publicKey
    )
    .then(
      (result) => {
        alert("Message sent successfully!");
        console.log(result)
        setLoading(false);
        // form.current.reset();
        setEmail('');
        setName('')
        setMessage('');
      },
      (error) => {
        alert("Failed to send message.");
        console.log(error)
        setLoading(false);
      }
    );
};








  return (
 <div className='mt-20 p-10 flex flex-col justify-center'>
  <div className="flex flex-col justify-center items-center violet-gradient rounded-xl p-10">
    <h1 className={`${styles.sectionHeadText}`}>Let's <span className='text-orange-600'>Connect</span></h1>
    <p className={`${styles.sectionSubText}`}>Send a Message</p>

    <div className='flex flex-wrap justify-center items-center md:w-full black-gradient rounded-3xl p-10 mt-5 gap-2 md:gap-6'>
      <div className='flex flex-col justify-center gap-8'>
        <p className='text-xs text-gray-400'>We’d love to hear from you! Whether you have questions, <br /> feedback, or need assistance, our team is here to help. <br /> Reach out to us via email or give us a call <br /> or fill out the contact form on our website. We’ll do our best <br/> to get back to you as quickly as possible. <br/> Your input is important to us, and we’re committed <br/> to providing you with the support you need. </p>
      
      <div className='flex justify-center items-center gap-3 '>
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
      <div>
      <img className='rounded-full' src={img2} alt="" />
      </div>

      <div className=''>
      <form ref={form} onSubmit={sendEmail} className='flex flex-col items-center bg-white-100 text-black h-auto p-10 rounded-3xl' action="">

        <h2 className='font-bold text-2xl'>Get In Touch</h2>
        <p className='text-sm text-gray-400 mb-2'>What do you have for us today??</p>

        <input className='bg-transparent border border-spacing-10 border-green-500 outline-none p-2 md:w-full rounded-xl' type="text" name='user_name' placeholder='Name' required value={name} onChange={(e)=>setName(e.target.value)}/>
        <input  className='bg-transparent border border-spacing-10 border-green-500 outline-none p-2 md:w-full rounded-xl mt-4' type="email" name='user_email' placeholder='Email' required value={email}  onChange={(e)=>setEmail(e.target.value)}/>
        <textarea  className='bg-transparent border border-spacing-10 border-green-500 outline-none p-2 px-8 md:w-full mt-5 h-48 rounded-2xl' cols='20'  name="message" required placeholder='Enter message' value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>

        <button className='bg-orange-700 w-full py-3 my-5 rounded-full text-white-100' type='submit'>
          {loading ? 'Sending...' : 'Submit message'}
          </button>
      </form>
      </div>
    </div>


  </div>
 </div>
  )
}

export default Intouch