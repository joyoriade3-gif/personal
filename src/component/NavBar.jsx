import React from 'react'

const NavBar = () => {
  return (
    <nav className=' flex justify-between items-center py-5 px-40'>
      <div>
        <img src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/site-logo-white.svg" alt="" />
      </div>
      <div>
        <ul className='flex gap-10 font-semibold'>
          <li className=' uppercase text-white hover:cursor-pointer font-bold'>Home</li>
          <li className=' hover:text-white hover:cursor-pointer hover:uppercase hover:font-bold'>About</li>
          <li className=' hover:text-white hover:cursor-pointer hover:uppercase hover:font-bold'>Our Work</li>
          <li className=' hover:text-white hover:cursor-pointer hover:uppercase hover:font-bold'>Stories</li>
          <li className=' hover:text-white hover:cursor-pointer hover:uppercase hover:font-bold' >Contact</li>
          
        </ul>
      </div>
      <div>
        <button className='bg-white px-8 py-4 rounded-xl font-semibold hover:bg-black hover:text-white transition'>
          Donate
        </button>
      </div>
    </nav>
  )
}

export default NavBar