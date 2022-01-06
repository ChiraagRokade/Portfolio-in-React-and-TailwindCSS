import React from 'react'
import {  FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

function Footer() {
    return (
        <div>
            <div className='h-56 md:h-14'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#2a2a2a" fill-opacity="1" d="M0,224L0,128L288,128L288,160L576,160L576,192L864,192L864,64L1152,64L1152,96L1440,96L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z"></path>
            </svg>
            </div>
            <div className='bg-theme w-screen flex justify-center'>
                <div className='md:w-full w-1/2'>
                    <div className='font-pt p-10 text-center'>
                        <p className='text-white text-lg pb-5'>Design and Developed By</p>
                        <div className='h-1 border-2 border-white border-dashed'></div>
                        <div className='w-full flex justify-between text-white py-3'>
                            <a href='https://www.facebook.com/chiraag.rokade' target='_blank'><FaFacebook/></a>
                            <a href="https://www.instagram.com/chiraag38/" target='_blank'><FaInstagram/></a>
                            <a href="https://www.linkedin.com/in/chiraag-rokade-056b87226/" target='_blank'><FaLinkedin/></a>
                            <a href="https://github.com/ChiraagRokade" target='_blank'><FaGithub/></a>
                            <a href="https://www.youtube.com/ChiraagRokade" target='_blank'><FaYoutube/></a>
                        </div>
                        <div className='h-1 border-2 border-white border-dashed'></div>
                        <p className='text-white text-xl font-merr mt-5'>Chiraag Rokade</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
