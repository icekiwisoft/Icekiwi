import React from 'react'
import back from '../images/back2.png'
const About = () => {
  return (
    <section className="flex justify-between items-center bg-white">
      <div className='content flex'>
        <div className='text'>
          <p className='text-first'>Introduction</p>
          <span className="text-second font-second  ">Overview</span>
          <p className='text-text'>
            we offer our services and design software that will help you achieve
            any of your goals, our primary goal is to digitize everything.
            we work in each of the following areas
          </p>

          <p className='flex text-text mt-8'>
            <span className='' >Want to join our service ?</span>
            <span className=' text-yellow  ' > &nbsp; Contact us</span>
          </p>
        </div>

        <img alt="ok" src={back} />
      </div>

    </section >

  )
}

export default About