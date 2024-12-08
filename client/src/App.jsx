import react from 'react'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Works from './pages/Works'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import { FaWhatsapp } from 'react-icons/fa6'


function App() {
  

  return (
    <>
    <NavBar />
     <main className='mx-2'>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/works' element={<Works/>}/>
  <Route path='/contact' element={<Contact/>}/>
</Routes>
     </main>
     <hr className='pb-4' />
       <Footer/>
       <a href="https://wa.me/2349072788526">

       <FaWhatsapp className='text-4xl bg-green-600 rounded-md bottom-28 fixed right-8'/>
       </a>
    </>
  )
}

export default App
