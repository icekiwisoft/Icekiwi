import React from 'react'
import jobit from '../assets/jobit.png'


const About = () => {
  return (

    <section className="about p-[1.5rem] sm:p-[4rem] md:flex m-auto ">
      <div className=' md:mr-16 ' >

        <div className='w-full'>
          <div >
            <p className='sm:text-[18px] text-[14px] text-[#148dff] font-light uppercase tracking-wider'>About Us</p>
            <h2 className='text-[#000000]  md:text-[1.6rem] font-semibold sm:text-[1.6rem] xs:text-[1.5rem] text-[1.4rem]'>We follow you.</h2>
          </div>

          <p className='mt-3 text-part text-justify text-[#0e0e29] font-light max-w-[30rem] leading-[30px]'>
            We are skilled software developers with experience in
            programing languages like Python, Java, C++, C#
            JavaScript and expertise in frameworks like React, Node.js,
            Django.... We deliver quick sevices and collaborate closely with
            clients to create efficient, scalable, and user-friendly
            solutions that solve real-world problems.
          </p>
        </div>

        <div className='flex'>
          <button className='button bg-primary text-white mt-8 '>
            view the team
          </button>

          <button className='bg-tertiary button text-white ml-2   mt-8 '>
            our app
          </button>
        </div>

      </div>



      <div className=' flex flex-wrap gap-7 rounded-2xl card ' >

        <div className='bg-[#fff] p-3  sm:w-[500px] w-full rounded-2xl'>
          <div className='relative w-full h-[200px]'>
            <img
              src={jobit}
              alt='image'
              className='w-full h-full object-cover rounded-2xl'
            />
          </div>

          <div className='mt-5'>
            <h3 className='font-bold text-[24px] text-[#222]'>Job IT</h3>
            <p className='mt-2 text-[#111] text-[14px]'>
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