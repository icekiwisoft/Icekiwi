import React from 'react'

import vid from '../images/vsc.webm';

import Navbar from './Navbar';


const Hero = () => {
  return (

    <header className='min-h-screen md:px-body md:pt-8 '>


      <Navbar />
      <div className='header-content'>

        <div className=' part2 '>
          <h5 className=' pb-4 text-white' >Custom services</h5>
          <h1 className='headertext font-black text-6xl pb-4'> Run over our servicis and greate proposal for clients </h1>
          <h5 className='text-white'>Ask what you want and we will deliver it in time</h5>
          <div className='buttons '>
            <button href='' className=' ' >  Contact us </button>
            <button href='' className='cb'  >Donate</button>
          </div>

        </div>

        <div className='video-container'>
          <video src={vid} autoPlay muted loop />
        </div>

      </div>





    </header>
  )
}

export default Hero