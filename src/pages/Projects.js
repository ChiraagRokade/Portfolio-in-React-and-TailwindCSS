import React from 'react'
import Layout from '../compoents/Layout'
import projectsData from '../resources/projects'

function Projects() {
    return (
        <Layout>
            <div className='mt-20'>
                <div className="h-screen">
                    <div className='h-3/4 '>
                        <lottie-player 
                            src="https://assets5.lottiefiles.com/packages/lf20_8zzfnwv8.json" 
                            background="transparent"  
                            speed="1"  
                            loop  
                            autoplay>
                        </lottie-player>
                    </div>
                    <p className='text-2xl text-center font-pt font-semibold'>Good ideas are not adopted automatically. They must be driven into practice with courageous practice.</p>
                    <h2 className='text-4xl text-center font-merr font-bold mt-5'>BECAUSE</h2>
                </div>
                <div className='text-center text-8xl font-merr font-bold bg-red-500 mx-20 p-10 text-white rounded-tl-full rounded-br-full md:mx-5 md:text-3xl'>
                    <h2>THE GAME IS...</h2>
                    <h2>CONSISTANCY</h2>
                </div>
            </div>
            <div className='grid mt-20 md:grid-cols-1 grid-cols-3 items-center justify-center gap-10 mx-20 md:mx-5'>
                {projectsData.map((project => {
                    return <div>
                        <div className='relative p-10 border-2 text-center rounded-tr-3xl rounded-bl-3xl border-gray-400'>
                            <img src={project.image} className='w-full h-96 text-center' />
                            <div className='absolute inset-0 flex items-center justify-center flex-col opacity-0 bg-black hover:opacity-80'>
                                <h2 className='text-4xl text-white font-merr font-semibold'>{project.title}</h2>
                                {/* <button className='border-2 rounded border-white py-2 hover:bg-green-500 text-white px-5 mt-5'>LINK</button> */}
                                <a href={project.link} target='_blank'><button className='border-2 rounded border-white py-2 hover:bg-green-500 text-white px-5 mt-5'>LINK</button></a>
                            </div>
                        </div>
                    </div>
                }))}
            </div>
        </Layout>
    )
}

export default Projects
