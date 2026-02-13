import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";

const Involve = () => {
  const Offer = [
    {
      image: "https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/home-06.jpg",
      topic: "The Special One",
      paragraph: "Join our non-profit organisation to help create a brighter future for those in need. Every donation counts towards making a difference in the lives of those less fortunate.",
      link: "Read More",
    },
    {
      image: "https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/home-07.jpg",
      topic: "A Better Education for Everyone",
      paragraph: "Our non-profit organisation is dedicated to improving access to education for all. With your support, we can help provide the resources and opportunities needed for success.",
      link: "Read More",
    },
  ];
  return (
    <div className='bg-black'>
      <div className=' pt-50 flex gap-20 justify-center '>
        <div className="max-w-130">
          <img className="rounded-xl w-full object-cover" loading="lazy" decoding="async" width="560" height="560" src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/home-05.jpg" alt=""/>
        </div>
        <div className='w-150'>
          <h3 className='uppercase text-white font-semibold leading-15'>
            Get Involved
          </h3>
          <h1 className='font-semibold  leading-13 text-5xl text-white'>
            Join our movement for change
          </h1>
          <p className='mt-7 text-white'>
            Join our non-profit organisation and be a part of our movement for positive change. We empower communities, support vulnerable individuals and strive towards building an equitable society. Together, we can create a better world. Join us now!
          </p>
          <p className='mt-8 text-white'>
            Become part of a transformative movement by supporting our non-profit organization. Together we can make lasting change.
          </p>
          <button className="mt-8 px-7 py-4 rounded-xl border border-white font-bold text-transparent transition-all duration-30                [-webkit-text-stroke:1px_white] hover:bg-white hover:text-black hover:[-webkit-text-stroke:0px]">
            Register Now
          </button>
        </div>
      </div>
      <div className="h-[1px] bg-white w-280 mt-20 mx-auto"></div>
      <div className='mx-auto text-center max-w-200  mt-25'>
        <h1 className='font-semibold  leading-13 text-5xl text-white'>
          Inspiring tales of transformation
        </h1>
        <p className='mt-7 text-gray-200'>  
          Get inspired by the remarkable stories of transformation through our non-profit organization. Join us in making a positive impact today.
        </p>
      </div>
      <div className='bg-white rounded-2xl mt-20 max-w-260 gap-10 divide-x justify-center mx-auto flex'>
        { Offer.map ((Offer, idx) => (
          <div key="idx" className='max-w-120 px-10 pb-10 '>
            <img src={Offer.image}
            alt={Offer.topic}
            className="w-full h-60 -mt-10 object-cover rounded-lg" />
            <h3 className='text-2xl mt-7 text-black font-semibold'>
                {Offer.topic}
            </h3>
            <p className='mt-3'>
              {Offer.paragraph}
            </p>
            <a href="" className='font-bold mt-4 items-center text-center flex gap-2 '>
              {Offer.link} <FaArrowCircleRight /> 
            </a>
          </div>
        ))}
      </div>
      <div  className='mx-auto text-center mt-15'>
        <h2 className='text-white text-xs uppercase leading-15'>
          Our Partners
        </h2>
        <div className='grid grid-cols-6 mt-0 pb-20 max-w-260 mx-auto'>
          <img src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/logo-01.svg" alt="" />
          <img src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/logo-02.svg" alt="" />
          <img src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/logo-03.svg" alt="" />
          <img src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/logo-04.svg" alt="" />
          <img src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/logo-05.svg" alt="" />
          <img src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/logo-06.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Involve