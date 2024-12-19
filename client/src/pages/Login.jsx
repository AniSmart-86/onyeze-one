import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
    const [token, setToken] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

useEffect(()=>{
if(token){
    navigate('/admin')
    toast.success('LoggedIn Successfully!');
}
},[token])

    const onSubmitHandler = async (e)=>{
        e.preventDefault();

        try {
            
            const {data} = await axios.post('http://localhost:3000/api/admin/login', {email, password});

           

            if(data.success){
                
                console.log(data.token)
                localStorage.setItem('token', data.token);
                setToken(data.token);
              
            }
            toast.error(data.message);

            if(!email || !password){
                toast.error('Email and Password required!')
            }

        } catch (error) {
            console.log(error)
        }
    }


    const HandleClick = ()=>{

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
           
          
        }
    

  return (



    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center justify-center bg-white-100'>
   <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-2xl'>
        <h4 className='text-center'>Welcome back!, please <br /> login to continue</h4>

   <div className='w-full'>
    <p>Email:</p>
    <input className='border border-zinc-300z outline-cyan-400 bg-gray-200 rounded w-full p-6 pt-1' type="email" onChange={(e)=>setEmail(e.target.value)} value={email} />
   </div>
   <div className='w-full'>
    <p>Password:</p>
    <input className='border border-zinc-300z outline-cyan-400 bg-gray-200 rounded w-full p-6 pt-1' type="text" onChange={(e)=>setPassword(e.target.value)} value={password} />
   </div>
   <button onClick={HandleClick} type='submit' className='bg-blue-600 text-white w-full py-2 rounded-md text-base hover:scale-x-105 transition-all duration-1000 ease-in-out'>{ loading ? 'Verifying...' : 'Login'}</button>

   </div>
   </form>
  )

}

export default Login