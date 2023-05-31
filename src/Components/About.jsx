import React from 'react'

const About = () => {
  return (
    <section className="about">
      <div className='content '>
        <div className='text'>
          <span className="title font-bold">About us</span>
          <p className='font-light '>we offer our services and design software that will help you achieve any of your goals, our primary goal is to digitize everything.
            we work in each of the following areas</p>
        </div>
        {/* <video src={vid} autoPlay muted loop /> */}
      </div>
      <div class="grid grid-cols-4 gap-5">

        <div class="block max-w-sm w-full ">

          <h5 class="mb-2 text-xl uppercase font-bold tracking-tight text-gray-900 dark:text-white">Ai development</h5>
          <p class="font-light text-base text-gray-700">gg</p>
        </div>

        <div class="block max-w-sm w-full ">

          <h5 class="mb-2 text-xl uppercase font-bold tracking-tight text-gray-900 dark:text-white">ux design</h5>
          <p class="font-light text-base text-gray-700">gg</p>
        </div>


        <div class="block max-w-sm w-full ">

          <h5 class="mb-2 text-xl uppercase font-bold tracking-tight text-gray-900 dark:text-white">web development</h5>
          <p class="font-light text-base text-gray-700">web development</p>
        </div>

        <div class="block max-w-sm w-full ">

          <h5 class="mb-2 text-xl uppercase font-bold tracking-tight text-gray-900 dark:text-white">system security</h5>
          <p class="font-light text-base text-gray-700">system security</p>
        </div>

      </div>

    </section >

  )
}

export default About