import React from 'react'
import { FaInstagram, FaFacebook, FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa'


const Footer = () => {
  return (

    <footer class="relative bottom-0 bg-[#000]  pt-10 pb-6">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap text-left lg:text-left">
          <div class="w-full lg:w-6/12 px-4">

            <h5 class="text-lg mt-0 mb-2 text-white text-sm">
              Custom Marketing platforms, Web Design, App development and Content Creation.
            </h5>
            <div class="mt-6 lg:mb-0 mb-6">
              <div className='sociallinks cslinks ' >
                <a className='text-white hover:text-[#111] ' ><FaInstagram /></a>
                <a className='text-white hover:text-[#111] ' ><FaFacebook /></a>
                <a className='text-white hover:text-[#111] ' ><FaTwitter /></a>
                <a className='text-white hover:text-[#111] ' href='https://github.com/icekiwisoft'><FaGithub /></a>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="flex flex-wrap items-top ">
              <div class="w-full lg:w-4/12 px-4 ml-auto">
                <span class="block uppercase text-white  text-sm mb-2 font-bold ">Useful Links</span>
                <ul class="list-unstyled">
                  <li>
                    <a class="text-white  hover:text-[#111] pb-2 text-sm" href="/">About Us</a>
                  </li>
                  <li>
                    <a class="text-white  hover:text-[#111] pb-2 text-sm" href="/">Team</a>
                  </li>
                  <li>
                    <a class="text-white  hover:text-[#111] pb-2 text-sm" href="/">Github</a>
                  </li>
                  <li>
                    <a class="text-white  hover:text-[#111] pb-2 text-sm" href="/">Home</a>
                  </li>
                </ul>
              </div>
              <div class="w-full lg:w-4/12 px-4">
                <span class="block uppercase text-white  text-sm mb-2 font-bold "> Resources</span>
                <ul class="list-unstyled">
                  <li>
                    <a class="text-white  hover:text-[#111] pb-2 text-sm" href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">MIT License</a>
                  </li>
                  <li>
                    <a class="text-white  hover:text-[#111] pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a class="text-white  hover:text-[#111] pb-2 text-sm" href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</a>
                  </li>
                  <li>
                    <a class="text-white  hover:text-[#111] pb-2 text-sm" href="https://creative-tim.com/contact-us?ref=njs-profile">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr class="my-6 border-[#111]" />
        <div class="flex flex-wrap items-center md:justify-between justify-center">
          <div class="w-full md:w-4/12 px-4 mx-auto text-center">
            <div class="text-sm text-[#111] font-semibold py-1">
              Copyright © <span id="get-current-year">2023</span><a href="https://www.creative-tim.com/product/notus-js" class="text-blueGray-500 hover:text-gray-800" target="_blank" /> Powered by
              <a href='https://github.com/icekiwisoft' class="text-blueGray-500 hover:text-blueGray-800"> IceKiwi</a>.
            </div>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer