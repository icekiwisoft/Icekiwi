import React from 'react'
import { FaInstagram, FaFacebook, FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa'


const Footer = () => {
  return (

    <footer class="relative bottom-0 bg-[#050816] pt-8 pb-6 mt-8">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap text-left lg:text-left">
          <div class="w-full lg:w-6/12 px-4">
            <span className=' text-4xl text-[#add6f1] ' >&#10054;</span>
            <span class="text-3xl fonat-semibold text-yellow">Kiwi</span>

            <h5 class="text-lg mt-0 mb-2 text-white">
              Custom Marketing platforms, Web Design, App development and Content Creation.
            </h5>
            <div class="mt-6 lg:mb-0 mb-6">
              <div className='sociallinks cslinks ' >
                <a className='text-[#8d9091] hover:text-white ' ><FaInstagram /></a>
                <a className='text-[#8d9091] hover:text-white ' ><FaFacebook /></a>
                <a className='text-[#8d9091] hover:text-white ' ><FaTwitter /></a>
                <a className='text-[#8d9091] hover:text-white ' href='https://github.com/icekiwisoft'><FaGithub /></a>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="flex flex-wrap items-top mb-6">
              <div class="w-full lg:w-4/12 px-4 ml-auto">
                <span class="block uppercase text-white text-first font-bold mb-2">Useful Links</span>
                <ul class="list-unstyled">
                  <li>
                    <a class="text-[#8d9091] hover:text-white font-semibold block pb-2 text-sm" href="/">About Us</a>
                  </li>
                  <li>
                    <a class="text-[#8d9091] hover:text-white font-semibold block pb-2 text-sm" href="/">Team</a>
                  </li>
                  <li>
                    <a class="text-[#8d9091] hover:text-white font-semibold block pb-2 text-sm" href="/">Github</a>
                  </li>
                  <li>
                    <a class="text-[#8d9091] hover:text-white font-semibold block pb-2 text-sm" href="/">Home</a>
                  </li>
                </ul>
              </div>
              <div class="w-full lg:w-4/12 px-4">
                <span class="block uppercase text-white text-first font-bold mb-2"> Resources</span>
                <ul class="list-unstyled">
                  <li>
                    <a class="text-[#8d9091] hover:text-white font-semibold block pb-2 text-sm" href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">MIT License</a>
                  </li>
                  <li>
                    <a class="text-[#8d9091] hover:text-white font-semibold block pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a class="text-[#8d9091] hover:text-white font-semibold block pb-2 text-sm" href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</a>
                  </li>
                  <li>
                    <a class="text-[#8d9091] hover:text-white font-semibold block pb-2 text-sm" href="https://creative-tim.com/contact-us?ref=njs-profile">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr class="my-6 border-[gray]" />
        <div class="flex flex-wrap items-center md:justify-between justify-center">
          <div class="w-full md:w-4/12 px-4 mx-auto text-center">
            <div class="text-sm text-white font-semibold py-1">
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