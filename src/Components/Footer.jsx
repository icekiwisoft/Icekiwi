import UilGithub from '@iconscout/react-unicons/icons/uil-github'
import React from 'react'
import { FaInstagram, FaFacebook, FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>

      <div className='mainlinks'>
        <div className='sociallinks'>
          <a><FaInstagram /></a>
          <a><FaFacebook /></a>
          <a><FaTwitter /></a>
          <a><FaGithub /></a>
          <a><FaYoutube /></a>
        </div>
        <div className='links'>
          <ul>
            <li><a>follow us on github</a></li>
            <li><a>follow on instagram</a></li>
            <li><a>follow on facebook</a></li>
            <li><a>follow on twitter</a></li>

          </ul>
        </div>
        <div className='links'>
          <ul>
            <li><a>make a donation</a></li>
            <li><a>about us</a></li>
            <li><a>contact us</a></li>
            <li><a href='#'>go on artfana</a></li>
            <li><a href='#'>go on erquicks</a></li>
            <li><a href='#'>download yankee</a></li>

          </ul>
        </div>
      </div>

      <div class="hbspt-form" data-hs-forms-root="true">
        <form method="POST" accept-charset="UTF-8" enctype="multipart/form-data" novalidate="">

          <div className='newslettermain'>
            <input placeholder='subscribe to our newsletter and keep informed' class="newsletterinput" type='email' />
            <button className=''> keep me informed</button>
          </div>
        </form>
      </div>
    </footer>
  )
}

export default Footer