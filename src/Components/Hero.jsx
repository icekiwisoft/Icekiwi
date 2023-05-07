import React from 'react'
import { motion } from "framer-motion";
import Tilt from "react-tilt";
import { fadeIn } from "../utils/motion";
import Github from '@iconscout/react-unicons/icons/uil-github'

import Logo from '../images/logo.png'
import vid from '../images/vsc.webm';
import Back from '../images/back.png'
import Navbar from './Navbar';


const Hero = ({ index }) => {
  return (

    <header>
      <video src={vid} autoPlay muted loop />

      <Navbar />
      <div className='header-content'>

        <div className=' part2 '>

          <h1 className='headertext'> Un over our servicis and greate proposal for clients </h1>

          <div className='buttons'>
            <button href='' className=' ' >  contact us </button>
            <button href='' className='cb'  >Donate</button>
          </div>

        </div>

      </div>





    </header>
  )
}

export default Hero