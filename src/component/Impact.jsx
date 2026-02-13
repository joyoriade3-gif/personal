import React from 'react'
import Counting from './Counting'

const Impact = () => {
  return (
    <section className='pt-40'>
      <div className='flex gap-9 justify-center items-end'>
        <div className='max-w-140'>
          <h3 className='uppercase font-semibold leading-15'>
            Our Impact
          </h3>
          <h1 className='font-semibold  leading-13 text-5xl text-black'>
            The impact we have made in our community
          </h1>
        </div>
        <div className='max-w-140'>
          <p>       
            We have made a significant impact in our community through our non-profit organization. By providing services and support to those in need, we have created a positive change. Our efforts have helped to improve the lives of many and we are committed to continuing to make a difference.
          </p>
        </div>
      </div>
      <div>
        <Counting/>
      </div>


      <div className='flex bg-gray-900 max-w-300 justify-center px-15 py-10 m-auto rounded-xl items-center gap-80 -mb-20 relative'>
        <div className='max-w-150'>
          <h2 className='text-4xl font-bold text-white'>
            We can create a better tomorrow
          </h2>
          <h3 className='text-white  text-xl mt-4'>
            Every dollar counts and helps us bring hope and essential resources to those in need.
          </h3>
        </div>
        <div className='max-w-100'>
          <button className='mt-4 bg-white text-black px-8 py-4 rounded-xl font-semibol hover:cursor-pointer transition" border border-transparent transition-all duration-300 hover:bg-transparent hover:text-white hover:border-white'>
            Donate Now
          </button>
        </div>
      </div>
    </section >
  )
}

export default Impact