import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const LatestCollection = () => {

    const { products } = useContext(ShopContext);

    // console.log(products);
  return (
    <div className='my-10'>
      <div className='text-3xl text-center py-8'>
        <Title text1={'LATEST'} text2={'COLLECTION'}/>
      </div>
    </div>
  )
}

export default LatestCollection