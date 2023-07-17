import React from 'react'

import { FaGithub } from 'react-icons/fa'
import Navbar from './Navbar';




import logo from '../assets/logo1.png'

import brand from '../assets/brand.png'
const Hero = () => {
  return (
    <>


      <header className='justify-center  h-screen min-h-screen min-w-screen  '>



        {/* <div className='navbar'>
          <nav>
            <div className='menu'>
              <a href='#'>home</a>
              <div className='submenu'>

              </div>
            </div>
            <div className='menu'>
              <a href='#'>store</a>
              <div className='submenu'>
              </div>
            </div>

          </nav>

          <input placeholder='rechercher quelque chose sur icekiwi' />
        </div> */}
        <div className=' flex justify-center h-full items-center flex-col  px-[150px]  pb-[150px]' style={{ zIndex: 0, position: "relative" }} >
          <h1 className=' text-[#222] font-second text-[3.5rem] font-black header-text text-center '>
            Run over our services and grate proposal for everyone
          </h1>
          <p className='text-[#111] my-3 ' >
            Icekiwi is an elite programming enterprise
            bringing digital fantasies to life
          </p>
          <p className='font-bold text-[#222] ' >
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