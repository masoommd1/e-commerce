import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const contact = () => {
  return (
    <div>
      <div className='text-2xl border-t pt-10 text-center'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'> 
          <img src={assets.contact_img} className='w-full md:w-[500px]' alt="" />
          <div className='flex flex-col justify-center  items-start gap-6'>
            <p className='font-semibold text-xl text-gray-600'>Our Store</p>
            <p className='text-gray-500'> 44605 Adwait Marg <br /> Bagbazaar Kathmandu, Nepal</p>
            <p className='text-gray-500'>Tel: +977-9805375563 <br />Email: rizmasoom786@gmail.com</p>
            <p className='text-gray-600 text-xl font-semibold'>Careers at Forever</p>
            <p className='text-gray-500'>Learn more about our Teams and job openings.</p>
            <button className='py-3 px-5 border border-gray-700 hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
          </div>
      </div>
    </div>
  )
}

export default contact