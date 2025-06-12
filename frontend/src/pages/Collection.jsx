import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const collection = () => {

  const {products} = useContext(ShopContext)
  const [showFilter,setShowFilter] = useState(false);
  const [filterProducts,setFilterProducts] = useState([]);
  const [category,setCategory] = useState([])
  const [subCategory,setSubCategory] = useState([])

  const toggleCategory = (e) => {
    if(category.includes(e.target.value)){
      setCategory(prev=> prev.filter(item => item !== e.target.value))
    }else{
      setCategory(prev =>[...prev,e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev=> prev.filter(item => item !== e.target.value)) 
    }else{
      setSubCategory(prev =>[...prev,e.target.value])
    }
  }

  const applyFilter = ()=>{
    let productsCopy = products.slice();
    if(category.length > 0){
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }
    if(subCategory.length > 0){
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy);
  }

  useEffect(()=>{
    setFilterProducts(products);
  },[])

  useEffect(()=>{
    applyFilter();
  },[category,subCategory])

  
  // use to display filter function
  // useEffect(()=>{
  //   console.log(subCategory);
  // },[subCategory])

  return (
    
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/* filter options  */}
      <div className='min-w-60'>
        <p className='my-2 text-xl flex items-center gap-2 cursor-pointer'>FILTERS
        <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} alt="" />
        </p>
        {/* category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' :'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory}/>Men
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory}/>Women
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory}/>Kids
              </p>
          </div>
        </div>
        {/* sub categorgy filter */}
        <div>
           <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' :'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>Type</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Top-wear'} onChange={toggleSubCategory}/>Top-wear
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Bottom-wear'} onChange={toggleSubCategory}/>Bottom-wear
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Winter-wear'} onChange={toggleSubCategory}/>Winter-wear
              </p>
          </div>
        </div>
        </div>
      </div>
      {/* right side of collecion page */}
      <div className='flex-1'>
        <div className='flex justify-between sm:text-2xl mb-4 text-base '>
          <Title text1={'ALL'} text2={'COLLECTION'}/>
          {/* product sort funtion */}
          <select className='border-2 border-gray-300 text-sm px-2'>
          <option value="Relavent">Sort by : Relavent</option>
          <option value="High-Low">Sort by : Low to High</option>
          <option value="Low-High">Sort by : High to Low</option>
          </select>
        </div>
        {/* mapping products to collection page */}
        <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item,index)=>(
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default collection