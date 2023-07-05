import React from 'react'
import jobit from '../assets/jobit.png'
import { styles } from "../styles.js";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion.js";
import { FaInstagram, FaFacebook, FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa'

const About = () => {
  return (

    <section className="about p-[1.5rem] sm:p-[4rem] md:flex m-auto ">
      <div className=' md:mr-9 ' >
        <div >
          <p className='sm:text-[18px] text-[14px] text-[#27589e] font-semibold uppercase tracking-wider'>Our Works</p>
          <h2 className='text-[#000000] font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Overviev.</h2>
        </div>

        <div className='w-full flex'>
          <p className='mt-3 text-part text-[#0e0e29] font-light max-w-[40rem] leading-[30px]'>
            We are skilled software developers with experience in
            programing languages like Python, Java, C++, C#
            JavaScript and expertise in frameworks like React, Node.js,
            Django.... We deliver quick sevices and collaborate closely with
            clients to create efficient, scalable, and user-friendly
            solutions that solve real-world problems. Let's work
            together to bring your ideas to life!
          </p>
        </div>
      </div>



      <div className='mt-20 flex flex-wrap gap-7' >

        <div className='bg-tertiary p-3 rounded-2xl sm:w-[500px] w-full'>
          <div className='relative w-full h-[200px]'>
            <img
              src={jobit}
              alt='image'
              className='w-full h-full object-cover rounded-2xl'
            />
          </div>

          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>Job IT</h3>
            <p className='mt-2 text-secondary text-[14px]'>
              Web-based platform that allows
              users to search, book, and manage
              car rentals from various providers,
              providing a convenient and efficient
              solution for transportation needs.
            </p>
          </div>
        </div>
      </div>


    </section >

  )
}

export default About