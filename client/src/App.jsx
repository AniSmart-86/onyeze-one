import react, { useEffect } from 'react'
import NavBar from './components/NavBar'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Works from './pages/Works'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import { FaWhatsapp } from 'react-icons/fa6'
import Admin from './pages/Admin'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Login from './pages/Login'

function App() {
 
 const Token = localStorage.getItem('token');

  return (
    <>

    <NavBar />
    <ToastContainer />
   
     <div className=''>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/works' element={<Works/>}/>
  <Route path='/contact' element={<Contact/>}/> 
    <Route path='/admin' element={<Admin/>}/>
  <Route path='/login' element={<Login/>}/>

</Routes>
{
  Token? '' : <div> <Footer />
      
     <hr className='pb-4' />
       <a href="https://wa.me/2349072788526">
       <FaWhatsapp className='text-4xl bg-green-600 rounded-md bottom-52 fixed right-8'/>
       </a> 
       </div>
}
     </div>
  
    </>
  )
}

export default App
