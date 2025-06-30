import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const about = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT '} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col gap-16 md:flex-row'>
        <img className='w-full md:max-w-[550px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore at maxime facilis officia voluptatem non natus ipsum suscipit odit, aut, quis deleniti? Necessitatibus sapiente pariatur, ad soluta accusantium numquam illo. Et possimus laboriosam exercitationem reprehenderit amet saepe quos fugiat quo nobis, quod, illum doloribus. Similique fuga ad repudiandae impedit quaerat.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, officia quia eos unde iste laborum temporibus commodi consectetur nihil ipsa modi qui doloribus, nulla ad minus repellat necessitatibus obcaecati nesciunt!</p>
        <b className='text-gray-800 '>Our Mission</b>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quam saepe sed placeat labore. Dolorum facilis est aliquid, officiis quia rem cupiditate assumenda magni necessitatibus optio dicta tempora voluptate nam vitae soluta libero eum doloremque. Quo repellat est veniam eos dolores impedit, magnam alias ullam. Fugiat, repellat reiciendis! Corrupti, iure!</p>
        </div>
      </div>
      <div className='text-2xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 py-8 md:px-16 py-8 sm:py-20 flex flex-col ga'> 
          <b className='text-center mb-5  text-gray-700'>Quality Assurance</b>
          <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates molestiae quos, vitae quas asperiores repellendus et impedit </p>
        </div>
        <div className='border px-10 py-8 md:px-16 py-8 sm:py-20 flex flex-col ga'> 
          <b className='text-center mb-5  text-gray-700'>Convenience</b>
          <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates molestiae quos, vitae quas asperiores repellendus et impedit </p>
        </div>
        <div className='border px-10 py-8 md:px-16 py-8 sm:py-20 flex flex-col ga'> 
          <b className='text-center mb-5  text-gray-700'>Exceptional Customer</b>
          <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates molestiae quos, vitae quas asperiores repellendus et impedit </p>
        </div>
      </div>
    </div>
  )
}

export default about