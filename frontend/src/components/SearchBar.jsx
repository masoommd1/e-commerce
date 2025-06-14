import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext)
  const [visible, setVisible] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname.includes('collection')){
      setVisible(true)
    } else {
      setVisible(false)
    }
  }, [location])

  return showSearch && visible ? (
    <div className='text-center text-gray-600 border-t border-b bg-slate-50 rounded'>
      <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 mx-3 my-5 rounded-full w-3/4 sm:w-1/2'>
        <input
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Search'
          className='flex-1 outline-none bg-inherit text-sm'
        />
        <img src={assets.search_icon} className='w-4' alt='' />
      </div>
      <img
        src={assets.cross_icon}
        className='inline w-4 cursor-pointer'
        onClick={() => setShowSearch(false)}
        alt=''
      />
    </div>
  ) : null
}

export default SearchBar
