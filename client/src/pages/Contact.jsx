import React, { useRef, useState } from 'react'
import { styles } from '../styles'
import { FaEnvelopeOpen, FaMapLocation, FaPhone } from 'react-icons/fa6'
import img2 from '../assets/image.png'
import emailjs from 'emailjs-com'


const Contact = () => {


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
    <>
    <section className='flex fllex-col justify-center items-center h-60 contact mt-10'>
    <h1 className={`${styles.heroHeadText}`}>Contact <span className='text-[#915eff]'>Us</span></h1>
 
</section>

<section className='mt-20 p-10 flex flex-col justify-center'>
  <div className="md:flex flex-col justify-center items-center pt-10 violet-gradient rounded-3xl">
    <h1 className={`${styles.sectionHeadText} text-center`}>Let's <span className='text-orange-600'>Connect</span></h1>
    <p className={`${styles.sectionSubText} text-center`}>Send a Message</p>

    <div className='flex flex-wrap justify-center items-center black-gradient rounded-3xl px-8 py-3 mt-5 md:gap-6 w-auto'>
      <div className='flex flex-col justify-center gap-8'>
        <p className='text-xs text-gray-400 text-start'>We’d love to hear from you! Whether you have questions, <br /> feedback, or need assistance, our team is here to help. <br /> Reach out to us via email or give us a call <br /> or fill out the contact form on our website. We’ll do our best <br/> to get back to you as quickly as possible. <br/> Your input is important to us, and we’re committed <br/> to providing you with the support you need. </p>
      
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
      <div className='mt-5'>
      <img className='rounded-full' src={img2} alt="" />
      </div>

      <div className=''>
      <form ref={form} onSubmit={sendEmail} className='flex flex-col items-center bg-white-100 text-black h-auto p-10 rounded-3xl' action="">

        <h2 className='font-bold text-xl py-1'>Send Us A Message</h2>
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
 </section>
  <div ><iframe width="100%" height="450" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=450&amp;hl=en&amp;q=4%20tomato%20market,%20opposite%20first%20bank,%20dei-dei,%20Abuja,%20FCT,%20Nigeria+(OnyEze%20One%20Furniture)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe></div>

    </>
  )
}

export default Contact