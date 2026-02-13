import React from 'react'
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const foot = [
    {
      head: "About Us",
      first: "Our History",
      second: "What We Believe",
      third: "Our Programs",
      fourt: "Partners",
    },
    {
      head: "Ways To Give",
      first: "Planned Giving",
      second: "Brand Partnership",
      third: "Fundraise",
      fourt: "Legacy Giving",
    },
  ];
  return (
    <footer className='bg-white pt-15'>
        <div className='flex gap-35 justify-center'>
          <div className='max-w-60'>
            <img className='mb-5' src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/site-logo.svg" alt="" />
            <p className='text-base mb-1 text-gray-600'>
              The power of giving: Support a cause and make a difference through charity.
            </p>
          </div>
          { foot.map((foot, idx) => (
            <div key="idx" className='max-w-50'>
              <h2 className='text-2xl mb-5 font-bold'>
                {foot.head}
              </h2>
              <p className='text-base mb-1 hover:cursor-pointer text-gray-600'><a href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}>{foot.first}</a></p>
              <p className='text-base mb-1 hover:cursor-pointer text-gray-600'><a href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}>{foot.second}</a></p>
              <p className='text-base mb-1 hover:cursor-pointer text-gray-600'><a href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}>{foot.third}</a></p>
              <p className='text-base mb-1 hover:cursor-pointer text-gray-600'><a href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}>{foot.fourt}</a></p>
            </div>
          ))}
          <div className='max-w-60'>
            <h2 className='text-2xl mb-5 font-bold'>
              Contact Info
            </h2>
            <p className='text-base mb-1 text-gray-600'>
              1234 Thornridge Cir. Syracuse,Connecticut 56789 (406) 555-0121 mail@example.com
            </p>
          </div>
        </div>
        <div className="h-[1px] bg-black w-full mt-20 mx-auto"></div>
        <div className='flex justify-between items-center px-25 py-15'>
          <div>
            <p>&copy; {(new Date().getFullYear())}  Non-Profit Organization. All rights reserved.</p>
          </div>
          <div className='grid grid-cols-4 max-w-50 gap-7 text-xl'>
            <a href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}><FaFacebook /> </a>
            <a href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}><FaTwitter /></a>
              <a href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}><FaInstagram /></a>
              <a href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}><FaYoutube /></a>
          </div>
        </div>
    </footer>
  )
}

export default Footer