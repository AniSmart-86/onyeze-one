import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './components/Hero.css'
import './pages/about.css'
import './pages/contact.css'
import './pages/Admin.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <App />
  
  </BrowserRouter>,
 
)
