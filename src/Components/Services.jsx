import React from 'react'
import { service } from '../assets/data/data'
import Tilt from 'react-tilt'

const Services = () => {
  return (
    <>
      <div className=' p-12 '>
        <h1 className=' text-[black] text-center font-bold text-[3rem] ' >
          Our Amazing Services
        </h1>
        <p className=' 
        text-center text-[15px] w-full flex justify-center items-center 
        px-0  sm:px-[200px] ' >

          We offer our services in different domains and
          our expertice to manage welle your projects
          lorem ipsum dolor site amet lorem is an enterprise 
          that does in programming lorem i the best
        </p>

        <div className=' mt-20 flex flex-wrap gap-10 justify-center items-center ' >

          {service.map((service, index) => (


            <Tilt >
              <div className='w-full p-[.75rem] py-[15px] border-[2px] rounded-[5px] sm:w-[300px]
               border-[#d9e9e9] shadow-[0px_0px_16px_5px_#00000024] '>

                <div className='p-[40px] h-full items-center text-center content-center '>
                  <img className='h-[120px] w-full text-center ' src={service.image} />
                  <p className=' font-bold text-[1.5rem] my-[10px] '> {service.tittle} </p>
                  <p className='text-[15px] text-[#1a1a1a] '> {service.description} </p>
                </div>
              </div>

            </Tilt>

          ))}

        </div>

      </div>

    </>
  )
}

export default Services