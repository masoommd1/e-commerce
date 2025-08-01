import React from 'react'
import {assets} from '../assets/assets.js'


const NavBar = ({setToken}) => {
  return (
    <div className='flex items-center py-2  px-[4%] justify-between'>
        <img className='w-[max(20%,80px)]' src={assets.logo} alt="" />
        <button onClick={()=>setToken('')} className='bg-gray-800 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default NavBar