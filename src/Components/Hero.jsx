import React from 'react'
import { motion } from "framer-motion";
import Tilt from "react-tilt";
import { fadeIn} from "../utils/motion";
import Github from '@iconscout/react-unicons/icons/uil-github'
import Moon from '@iconscout/react-unicons/icons/uil-brain'


const Hero = ({ index }) => {
  return (

    <div className='flex flex-col items-center  h-[80vh] '>
      <Tilt className=' ' >
        <motion.div
          variants={fadeIn("right", "spring", index * 0.5, 0.75)}
          className='green-pink-gradient p-[1px] rounded-[20px] text-white shadow-card flex flex-col mt-5
          items-center w-[70vw] h-[70vh]'
        >
          <Moon className='shape-shadow' size="240" color="#61DAFB" />
          <div>
            <span className=' text-[2rem] '> Wellcomme to </span>
            <span className=' text-[2rem] text-[#d400ff]'> Icekiwi  </span>
          </div>
          <span className=''> Un over our servicis and greate proposal for clients </span>

          <div className='  sm:m-[20px] mt-8 flex gap-5 font-bold '>

            <button href='' className='button h-button flex gap-2' > <Github /> Join us </button>
            <button href='' className='button h-button' > Contact us</button>
          </div>
        </motion.div>
      </Tilt>

    </div>
  )
}

export default Hero