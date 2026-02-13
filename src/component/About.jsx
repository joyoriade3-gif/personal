import React from 'react'
import CountUp from "react-countup";


const About = () => {
  return (
    <div className='flex gap-20 justify-center mx-auto w-300 mt-60 pb-30'>
      <div className='w-100'>
        <h3 className='uppercase font-semibold leading-15'>
          About Us
        </h3>
        <h1 className='font-semibold  leading-13 text-5xl text-white'>
          Our journey of compassion and hope
        </h1>
        <p className='mt-7'>
          Join us on a journey towards compassion and hope. Through our non-profit organisation, we strive to make a positive impact on the world. Give back to your community and be a part of something greater than yourself.
        </p>
        <p className='mt-8  '>
          A transformational journey towards bringing hope and compassion to the world.
        </p>
        <button className='mt-8 px-7 py-4 rounded-xl border font-bold text-whte border-white hover:cursor-pointer hover:bg-black hover:border-0 hover:text-white '>
          Read More
        </button>
      </div>
      <div className='150 flex gap-5'>
        <div className=' flex flex-col gap-3 -mt-5'>
          <img  className='rounded-2xl h-78 w-75 shadow-2xl' src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/home-0001-274x300.jpg" alt="" />
          <img  className='rounded-2xl h-78 w-75 shadow-2xl' src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/home-03-300x240.jpg" alt="" />
        </div>
        <div className=' flex flex-col gap-3 mt-25'>
          <img  className='rounded-2xl h-70 w-80 shadow-2xl' src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/home-02-300x240.jpg" alt="" />
          <img  className='rounded-2xl h-70 w-80 shadow-2xl' src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/home-0004-274x300.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About