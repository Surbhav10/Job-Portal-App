import React, { useContext, useRef } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../Context/AppContext'

export const Hero = () => {

  const { setsearchFilter, setIsSearched } = useContext(AppContext)

  const titleRef = useRef(null);
  const locationRef = useRef(null);

  const onSearch = () => {
    setsearchFilter({
      title: titleRef.current.value,
      location: locationRef.current.value,
    });
    setIsSearched(true);
  };

  return (
    <div>

      {/* HERO SECTION */}
      <div className='container 2xl:px-20 mx-auto my-10'>
        <div className='bg-gradient-to-r from-purple-800 to-purple-950 text-white p-10 rounded-2xl shadow-lg'>

          <h2 className='text-3xl font-bold mb-3'>
            Over 10,000+ Jobs to Apply
          </h2>

          <p className='text-sm mb-6 max-w-xl'>
            Your Next Big Career Move Starts Right Here – Explore the Best Job Opportunities and Take the First Step Toward Your Future!
          </p>

          {/* Inputs Section */}
          <div className='grid sm:grid-cols-3 gap-4'>

            {/* Job Search */}
            <div className='bg-white rounded-lg flex items-center gap-2 px-3 py-2'>
              <img src={assets.search_icon} alt="" className='w-5 h-5' />
              <input
                type="text"
                placeholder='Search for jobs'
                className='text-sm p-1 outline-none w-full text-black'
                ref={titleRef}
              />
            </div>

            {/* Location Search */}
            <div className='bg-white rounded-lg flex items-center gap-2 px-3 py-2'>
              <img src={assets.search_icon} alt="" className='w-5 h-5' />
              <input
                type="text"
                placeholder='Location'
                className='text-sm p-1 outline-none w-full text-black'
                ref={locationRef}
              />
            </div>

            {/* Search Button */}
            <button onClick={onSearch} className='bg-purple-600 hover:bg-purple-700 transition rounded-lg py-2 font-semibold'>
              Search
            </button>

          </div>
        </div>
      </div>

      {/* Trusted Logos */}
      <div className='border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md flex'>
        <div className='flex justify-center gap-10 lg:gap-16 flex-wrap'>
          <p className='font-medium'>Trusted by</p>
          <img className='h-6' src={assets.microsoft_logo} alt='' />
          <img className='h-6' src={assets.walmart_logo} alt='' />
          <img className='h-6' src={assets.accenture_logo} alt='' />
          <img className='h-6' src={assets.samsung_logo} alt='' />
          <img className='h-6' src={assets.amazon_logo} alt='' />
          <img className='h-6' src={assets.adobe_logo} alt='' />
        </div>
      </div>

    </div>
  )
}
