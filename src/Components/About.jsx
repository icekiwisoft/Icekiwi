import React from 'react'
import back from '../images/back2.png'
const About = () => {
  return (
    <section className="about">
      <div className='content'>
        <div className='text'>
          <span className="title font-bold">About us</span>
          <p>we offer our services and design software that will help you achieve any of your goals, our primary goal is to digitize everything.
            we work in each of the following areas</p>
        </div>
        <img alt="ok" src={back} />
      </div>
      {/* <div className='activities' >
        <a href='#'>web development</a>
        <a href='#'>AI development</a>
        <a href='#'>Game development</a>
        <a href='#'>app development</a>
        <a href='#'>desktop development</a>

      </div> */}
    </section >

  )
}

export default About