import React from 'react'
import Moon from '@iconscout/react-unicons/icons/uil-brain'



const Navbar = () => {
  return (
   <div className="n-wrapper flex justify-between items-center m-5 mx-10 text-white ">
    <div className="n-left flex items-center ">
    <Moon size="50" color="#ffffff" />&nbsp;
      <span> | Icekiwi </span>
    </div>

    <div className="n-right">
      <ul className=' flex gap-4 px-3 '>
        <li>About</li>
        <li>Our services</li>
        <li>Contact us</li>
      </ul>
    </div>
   </div>
  )
}

export default Navbar