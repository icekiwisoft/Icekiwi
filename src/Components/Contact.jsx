import { FaInstagram, FaFacebook, FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa'
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Component.css';



const Contact = () => {

    const form = useRef();

    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_t9xoqey', 'template_c8t2wnl', form.current, 'KJ144GW1N_Vq2H1hR')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    };





    return (
        <div className="contac-form">
            <div className="w-left">
                <div className="awasome">
                    <h2 className=' mb-10 text-[#66a6ff] ' >Get in touch </h2>
                    <h1 className=' font-medium text-5xl tracking-tighter leading-none mb-10 ' >
                        Any Request ? Contact Us!
                    </h1>
                    <p className='font-light text-part text-[#1e1e61] mb-10 '>
                        Don't hesitate to call us! If you
                        want to build your career in the
                        tech and other domains? Study with
                        premium courses and materials at IceKiwi.
                    </p>
                    <div className='sociallinks cslinks ' >
                        <a className='link-1' ><FaInstagram /></a>
                        <a className='link-2' ><FaFacebook /></a>
                        <a className='link-3' ><FaTwitter /></a>
                        <a className='link-4' href='https://github.com/icekiwisoft'><FaGithub /></a>
                    </div>
                </div>
            </div>

            <div className="c-right">
                <span className='text-[2rem] font-medium  '>Contact Us!</span>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='user_name' className='user' placeholder='Name' />
                    <input type="email" name='user_email' className='user' placeholder='Email' required />
                    <textarea name="message" placeholder="Message" className="user" required />

                    <button className='button' type='submit' >
                        <div class="svg-wrapper-1">
                            <div class="svg-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                                </svg>
                            </div>
                        </div>
                        <span>Send</span>
                    </button>
                    <span>{done && "Your request was send successfully!"}</span>
                </form>
            </div>


        </div>
    )
}

export default Contact