import React from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'

const placeorder = () => {
  return (
    <div className='flex flex-cols sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* left side  */}
       <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
        </div>
        <div  className='flex gap-3'>
        <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='First name' />
        <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Last name' />
        </div>

        <input type="email" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='E-mail' />
        <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Street' />
        
        <div  className='flex gap-3'>
        <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='City' />
        <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='State' />
        </div>

         <div  className='flex gap-3'>
        <input type="number" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Zip Code' />
        <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Country' />
        </div>
        <input type="number" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Phone' />
       </div>
       {/* right side of placeorder page */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80 '>
          <CartTotal/>
        </div>

        <div className='mt-12'>
          <Title  text1={'PAYMENT'} text2={'METHOD'}/>
        </div>
      </div>
    </div>
  )
}

export default placeorder