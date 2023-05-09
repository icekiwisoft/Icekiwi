import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import React from 'react'
import Logo from '../images/logo.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
  let Links = [
    { name: 'About', link: '/#about' },
    { name: 'Our services', link: '/#servicies' },
    { name: 'Contact us', link: '/#contact' },
    { name: 'meet the team', link: '/team' },
    { name: 'Home', link: '/' },
  ];

  let [open, setOpen ] = useState(false);

  return (

    <nav className="n-wrapper  md:flex md:justify-between md:items-center p-10  ">
      <div className="n-left flex items-center justify-between ">
        <span className='flex justify-between items-center cursor-pointer'>
          <img alt='icekiwi' className='mx-2' src={Logo} width={32} height={32} /> Icekiwi
        </span>

        <div onClick={() => setOpen(!nav)} className='cursor-pointer md:hidden block'>
          <AiOutlineMenu size={30} />
        </div>
      </div>



      <ul className=' block gap-4 px-3 md:flex md:item-center z-[10] md:z-auto  absolute
       md:bg-none bg-metal w-full left-0 md:w-auto md:static md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 
       opacity-0 top-[-400px] transition-all ease-in duration-500 '>
        {
          Links.map((link) => (
            <li className='text-white hover:text-blue1 cursor-pointer duration-2000 my-6 md:my-0'>
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))
        }
      </ul>
     
    </nav >


  )
}

export default Navbar