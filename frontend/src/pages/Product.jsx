import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets, products } from '../assets/assets';

const Product = () => {

  const {productId} = useParams();
  const {product, currency} = useContext(ShopContext);
  const [productData,setProductData] = useState(false);
  const [image, setImage] = useState(''); 
  const [size , setSize ] = useState('')
  // console.log(productId)

  const FetchProdcutData = async() => {
    
    products.map((item) => {
      if(item._id === productId){
        setProductData(item)
        setImage(item.image[0])
        console.log(item);
        return null ;
      }
    })
  }

  useEffect(() => {
    FetchProdcutData();
  },[productId,products])

  return productData ?(
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* product data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row' >
        {/* product images */}
        <div className='flex flex-1 flex-col-reverse sm:flex-row gap-3'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item,index) => (
                <img src={item} onClick={()=> setImage(item)} alt="" key={index} className='w-[24%] sm:w-full sm:mb-3
                flex shrink-0 cursor-pointer'/>
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img src={image} className='w-full h-auto'  alt="" />
          </div>
        </div>

        {/* ----------------- ----------------product info -------------------- */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'> 
          <img src={assets.star_icon} alt="" className="w-3.5" />
          <img src={assets.star_icon} alt="" className="w-3.5" />
          <img src={assets.star_icon} alt="" className="w-3.5" />
          <img src={assets.star_icon} alt="" className="w-3.5" />
          <img src={assets.star_dull_icon} alt="" className="w-3.5" />
          <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium '>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500  md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item,index) => (
                <button onClick={()=>setSize(item)} key={index} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`}>{item}</button>
              ))}
            </div>
          </div>

          <button className='px-8 py-3 bg-black text-sm active:bg-gray-700 text-white'>ADD TO CART</button>
          <hr  className='mt-8 sm:w-4/5'/>
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original Product</p>
            <p> Cash on Delivery</p>
            <p>Easy return and exchange policy in 7 days</p>
          </div>
        </div>
      </div>
      {/* ----------------------- description and review section----------------------- */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border py-3 px-5 text-sm'>Description</b>
          <p className='border py-3 px-5 text-sm'>Reviews(122 )</p>
        </div>
      </div>
    </div>
  ) : <div  className='opacity-0'></div>
}

export default Product