import React, { useState } from 'react'
import axios  from 'axios'
import { backendUrl } from '../App';
import { toast } from 'react-toastify';


const Login = ({setToken}) => {

    const [email,setEmail ] = useState('');
    const [password ,SetPassword] = useState('');
 

    const OnSubmutHandler = async (e) =>  {
        try {
            e.preventDefault(); // this for preventing page from reloading after clicking login form
            // console.log(email,password)
            const response = await axios.post(backendUrl + 'api/user/admin' , {email,password})
            // console.log(response);
            if(response.data.success){
                setToken(response.data.token)
            }else{
                toast.error(response.data.message)
            }
        } catch (error) {
         console.log(error);
         toast.error(error.message);
            
        }
    }

  return (
    <div className='min-h-screen w-full flex items-center justify-center'>
        <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
            <h1 className='text-2xl mb-4 font-bold'>Admin Panel</h1>
            <form onSubmit={OnSubmutHandler}>
                <div className='mb-3 min-w-72'>
                    <p className='text-gray-700 mb-2 text-sm font-medium' >Email Address</p>
                    <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' placeholder="Your@email.com" required/>
                </div>
                <div className='mb-3 min-w-72'>
                    <p className='text-gray-700 mb-2 text-sm font-medium' >Password</p>
                    <input onChange={(e)=>SetPassword(e.target.value)} value={password} type="Password" className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none'  placeholder="Enter your Password" required/>
                </div>
                <button type='submit' className='mt-2 py-2 px-4 rounded-md text-white w-full bg-black'>login</button>
            </form>
        </div>
    </div>
  )
}

export default Login