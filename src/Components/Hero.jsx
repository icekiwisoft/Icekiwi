import React from 'react'

import { FaGithub } from 'react-icons/fa'
import Navbar from './Navbar';




import logo from '../assets/logo1.png'
const Hero = () => {
  return (
    <>


      <header className=' flex justify-center  min-h-screen min-w-screen md:p-8 '>

        <div className=' flex justify-center items-center flex-col  px-[150px] ' >
          <h1 className=' text-[#ffffff] font-second text-[3.5rem] text-center '>
            Run over our services and grate proposal for everyone
          </h1>
          <p className='text-[#d1c8c8] my-3 ' >
            Icekiwi is an elite programming enterprise
            bringing digital fantasies to life
          </p>
          <p className='font-bold text-[#d1c8c8] ' >
            - We're revolutionizing the tech industry.
          </p>

          <div className=' flex gap-5 pt-[4rem] '>
            <button className='herobutton' >
              <span>Contact us</span>
            </button>

            <button className='herobutton flex justify-center items-center gap-3 ' >
              <FaGithub className='text-[20px]' /><span className=' flex ' >  Follow us</span>
            </button>
          </div>

        </div>

      </header>

    </>

  )
}

export default Hero