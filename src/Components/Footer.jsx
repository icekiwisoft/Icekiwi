import React from 'react'
import { FaInstagram, FaFacebook, FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa'
import brand from '../assets/brand.png'

const Footer = () => {
  return (

    <footer class="relative bottom-0 bg-[#fff]   pt-10 ">

      <div class="flex flex-wrap text-left  pb-10 lg:text-left">
        <div class="w-full lg:w-6/12 px-4">
          <img src={brand} width={150} />
          <h5 class="text-sm mt-4 mb-2">
            subcribe to our news letter and get all news
          </h5>
          <button className='button border '>
            subscribe
          </button>
          <div class="mt-6 lg:mb-0 mb-6">

          </div>
        </div>
        <div class="w-full lg:w-6/12 px-4">
          <div class="flex flex-wrap items-top ">
            <div class="w-full lg:w-4/12 px-4 ml-auto">
              <span class="block uppercase   text-sm mb-2 font-bold ">Useful Links</span>
              <ul class="list-unstyled">
                <li>
                  <a class="link" href="/">About Us</a>
                </li>
                <li>
                  <a class="link" href="/">Team</a>
                </li>
                <li>
                  <a class="link" href="/">Github</a>
                </li>
                <li>
                  <a class="link" href="/">Home</a>
                </li>
              </ul>
            </div>
            <div class="w-full lg:w-4/12 px-4">
              <span class="block uppercase   text-sm mb-2 font-bold "> Resources</span>
              <ul class="list-unstyled">
                <li>
                  <a class="link" href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">MIT License</a>
                </li>
                <li>
                  <a class="link" href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a class="link" href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</a>
                </li>
                <li>
                  <a class="link" href="https://creative-tim.com/contact-us?ref=njs-profile">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap items-center md:justify-between bg-[#ddd] justify-center">
        <div class="w-full px-4 mx-auto text-center">
          <div class="text-sm text-[#111] flex align-center  justify-between font-semibold py-5 w-full">
            <div className='flex cslinks ' >
              <a className=' link' ><FaInstagram /></a>
              <a className='link' ><FaFacebook /></a>
              <a className=' link' ><FaTwitter /></a>
              <a className='link ' href='https://github.com/icekiwisoft'><FaGithub /></a>
            </div>
            <span> ©icekiwi<a href="https://www.creative-tim.com/product/notus-js" class="text-blueGray-500 hover:text-gray-800" target="_blank" /> 2023</span>
          </div>
        </div>
      </div>

    </footer>

  )
}

export default Footer