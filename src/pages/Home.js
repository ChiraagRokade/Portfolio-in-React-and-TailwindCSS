import React from 'react'
import { FaAndroid, FaBootstrap, FaCss3, FaHtml5, FaJava, FaJs, FaReact } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import Layout from '../compoents/Layout'
import AOS from 'aos';
AOS.init({
    duration:1000
});

function Home() {
    return (
        <Layout>
            <div>
                {/* Intro section */}
                <div className='h-screen bg-theme'>
                    <div className='grid md:grid-cols-1 grid-cols-2 h-screen items-center border-4 md:border-0 mx-10 z-10 bg-theme border-white transform rotate-12 md:rotate-0'>
                        <div className='h-1/2'>
                            <lottie-player 
                                src="https://assets9.lottiefiles.com/packages/lf20_kyu7xb1v.json"  
                                background="transparent"  
                                speed="1"  
                                loop 
                                autoplay>
                            </lottie-player>
                        </div>
                        <div className='font-merr font-bold text-white md:px-8'>
                            <h1 className='text-7xl md:text-5xl ml-2 md:ml-0' data-aos="fade-left">Hi, I'm <strong className='font-vus text-8xl text-cyan-300'>Chiraag</strong></h1>
                            <div className='h-1 w-7/12 ml-2 md:ml-0 border-2 border-white border-solid md:w-72' data-aos="fade-right"></div>
                            <h1 className='text-5xl md:text-3xl mt-2 ml-2 md:ml-0' data-aos="fade-left">Front-End <strong className='text-[#FFD700]'>Developer</strong></h1>
                        </div>
                    </div>
                </div>
                {/* Technology */}
                <div className='mt-16'>
                        <h2 className='text-4xl text-center font-merr font-bold text-blue-600 my-14'>Tecnologies I Use</h2>
                        <div className='grid md:grid-cols-1 grid-cols-4'>
                            <FaHtml5 size={180} color='orange' className='w-full text-center mt-20 animate-pulse'/>
                            <FaCss3 size={180} color='blue' className='w-full text-center mt-20 animate-pulse'/>
                            <FaJs size={180} color='green' className='w-full text-center mt-20 animate-bounce'/>
                            <FaBootstrap size={180} color='blue' className='w-full text-center mt-20 animate-pulse'/>
                            <SiTailwindcss size={180} color='cyan' className='w-full text-center mt-20 animate-bounce'/>
                            <FaReact size={180} color='cyan' className='w-full text-center mt-20 animate-bounce'/>
                            <FaJava size={180} color='orange' className='w-full text-center mt-20'/>
                            <FaAndroid size={180} color='green' className='w-full text-center mt-20'/>
                        </div>
                </div>
                {/* JavaScript Buff */}
                <div className='my-20'>
                    <div className='text-center h-52 bg-first'>
                        <h2 className='text-white font-merr text-4xl py-10'>Yes You Are Right... I am JavaScript Buff</h2>
                    </div>
                    <div className='md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-xl hover:bg-gray-600 hover:text-white'>
                        <div className='h-96'>
                        <lottie-player 
                            src="https://assets3.lottiefiles.com/packages/lf20_sSF6EG.json"  
                            background="transparent"  
                            speed="1"  
                            loop
                            autoplay>
                        </lottie-player>
                        </div>
                        <p className='my-5 text-2xl md:text-xl font-pt font-semibold text-center md:px-5 px-14 py-10'>JavaScript is one of the most top-ranking programming language because of its ubiquitous use on all platforms and mass adoption. <br /> Main Use Cases: Web Development.</p>
                    </div>
                </div>
                {/* Dev Stack Section */}
                <div className='my-20'>
                    <div className='text-center h-52 bg-red-500'>
                        <h2 className='text-white font-merr text-4xl py-10'>My DEV Stack</h2>
                    </div>
                    <div className='md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-xl hover:bg-gray-600 hover:text-white'>
                        <div className='h-96'>
                        <lottie-player 
                            src="https://assets8.lottiefiles.com/packages/lf20_aptscmnx.json"  
                            background="transparent"  
                            speed="1"  
                            loop
                            autoplay>
                        </lottie-player>
                        </div>
                        <div className='grid md:grid-cols-1 grid-cols-3 px-8 pb-3'>
                            <div className='md:text-center md:my-2'>
                                <h2 className='text-xl font-merr font-bold'>Front End</h2>
                                <hr />
                                <p className='font-pt font-semibold my-2'>HTML/CSS</p>
                                <p className='font-pt font-semibold my-2'>JavaScript</p>
                                <p className='font-pt font-semibold my-2'>React</p>
                                <p className='font-pt font-semibold my-2'>Angular</p>
                            </div>
                            <div className='text-center md:text-center md:my-2'>
                                <h2 className='text-xl font-merr font-bold'>UI/UX</h2>
                                <hr />
                                <p className='font-pt font-semibold my-2'>Bootstrap</p>
                                <p className='font-pt font-semibold my-2'>Tailwind</p>
                                <p className='font-pt font-semibold my-2'>Ant Design</p>
                                <p className='font-pt font-semibold my-2'>Material UI</p>
                            </div>
                            <div className='text-right md:text-center md:my-2'>
                                <h2 className='text-xl font-merr font-bold'>Back End/ DB</h2>
                                <hr />
                                <p className='font-pt font-semibold my-2'>PHP</p>
                                <p className='font-pt font-semibold my-2'>MySQL</p>
                                <p className='font-pt font-semibold my-2'>NodeJS</p>
                                <p className='font-pt font-semibold my-2'>MongoDB</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Dev Info */}
                <div>
                    <h2 className='text-center text-4xl text-gray-500 font-merr font-bold'>Who is Chiraag?</h2>
                    <div className='h-screen relative text-gray-700'>
                        <div className='h-full'>
                            <lottie-player 
                                src="https://assets5.lottiefiles.com/packages/lf20_gja1z1ru.json"  
                                background="transparent"  
                                speed="1"  
                                loop 
                                autoplay>
                            </lottie-player>
                        </div>
                        <div className='absolute inset-0 flex flex-col items-center justify-center'>
                            <h2 className='text-2xl font-merr font-bold'>Hi, Hello, Namaste...
                            <hr />
                            <pre className='text-xl md:text-base font-pt my-5 font-semibold'>
                                {JSON.stringify({
                                    name:'Chiraag Rokade',
                                    age:'25',
                                    gender:'Male',
                                    country:'INDIA'
                                }, null, 2)}
                            </pre>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home
