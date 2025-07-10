import React, { useContext } from 'react'
import { products } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const order = () => {
  
  const {backendUrl, token, currency} = useContext(ShopContext)

  const [orderData, setOrderData] = useState([])

  const loadOrderData = async () => {
    try {
      if(!token){
        return null;
      }

      const response = await axios.post(backendUrl + '/api/order/userorders',{}, {headers:{token}})

      console.log(response.data);
      
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    loadOrderData()
  },[token])
   
  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'}/>
      </div>
      <div>
         {
          orderData.map((item,index)=>(
            <div key={index} className='py-4 border-t border-b text-grey-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4 '>
              <div className='flex items-start text-sm  gap-6'>
                <img src={item.image[0]} className='w-16 sm:w-20' alt="" />
                <div>
                <p className='sm:text-base font-medium'>{item.name}</p> 
                <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                  <p className='text-lg'>{currency}{item.price}</p>
                  <p>Quantity: 1</p>
                  <p>Size: M </p>
                </div>
                <p className='mt-2'>Date: <span className='text-gray-400'>25/06/2025</span></p>
              </div>
            </div>
            <div className='md:w-1/2 flex justify-between'>
            <div className='flex items-center gap-2'>
            <p className='rounded-full bg-green-500 min-w-2 h-2 '></p>
            <p className='text-sm md:text-base '>Ready to Ship</p>
            </div>
            <button className='border py-2 px-4 text-sm rounded-sm'>Track Order</button>
            </div>
            </div> 
          ))
         }
      </div>
    </div>
  )
}

export default order