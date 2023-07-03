import React from 'react'


import back from '../images/back2.png'
import Navbar from './Navbar';


const Hero = () => {
  return (
    <>
      <Navbar />

      <header className=' flex justify-center  min-h-screen min-w-screen md:pt-8 '>
        <div className=' flex justify-center items-center flex-col  px-[150px] ' >
          <h1 className=' text-[#ffffff] font-second text-[3.5rem] text-center '>
            Run over our services and grate proposal for clients
          </h1>
          <p className='text-[#d1c8c8]' >
            Icekiwi is an elite programming enterprise
            bringing digital fantasies to life
          </p>
          <p className='font-bold text-[#d1c8c8] ' >
           - We're revolutionizing the tech industry.
          </p>


        </div>
      </header>

    </>

  )
}

export default Hero