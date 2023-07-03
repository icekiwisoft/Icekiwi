import React from 'react'
import { service } from '../assets/data/data'
import Tilt from 'react-tilt'
import { styles } from "../styles.js";

const Services = () => {
  return (
    <>
      <div className=' p-12 '>
        <h1 className=' text-[black] font-bold text-[3rem] ' >
          Some Of Our Works
        </h1>

        <div className=' mt-20 flex flex-wrap gap-10 justify-center items-center ' >

          {service.map((service, index) => (


            <Tilt >
              <div className='w-[20vw] p-[.75rem] border-[2px] rounded-[5px] border-[#d9e9e9] shadow-[0px_0px_16px_5px_#00000024] '>
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