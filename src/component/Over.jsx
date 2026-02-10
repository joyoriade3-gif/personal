import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";

const Over = ({number, topic, paragraph, link}) => {
  return (
    <div className='p-8'>
      <h1 className='text-5xl text-gray-400 font-bold'>
        {number}
      </h1>
      <h3 className='text-2xl text-black font-semibold mt-2'>
          {topic}
      </h3>
      <p className='mt-1'>
        {paragraph}
      </p>
      <a href="" className='font-bold mt-2 items-center text-center flex gap-2 '>
        {link} <FaArrowCircleRight /> 
      </a>
    </div>
  )
}

export default Over