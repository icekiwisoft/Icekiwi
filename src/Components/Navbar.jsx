import React from 'react'
import Moon from '@iconscout/react-unicons/icons/uil-brain'
import Logo from '../images/logo.png'


const Navbar = () => {
  return (
    <nav className="n-wrapper flex justify-between items-center   ">
      <div className="n-left flex items-center ">
        <span className='flex justify-between items-center '> <img alt='icekiwi' className='mx-2' src={Logo} width={32} height={32} /> Icekiwi </span>
      </div>

      <div className="n-right">
        <ul className=' flex gap-4 px-3 '>
          <li>About</li>
          <li>Our services</li>
          <li>Contact us</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar